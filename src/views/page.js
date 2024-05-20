import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Hero9 from '../components/hero9';
import ImageUploader from '../components/ImageUploader';
import Contact3 from '../components/contact3';
import './page.css';

const Page = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - CAPTIONER</title>
        <meta property="og:title" content="Page - CAPTIONER" />
      </Helmet>
      <div className="page-header">
        <header className="navbarContainer page-navbar-interactive">
          <span className="logo">CAPTIONER</span>
          <nav className="page-links">
            <Link to="/" className="page-nav12 bodySmall">Hjem</Link>
          </nav>
        </header>
      </div>
      <div className="page-hero2">
        <Hero9 heading1="Last opp et bilde av et kjøkken her" content1="Det er bare mulig med ett bilde om gangen" />
      </div>
      <div className="outer-uploader">
        <div className="center-uploader">
          <ImageUploader />
        </div>
      </div>
      <div className="page-contact4">
        <Contact3 />
      </div>
      <div className="page-footer">
        <footer className="footerContainer page-footer1">
          <div className="page-container1">
            <span className="logo">CAPTIONER</span>
            <nav className="page-nav1">
              <Link to="/" className="bodySmall">Hjem</Link>
            </nav>
          </div>
          <div className="page-separator"></div>
          <div className="page-container2">
            <span className="bodySmall page-text2">© 2024 WAITZ AS, All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
