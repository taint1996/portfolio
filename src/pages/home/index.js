import React from 'react'
import bioBG from '../../assets/images/bio_background.svg';
import { ArrowForwardOutline } from 'react-ionicons'

import Header from '../../shared/Header'
import Education from './Education'
import Footer from './Footer'

import './home.scss'

const Home = () => {
    return (
      <>
        {/* Header  */}
        <Header />

        <section className="bio container">
          <div className='bio-bg'>
            <img src={bioBG} alt='background Bio' />
          </div>
          <div className='bio-myAvt'>
            <img src={require("../../assets/images/my_avt.png")} alt='My Image' />
          </div>
          <div className="left">
            <h1 className='left-myName'><span>Tai</span><span>Nguyen (TJ)</span></h1>
            <div className="left-titleJob">Web Developer - RoR Developer</div>
            <section className="left-jobContent">
              <p>
                - With 4 years working with Web Developer ( have 3+ years working with Ruby on Rails). I look forward to leveraging my skills and knowledge to contribute to the company as a role Middle Junior/ Senior Ruby on Rails Developer
              </p>
              <p>- The ability to embrace new working practices and methodology.</p>
              <p>- Strong willingness to learn.</p>
              <p>- Have a high sense of responsibility, careful, frequently provides high quality of work.</p>
              <p>- Interest and willingness in developing related job knowledge and skills.</p>
              <p>- Able to research, teamwork and self learning</p>
            </section>

            <button className="left-btnHireMe button-tertiary">
              Hire me now

              <ArrowForwardOutline
                color={'#00000'}
                beat
                title={'Hire me now'}
                height="55px"
                width="55px"
              />
            </button>
          </div>
          <div className="right">
            <div className="right-title">Contact</div>
            <div className="right-contactEmail">tai.nguyentrung1996@gmail.com</div>
            <div className="info">(+84)0903.726.463</div>
            <div className="icons">
              {/* <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-figma"></ion-icon> */}
            </div>
          </div>

        </section>

        <Education />

        <Footer />
      </>
    )
}

export default Home
