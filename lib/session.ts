import type { IronSessionOptions } from 'iron-session'
import type { User } from 'pages/api/user'

export const sessionOptions: IronSessionOptions = {
  password: 'iron_password_session_test_iron_password_session_test',
  cookieName: 'iron-session/next.js',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}
