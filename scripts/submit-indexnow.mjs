const host = "www.motorelaytransport.com";
const key = "3ab8bf3b0027566b6c12fd2983b00f28";
const origin = `https://${host}`;
const sitemapUrl = `${origin}/sitemap.xml`;
const keyLocation = `${origin}/${key}.txt`;

const sitemapResponse = await fetch(sitemapUrl);
if (!sitemapResponse.ok) {
  throw new Error(`Could not fetch ${sitemapUrl}: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
  match[1]
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'"),
);

if (urlList.length === 0) {
  throw new Error(`No URLs were found in ${sitemapUrl}`);
}

for (const url of urlList) {
  if (new URL(url).host !== host) {
    throw new Error(`Sitemap URL does not belong to ${host}: ${url}`);
  }
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (!response.ok) {
  throw new Error(`IndexNow rejected the submission: ${response.status} ${await response.text()}`);
}

console.log(`Submitted ${urlList.length} URLs for ${host} to IndexNow.`);
