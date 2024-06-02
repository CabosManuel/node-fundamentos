import puppeteer from "puppeteer";

(async () => {
  console.log('Starting browser...');
  // Lanzar navegador oculto
  const browser = await puppeteer.launch();

  // Lanzar navegador sin ocultar
  // const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  let title =  await page.evaluate(() => {
    // Este código se ejecuta dentro del navegador
    const h1 = document.querySelector('h1');
    console.log('h1', h1.innerText);

    return h1.innerText;
  });

  // Imprimir en nuestra consola
  console.log('h1', title);

  console.log('Closing browser...');
  browser.close();
  console.log('Browser closed');
})();