const { chromium } = require("playwright");

const URL = "https://internet.lpu.in/";


async function login() {
    const browser = await chromium.launch({
        headless: false,
        channel: "msedge"
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(URL, { waitUntil: "domcontentloaded" });

    const con = await page.content();

    if (con.includes("Please Logout")) {
        console.log("Already logged in. Closing...");
        await browser.close();
        return;
    }

    await page.fill('input[name="username"]', '12324355');
    await page.fill('input[name="password"]', 'Thekakashi@69');

    await page.check("#agreepolicy");
    await page.click("#loginbtn");

    await page.waitForTimeout(1000);

    const content = await page.content();

    if (content.includes("You have successfully logged in") || content.includes("Please Logout")) {
        console.log("LOGIN SUCCESSFUL");
        await browser.close();
    } else {
        console.log("Login failed. Trying next credential.");
    }
}

login();