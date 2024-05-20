import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

import { useRef } from 'react';



const Home = (props) => {

  const bannerRef = useRef(null);

  const scrollToBanner = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Captioner</title>
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="logo">CAPTIONER</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-nav12">
                <Link to="/page" className="bodySmall">Prøv det her</Link>
                <br></br>
              </span>
            </nav>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">CAPTIONER</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav121 bodySmall">Home</span>
                <span className="home-nav22 bodySmall">Upload Image</span>
                <span className="home-nav32 bodySmall">Generate Caption</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading">
              <span>KI generert bildetekst for boligannonser</span>
              <br></br>
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Generer "captions" for bilder til din boligannonse</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <Link to="/page" className="home-hero-button1 buttonFilled">
                Prøv nå
              </Link>
              <button className="buttonFlat" onClick={scrollToBanner}>Lær mer her→</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <h2 className="home-features-heading heading2">
                Hvorfor bruke captioner 
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Bildetekst skrevet av KI, men som lyder som en eiendomsmegler
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Last opp bilde"
                subHeading="Enkelt last opp bilde for bildegenerering. Du har ubegrenset antall opplastninger - i motsetning til chatGPT!"
              ></FeatureCard>
              <FeatureCard
                heading="Første norske bilde-til-tekst KI"
                subHeading="Norges første "
              ></FeatureCard>
              <FeatureCard
                heading="Raske resultater"
                subHeading="Modellen er leverer beskrivelser raskt og enkelt. Spar deg for unødvendig bruk av tid på å skrive bildebeskrivelser."
              ></FeatureCard>
              <FeatureCard
                heading="Et miljøvennelig alternativ"
                subHeading="Har du tenkt på at det krever veldig mye energi å drive store KI-modeller? Det er ikke et problem her. Dette er en lliten og effektiv modell designet kun for dette formålet. "
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <h2 className="heading2">Priser</h2>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text40 heading3">Gratis</span>
                <span>Tjenesten er gratis! Enjoy</span>
              </div>
              <div className="home-container07">
                <span className="home-text41">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text44">✔</span>
                  <span className="bodySmall">
                    Tilgang til ubegrenset bildeopplastninger
                  </span>
                </div>
                <div className="home-container10">
                  <span className="home-text45">✔</span>
                  <span className="bodySmall">
                    Få flere forslag for hvert bilde
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text46">✔</span>
                  <span className="bodySmall">Spar tid</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                <span>
                  <Link to="/page">Gratis tjeneste - Ingen registrering</Link>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="bannerContainer home-banner1" ref={bannerRef}>
          <h1 className="home-banner-heading heading2">
            Om bildebeskrivelse-generatoren
          </h1>
          <span className="home-banner-sub-heading bodySmall">
                <span>
                  The Image Caption Generator uses a trained neural network
                  model to provide descriptive text captions for your images.
                  Simply upload an image and let the magic happen.
                </span>
              </span>
        </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container13">
              <Question1
                answer="Dette er laget i forbindelse med en masteroppgave på NTNU skrevet i samarbeid med Solgt.no "
                question="Hvorfor har jeg laget dette?"
              ></Question1>
              <Question1
                answer="Modellen er trent på et lite datasett bestående av bilder av kjøkken med tilhørende beskrivelse. Dette har lagt grunnlaget for å produsere beskrivelser av kjøkken med meglerspråk. "
                question="Hvordan har jeg laget modellen?"
              ></Question1>
              <Question1
                answer="Det eneste du trenger å gjøre er å laste opp et bild av et kjøkken, og generer beskrivelser til du har funnet en som du syns er passende "
                question="Hvordan fungerer det?"
              ></Question1>
              <Question1
                answer="Modellen er ikke alltid like presis, men man har derfor muligheten til å regenerere beskrivelse. Det er 5 ulike modeller som er trent, og man kan derfor iterere seg gjennom disse modellene of få totalt 5 ulike forslag til bildebeskrivelser."
                question="Hvor presis er modellen?"
              ></Question1>
              <Question1
                answer="xxx skal byttes med navn på kjøkkenleverandør og nnnn skal byttes med årstallet kjøkkenet er fra."
                question="Hvorfor står det xxx og nnnn i beskrivelsene?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container14">
            <span className="logo">CAPTIONER</span>
            <nav className="home-nav1">
              <Link to="/page" className="bodySmall">Prøv det her</Link>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container15">
            <span className="bodySmall home-text71">
              © 2024 WAITZ AS, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
