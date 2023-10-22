import puppeteer, { Browser } from "puppeteer";

export const initBrowser = async (): Promise<Browser> => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_BIN || "",
    args: ["--no-sandbox", "--disable-gpu"],
    headless: false,
  });

  return browser;
};
