import React from 'react'

import PropTypes from 'prop-types'

import './contact3.css'

const Contact3 = (props) => {
  return (
    <div className="contact3-contact20 thq-section-padding">
      <div className="contact3-max-width thq-section-max-width">
        <div className="contact3-section-title">
          <div className="contact3-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact3-text1 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact3-row">
          <div className="contact3-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact3-contact-info">
              <div className="contact3-content2">
                <h3 className="contact3-text2 thq-heading-3">
                  <span>Simen.myhre.w@gmail.com</span>
                  <br></br>
                </h3>
              </div>
            </div>
          </div>
          <div className="contact3-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact3-contact-info1">
              <div className="contact3-content4">
                <h3 className="contact3-text5 thq-heading-3">
                  <span>+47 472 640 30</span>
                  <br></br>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact3.defaultProps = {
  content2: 'Get in touch with us today!',
  email1: 'simen.myhre.w@gmail.com',
  address1: '456 Test Ave, Bucharest',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content1:
    'Jeg er tilgjengelig på mail eller telefon om du skulle ha noen spørsmål angående prosjektet',
  content4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Ta kontakt!',
  content5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  phone1: '+1 (555) 000-0000',
}

Contact3.propTypes = {
  content2: PropTypes.string,
  email1: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content5: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact3
