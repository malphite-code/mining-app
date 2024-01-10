
import express from 'express';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import Account from './db/account.js';

const app = express();
const port = 5000;
const viewPath = `${process.cwd()}/views/`;
const browsers = {};

// Helper
async function excute(account) {
  const userDataDir = path.join(`${process.cwd()}/browser/`, `profile_${account.id}`);

  if (!fs.existsSync(userDataDir)) {
    fs.mkdirSync(userDataDir);
  }

  const browser = await puppeteer.launch({
    headless: false,
    userDataDir,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: [
      '--no-sandbox',
      '--start-maximized'
    ],
  });
  const contextId = browser.process().pid

  // Create page
  const page = await browser.newPage();
  let interval = null;

  // Remove process
  browser.on('disconnected', async () => {
    console.log('Browser disconnected!');
    if (interval) {
      clearInterval(interval)
      interval = null;
    }
    await Account.update({ context_id: null, status: 0 }, { id: account.id });
  });

  try {
    await page.setViewport({ width: 1200, height: 800 });

    // Update account status
    await Account.update({ context_id: contextId, status: 1 }, { id: account.id });

    // Navigate to the login page
    await page.goto(account.url);

    // Implement your login logic based on the structure of the login page
    const login = async () => {
      const isLogin = await page.$('input[name="name"]');
      if (isLogin !== null) {
        await page.type('input[name="name"]', account.email);
        await page.type('input[name="pass"]', account.password);
        await page.click('button#edit-submit');
        await page.waitForNavigation();
      }
    }
    await login();

    // Reload page
    const reload = async () => {
      page.reload();
      await page.waitForNavigation();
      await login();
      await Account.update({ status: 1 }, { id: account.id });
    }

    // store browsers
    browsers[account.id] = { browser, reload };

    // check page offline
    interval = setInterval(async () => {
      const offline = await page.evaluate(() => {
        let msg = document.querySelector('div#status-bar-connection-status')?.textContent?.toLowerCase() ?? '';
        let reloadbutton = document.querySelectorAll('div.theia-button[data-action="Reload"]').length;
        return msg === 'offline' || reloadbutton > 0;
      });

      if (offline) {
        await Account.update({ status: 0 }, { id: account.id });
        reload();
      }
    }, 15000);
  } catch (error) {

    if (interval) {
      clearInterval(interval)
      interval = null;
    }

    await browser.close();
    await Account.update({ context_id: null, status: 0 }, { id: account.id });
  }

  process.on('exit', async (code) => {
    if (interval) {
      clearInterval(interval)
      interval = null;
    }
    
    await browser.close();
    await Account.update({ context_id: null, status: 0 }, { id: account.id });
  });
}

// App Router
app.get('/', function (req, res) {
  res.sendFile(path.join(viewPath, '/index.html'));
});

app.get('/api/v1/accounts', async (req, res) => {
  const accounts = await Account.all();
  res.json(accounts);
});

app.get('/api/v1/accounts/reload/:id', async (req, res) => {
  const browserId = req.params.id;
  const account = await Account.findById(browserId);

  if (!account) {
    res.status(404).json({ status: false, message: `Browser [${browserId}] is not started!` });
  }

  const browser = browserId[account.id] ?? null;

  if (!browser) {
    res.status(404).json({ status: false, message: `Browser [${browserId}] is not started!` });
    return;
  }

  browser.reload();

  res.json({ status: true, message: `Browser [${browserId}] is reloaded!` });
});

app.post('/api/v1/accounts/start', async (req, res) => {
  const accounts = await Account.all();

  for (const account of accounts) {
    excute(account);
  }

  res.json({ status: true });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);