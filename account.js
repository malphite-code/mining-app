import puppeteer from 'puppeteer';
import UserAgent from 'user-agents';
import { faker } from '@faker-js/faker';
import User from './db/user.js';

const jobs = ['Business Executive', 'IT Executive', 'IT Architect or IT Operations', 'Product or Digital Marketing', 'Website Design or Development'];
const industries = ['Aerospace & Defense', 'Consumer Goods / Electronics', 'Education', 'Energy & Utilities', 'Financial Services', 'Food & Beverage', 'Government - Federal', 'Government - State / Local', 'Healthcare', 'High Tech Software / Services', 'Manufacturing / Engineering', 'Media and Entertainment', 'Non-profit / NGO', 'Pharmaceuticals', 'Publishing', 'Retail', 'Telecommunications', 'Travel & Transportation', 'Digital Agency / Web Development / SI', 'Other'];

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const getExecutablePath = () => {
  if (process.platform === 'linux') {
    return "/usr/bin/google-chrome-stable";
  } else if (process.platform === 'darwin') {
    return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  } else {
    return null;
  }
}

const getRandomElement = (array) => {
  if (array.length === 0) {
    return undefined; // or handle it in your own way
  }

  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const run = async () => {
  const proxy = "http://bactrvjg-rotate:0rf81r1bbnxb@p.webshare.io:80"
  const URL = "https://accounts.acquia.com/sign-up?site=cloud&portal=trial&path=a/provision/application&utm_source=website&utm_medium=cta&utm_campaign=ws_ww_freetrials_q4223&utm_content=7016g000000FnLWAA0&utm_term=website_acom_homepage_hero";
  const mailURL = "https://tmailor.com/en";
  const executablePath = getExecutablePath();
  
  const browser = await puppeteer.launch({
    headless: false,
    protocolTimeout: 360000,
    executablePath,
    args: [
      '--disable-web-security',
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

  try {
    // --------------------------- Login page ---------------------------
    const page = await browser.newPage();

    // Set Argent
    const userAgent = new UserAgent({ deviceCategory: 'desktop' });
    const randomUserAgent = userAgent.toString();
    await page.setUserAgent(randomUserAgent);
    await page.setViewport({
      width: 1200, // Set your desired width
      height: 600, // Set your desired height
      deviceScaleFactor: 1,
    });
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 0 });
     
    // --------------------------- Mail page ---------------------------
    const pageMail = await browser.newPage();
    await pageMail.setViewport({
      width: 1200, // Set your desired width
      height: 600, // Set your desired height
      deviceScaleFactor: 1,
    });
    await pageMail.goto(mailURL, { waitUntil: 'networkidle2', timeout: 0 });

    // Wait for the input element to be present
    const emailInputSelector = 'input[name="youremail"]';
    await pageMail.waitForSelector(emailInputSelector);

    // Get the value of the input element
    let email = '';
    while (!isValidEmail(email)) {
      email = await pageMail.$eval(emailInputSelector, (input) => input.value);
    }
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const phone = faker.phone.number('+191########')
    const password = "Changeme2023..";
    const job = getRandomElement(jobs);
    const industry = getRandomElement(industries);
    const company = faker.company.name();

    // --------------------------- Input fields data ---------------------------
    await page.bringToFront();
    await page.type('input#edit-field-profile-firstname-und-0-value', firstName);
    await page.type('input#edit-field-profile-lastname-und-0-value', lastName);
    await page.type('input#edit-mail', email);
    await page.type('input#edit-pass', password);
    await page.type('input#edit-field-profile-officephone-und-0-value', phone);
    await page.select('select#edit-field-profile-job-function-und', job);
    await page.select('select#edit-field-profile-industry-und', industry);
    await page.type('input#edit-field-profile-organization-und-0-value', company);
    await page.click('#edit-acquia-trial-terms');
   
    await User.create({ email, password });
  } catch (error) {
    console.log(`IDE: [${error.message}]`);
    await browser.close();
  }
}

// Start
run();

// const arrs = [1,2,3,4,5];
// for (let index = 0; index < arrs.length; index++) {
//   run();
// }