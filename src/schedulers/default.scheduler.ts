const schedule = require("node-schedule");
const { autoScrape } = require("../scrapers/scraping/autoScrape");

export const scheduler = () => {
  schedule.scheduleJob("0 */6 * * *", () => {
    autoScrape();
  });
};
