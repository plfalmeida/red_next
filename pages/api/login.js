// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { nookies, setCookie } from 'nookies';

export default function handler(req, res) {
  const { name } = req.body

  setCookie({ res }, 'sessionId', name, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })

  res.status(200).json({ name: 'John Doe' })
}
