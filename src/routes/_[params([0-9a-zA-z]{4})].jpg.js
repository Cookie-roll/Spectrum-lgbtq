import puppeteer from 'puppeteer';
import { baseUrl } from '../../env';

export async function get(req, res, next) {
    const { params } = req.params;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 600});

    await page.goto(`${baseUrl}/${params}`);
    await page.waitFor(300);
    const x = await page.screenshot({type: 'jpeg'});

    res.writeHead(200, {
        'Content-Type': 'image/jpeg'
    });

    res.end(x);
}
