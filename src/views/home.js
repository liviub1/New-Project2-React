import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard3 from '../components/feature-card3'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project2</title>
        <meta property="og:title" content="New Project2" />
      </Helmet>
      <header data-role="Accordion" className={styles['Header']}>
        <img
          alt="logo"
          src="/playground_assets/screenshot%202022-02-03%20at%2017.58.42-200h.png"
          className={styles['image']}
        />
        <div className={styles['Separator']}></div>
        <nav className={styles['Nav']}>
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </nav>
        <div data-type="AccordionHeader" className={styles['AccordionHeader']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-type="AccordionContent"
          className={styles['AccordionContent']}
        >
          <div className={styles['Nav1']}>
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className={styles['Hero']}>
        <h1 className={styles['text']}>
          {' '}
          Ètim cÄ este greu sÄ Ã®Èi iei rÄmas bun...
        </h1>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          SunaÈi pentru asistenÈÄ
        </button>
        <span className={styles['text01']}>
          Oferim sprijinul necesar Ã®n astfel de momente dificile
        </span>
        <span className={styles['text02']}>
          <span>Strada Baragan nr. 12</span>
          <span></span>
        </span>
      </div>
      <div className={styles['Features']}>
        <h1 className={styles['text05']}>
          <span>Explore our services</span>
          <br></br>
          <span></span>
        </h1>
        <span className={styles['text08']}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
            pellentesque nulla leo, sagittis vehicula sem commodo nec.â
          </span>
          <span></span>
        </span>
        <div className={styles['container1']}>
          <FeatureCard3 rootClassName="rootClassName"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName3"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName1"></FeatureCard3>
        </div>
      </div>
      <a href="tel:0725132276" className={styles['link']}>
        0725132276
      </a>
    </div>
  )
}

export default Home
