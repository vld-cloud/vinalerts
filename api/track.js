export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://vinalerts.vercel.app');

  const allowed = ['pageview', 'cta_click', 'pricing_click', 'faq_open'];
  const e = (req.query.e || 'pageview').replace(/[^a-z_]/g, '');
  if (!allowed.includes(e)) return res.status(400).json({ ok: false });

  try {
    await fetch(`http://malolechat.ddns.net:8080/vinted_bot/track.php?e=${e}`, {
      method: 'GET',
      headers: { 'X-Forwarded-For': req.headers['x-forwarded-for'] || '' },
    });
  } catch (_) {}

  res.status(200).json({ ok: true });
}
