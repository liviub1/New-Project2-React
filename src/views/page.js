import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - New Project2</title>
        <meta property="og:title" content="Page - New Project2" />
      </Helmet>
    </div>
  )
}

export default Page
