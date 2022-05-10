import Head from 'next/head'
import React from 'react'
import styles from './layout.module.css'
import Header from '../Header/index'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>With Iron Session</title>
      </Head>
      <Header />
      <main>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  )
}

export default Layout
