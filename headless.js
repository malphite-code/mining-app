
import express from 'express';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import Account from './db/account.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

process.setMaxListeners(1000);

const port = 5000;
const viewPath = `${process.cwd()}/views/`;
const browsers = {};
// const executablePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const executablePath = "/usr/bin/google-chrome-stable";

// Helper
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function excute(account) {
  const userDataDir = path.join(`${process.cwd()}/browser/`, `profile_${account.id}`);

  if (!fs.existsSync(userDataDir)) {
    fs.mkdirSync(userDataDir);
  }

  // Clear old browser
  const accountBrowser = browsers[account.id] ?? null;
  if (accountBrowser) {
    await accountBrowser.browser.close();
    browsers[account.id] = null;
  }

  let interval = null;
  let interval2 = null;

  const manualClearInterval = () => {
    if (interval) {
      clearInterval(interval)
      interval = null;
    }

    if (interval2) {
      clearInterval(interval2)
      interval2 = null;
    }
  }

  manualClearInterval();

  try {
    const browser = await puppeteer.launch({
      headless: true,
      userDataDir,
      executablePath,
      args: [
        '--disable-gpu',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--disable-speech-api', // 	Disables the Web Speech API (both speech recognition and synthesis)
        '--disable-backgrounding-occluded-windows',
        '--disable-breakpad',
        '--disable-client-side-phishing-detection',
        '--disable-component-update',
        '--disable-default-apps',
        '--disable-dev-shm-usage',
        '--disable-domain-reliability',
        '--disable-extensions',
        '--disable-features=AudioServiceOutOfProcess',
        '--disable-hang-monitor',
        '--disable-ipc-flooding-protection',
        '--disable-notifications',
        '--disable-offer-store-unmasked-wallet-cards',
        '--disable-popup-blocking',
        '--disable-print-preview',
        '--disable-prompt-on-repost',
        '--disable-renderer-backgrounding',
        '--disable-setuid-sandbox',
        '--disable-sync',
        '--ignore-gpu-blacklist',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-first-run',
        '--no-pings',
        '--no-sandbox',
        '--no-zygote',
        '--password-store=basic',
        '--use-gl=swiftshader',
        '--use-mock-keychain'
      ],
    });
    const contextId = browser.process().pid
  
    console.log(`IDE [${account.id}] is online - Starting...`);
  
    // Create page
    const page = await browser.newPage();
  
    // Remove process
    browser.on('disconnected', async () => {
      console.log('Browser disconnected!');
s
      manualClearInterval();

      await Account.update({ context_id: null, status: 0 }, { id: account.id });
    });
  
    try {
      await page.setViewport({
        width: 1200, // Set your desired width
        height: 600, // Set your desired height
        deviceScaleFactor: 1,
      });
  
      // Update account status
      await Account.update({ context_id: contextId, status: 1 }, { id: account.id });
  
      // Navigate to the login page
      page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
      });  
      await page.goto(account.url, { waitUntil: 'networkidle2', timeout: 0 });
  
      // Implement your login logic based on the structure of the login page
      const login = async () => {
        await delay(10000);
        const isLogin = await page.$('input[name="name"]', { timeout: 60000 });
        if (isLogin !== null) {
          await page.type('input[name="name"]', account.email);
          await page.type('input[name="pass"]', account.password);
          await page.click('button#edit-submit');
          await page.waitForNavigation({ timeout: 0 });
        }
      }

      await login();
  
      // Reload page
      const reload = async () => {
        console.log(`IDE [${account.id}] is offline - Reloading...`);

        await page.reload();
        await page.waitForNavigation({ timeout: 0 });

        await login();
        await Account.update({ status: 1 }, { id: account.id });
      }
  
      // store browsers
      browsers[account.id] = { browser, reload };
  
      // check page offline
      interval = setInterval(async () => {
        try {
          await reload();
        } catch (error) {
          console.warn(`IDE [${account.id}]: [${error.message}]`);
        }
      }, 1800000);

      // Check login page
      interval2 = setInterval(async () => {
        try {
          const currentURL = await page.url();
          if (currentURL.startsWith('https://accounts.acquia.com/sign-in')) {
            await login();
          }
        } catch (error) {
          console.log(`IDE [${account.id}]: [${error.message}]`);
        }
      }, 60000);
    } catch (error) {
      console.log(`IDE [${account.id}]: [${error.message}]`);

      manualClearInterval();
      await browser.close();
      await Account.update({ context_id: null, status: 0 }, { id: account.id });
    }
  } catch (error) {
    console.log(`IDE [${account.id}]: [${error.message}]`);

    const br = browsers[account.id] ?? null;
    if(br) {
      await br.browser.close();
      browsers[account.id] = null;
    }

    manualClearInterval();
    await Account.update({ context_id: null, status: 0 }, { id: account.id });
  }
}

// App Router
app.get('/', function (req, res) {
  res.sendFile(path.join(viewPath, '/index.html'));
});

app.get('/api/v1/accounts', async (req, res) => {
  const accounts = await Account.all();
  res.json(accounts);
});

app.get('/api/v1/accounts/:id', async (req, res) => {
  const id = req.params.id;
  const account = await Account.findById(id);

  if (!account) {
    res.status(404).json({ status: false, message: `Browser [${browserId}] is not found!` });
    return;
  }

  res.json({ status: true, data: account });
});

app.post('/api/v1/accounts/create', async (req, res) => {
  const body = req.body;

  body.status = 0;
  body.context_id = null;
  body.password = 'Changeme2023..';

  await Account.create(body);

  res.json({ status: true, message: `Browser [${body.id}] is saved!` });
});

app.post('/api/v1/accounts/start-multi', async (req, res) => {
  const ids = req.body.ids ?? [];

  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    const account = await Account.findById(id);

    try {
      excute(account);
    } catch (error) {
      res.status(404).json({ status: false, message: `Browser [${id}] is not started!` });
    }
  }

  res.json({ status: true, message: `All browsers is starting!` });
});

app.post('/api/v1/accounts/start/:id', async (req, res) => {
  const browserId = req.params.id;
  const account = await Account.findById(browserId);

  if (!account) {
    res.status(404).json({ status: false, message: `Browser [${browserId}] is not started!` });
  }

  try {
    excute(account);
  } catch (error) {
    res.status(404).json({ status: false, message: `Browser [${browserId}] is not started!` });
  }

  res.json({ status: true, message: `Browser [${browserId}] is starting!` });
});

app.post('/api/v1/accounts/reload/:id', async (req, res) => {
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

  try {
    for (let index = 0; index < accounts.length; index++) {
      const account = accounts[index];
      await excute(account);
    }  
  } catch (error) {
    res.json(500, { status: false, message: error.message });
    return;
  }

  res.json({ status: true });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);