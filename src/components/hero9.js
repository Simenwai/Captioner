import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: 'Last opp et bilde her',
  content1: 'Det er bare mulig med ett bilde om gangen',
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
  action2: 'Secondary action',
  image1Alt: 'image',
  action1: 'Velg bilde',
}

Hero9.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero9
