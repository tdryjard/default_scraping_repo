# default_scraping_repo

### Launch project in local : `npm run dev`

### Launch project on server : `npm start` => change "--max-old-space-size" in "start" script by server RAM perf

## config .env (input the .env with differentes var)

#### PORT=

(optional, default port = 8000)

#### CHATGPT_API_KEY=

(optional, if you want use chatgpt)

#### DATABASE=

(your mongoDB database access, ex : mongodb+srv://
[username]:[password]@[cluster]/?retryWrites=true&w=majority)

#### SECRET_KEY=
(secret key for api token cryptage)

### SCRAPE_AUTH_EMAIL=
(your email login for scrape)

### SCRAPE_AUTH_PASSWORD=
(your password login for scrape)


## MAIN LIBRAIRIES
- Puppeteer
- Typescript
- Express
- MongoDB

### To see scraping 

/scrapers/gloabalFunctions/initBrowser

change headless: true => headless: false

(headle must be true on a distant server)