import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;

  const response = await fetch(url);
  const blob = await response.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());

  res.setHeader('Content-Type', response.headers.get('content-type'));
  res.setHeader('Content-Disposition', 'attachment; filename=landing-page.png');
  res.send(buffer);
}
