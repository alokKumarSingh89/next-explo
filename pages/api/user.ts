import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
export type User = {
  isLoggedIn: boolean
  login: string
  avatarUrl: string
}

export default withIronSessionApiRoute(userRouter, sessionOptions)

async function userRouter(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    })
  } else {
    res.json({
      isLoggedIn: false,
      login: '',
      avatarUrl: '',
    })
  }
}
