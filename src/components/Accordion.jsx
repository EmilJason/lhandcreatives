import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Accordion.module.css'

import closeIcon from "../assets/img/accordion-arrow-pc.svg";
import openIcon from "../assets/img/accordion-arrow-pc-1.svg";
const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`${styles.accordionIcon} ${isOpen ? styles.open : ''}`}>
          {isOpen ? <img src={openIcon} width='10' /> : <img src={closeIcon} width='10' />}
        </span>
      </div>
      {isOpen && (
        <div className={styles.accordionContent} style={{ display: 'block' }}>
            <hr />
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Accordion
