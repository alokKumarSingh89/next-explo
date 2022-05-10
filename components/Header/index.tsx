import useUser from 'lib/useUser'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fetchJson from 'lib/fetchJson'
import styles from './header.module.css'

const Header = () => {
  const { user, mutateUser } = useUser()
  const router = useRouter()
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">
              <a className={styles.a}>Home</a>
            </Link>
          </li>
          {user?.isLoggedIn === false && (
            <li className={styles.li}>
              <Link href="/login">
                <a className={styles.a}>Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn && (
            <>
              <li className={styles.li}>
                <Link href="/profile-sg">
                  <a className={styles.a}>
                    <span
                      style={{
                        marginRight: '.3em',
                        verticalAlign: 'middle',
                        borderRadius: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={user.avatarUrl}
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    Profile (Static Generation, recommended)
                  </a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/profile-ssr">
                  <a className={styles.a}>Profile (Server-side Rendering)</a>
                </Link>
              </li>
              <li className={styles.li}>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault()
                    mutateUser(
                      await fetchJson('/api/logout', { method: 'POST' }),
                      false
                    )
                    router.push('/login')
                  }}
                  className={styles.a}
                >
                  Logout
                </a>
              </li>
            </>
          )}
          <li className={styles.li}>
            <a href="https://github.com/vvo/iron-session" className={styles.a}>
              <Image
                src="/GitHub-Mark-Light-32px.png"
                width="32"
                height="32"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
