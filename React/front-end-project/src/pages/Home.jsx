import React from 'react'
import Navbar from '../navbar/Navbar'
import Rightimg from '../images/rightimg.png'
import openai from '../images/OpenAI_Logo.svg'
import amazon from '../images/Amazon_logo.svg'
import google from '../images/Google_2015_logo.svg'
import marriot from '../images/Airbnb_Logo.svg'
// import antro from '../images/antro.png'
// import antro from '../images/antro.png'
const Home=()=> {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <div className="hero-left">
            <br />
            <span className="preview">Preview</span>

            <h1>
              Financial infrastructure
              <br />
              to grow your revenue
            </h1>

            <p>
              Join the millions of companies that use Stripe to accept
              payments online and in person, embed financial services,
              and power custom revenue models.
            </p>

            <button className="cta">Request an invite</button>
          </div>

          <div className="hero-right">
            <img src={Rightimg} alt="stripe card" />
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="logo-grid">
          <img src={openai} alt="OpenAI" />
          <img src={amazon} alt="Amazon" />
          <img src={google} alt="Google" />
          <img src={marriot} alt="Anthropic" />
        </div>

        <div className="logo-grid">
          <img src={amazon} alt="Shopify" />
          <img src={marriot} alt="Marriott" />
          <img src={openai} alt="Airbnb" />
          <img src={google} alt="Urban" />
        </div>
      </div>
    </>
  )
}

export default Home