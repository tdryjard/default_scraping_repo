import puppeteer, { Browser, Page } from "puppeteer";

import { sleep } from "../../globalFunctions";


export const authentification = async ({ browser }: { browser: Browser }) => {
  const page = await browser.newPage();

  // Affiche les erreurs JavaScript sur la console
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.text());
  });

  // Ouvrir les DevTools (uniquement pour le débogage)
  // await page.evaluate(() => { debugger; });

  // Étape 1 : Aller à la page de connexion
  await page.goto("https://google.com/search"); // change to your target website URL
  

  await sleep(3000);
  
  // Étape 2 : Entrer l'email et le mot de passe et cliquer sur le bouton "se connecter"
  await page.type("#edit-name", process.env.SCRAPE_AUTH_EMAIL || ""); // update to input email selector
  await page.type("#edit-pass", process.env.SCRAPE_AUTH_PASSWORD || ""); // update to input password selector

  await sleep(3000);

  // Vérification du bouton avant le clic
  let button = await page.$("#valid-button"); // update to valid login button selector
  console.log("button", button)
  if (button) {
    console.log("Le bouton existe. Essayons de cliquer dessus...");
    await button.click(); // Vous pouvez aussi utiliser cette méthode pour le clic
    await sleep(2000);
  } else {
    console.log("Le bouton #edit-submit n'existe pas.");
  }

  await sleep(4000);

  // Ouvrir un nouvel onglet

  const newPage = await browser.newPage();

  await newPage.goto(`https://google.com`); // change to your target website URL
  await sleep(4000);
  // Refuser les cookies
};
