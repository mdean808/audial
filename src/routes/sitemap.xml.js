export async function GET() {
  return {
    headers: {
      'Content-Type': 'application/xml'
    },
    body: `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
          <loc>https://audial.mogdan.xyz</loc>
          <lastmod>2022-08-06</lastmod>
        </url>
        <url>
          <loc>https://audial.mogdan.xyz/stats</loc>
          <lastmod>2022-08-06</lastmod>
        </url>
        <url>
          <loc>https://audial.mogdan.xyz/random</loc>
          <lastmod>2022-08-06</lastmod>
        </url>
        <url>
          <loc>https://audial.mogdan.xyz/custom</loc>
          <lastmod>2022-08-06</lastmod>
        </url>
        <url>
          <loc>https://audial.mogdan.xyz/custom/random</loc>
          <lastmod>2022-08-06</lastmod>
        </url>
      </urlset>
    `.trim()
  };
}
