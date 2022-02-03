import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <Link to="/" className={styles['navlink']}>
        {props.text}
      </Link>
      <span className={styles['text']}>{props.text1}</span>
      <span className={styles['text1']}>{props.text2}</span>
      <span className={styles['text2']}>{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text2: 'Pachete funerare',
  text3: 'Contact',
  text1: 'Serviciile noastre',
  text: 'Acasa',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
