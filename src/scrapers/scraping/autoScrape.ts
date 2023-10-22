import MessageHistoryModel from "../../models/message";

import { initBrowser, setAnonyme } from "../globalFunctions";
import { authentification } from "./functions";


export const autoScrape = async () => {

  // Exemple mongoDB
    

    const browser = await initBrowser();


    await authentification({ browser });


    const page = await browser.newPage();

    await setAnonyme(page)

    page.goto(``)


    await page.goto(``);
    console.log("here 3")


    browser.close()

};
