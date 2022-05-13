import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken()
  res.send(JSON.stringify(token, null, 2))
}
