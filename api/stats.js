export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://vinalerts.vercel.app');
  res.setHeader('Cache-Control', 'no-store');

  try {
    const r = await fetch('http://malolechat.ddns.net:8080/vinted_bot/stats.php', {
      signal: AbortSignal.timeout(4000),
    });
    const data = await r.json();
    res.status(200).json(data);
  } catch (_) {
    res.status(200).json({ scan: 18459, notif: 1422, ok: false });
  }
}
