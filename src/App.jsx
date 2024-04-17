import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="hero">
        <section className="head">
          <div id="logo">
            <img src="./src/assets/images/Logo.svg" alt="Weflix Logo" />
          </div>
          <div className="bt">
            <button id="bt1">English</button>
            <button id="bt2">Sign In</button>
          </div>
        </section>
        <section className="body">
          <div className="txt">
            <div id="a">Enjoy big movies, hit series and more from ₹ 149.</div>
            <h5 id="b">Join today. Cancel anytime.</h5>
            <h6 id="c">Ready to watch? Enter your email to create or restart your membership.</h6>
            <div className="inb">
              <input type="email" placeholder="Email Address" className="inp" />
              <button className="bt3">Get Started </button>
            </div>
          </div>
        </section>
        <img src="./src/assets/images/bg.jpg" className="bg" alt="Background" />
      </section>
      <section className="one sect">
        <div className="txt2">
          <h1>Enjoy on your TV</h1>
          <h2>Watch on smart TVs, PlayStation, Xbox,</h2>
          <h2>Chromecast, Apple TV, Blu-ray players and</h2>
          <h2>more.</h2>
        </div>
        <div className="tv">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" width="555px" height="416px" className="i1" alt="TV" />
        </div>
        <div className="vid">
          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted />
        </div>
      </section>
      <section className="two sect">
        <div className="ip">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" height="416.25px" width="555px" className="i2" alt="Mobile" />
        </div>
        <div className="txt3">
          <h1>Download your</h1>
          <h1>shows to watch</h1>
          <h1>offline</h1>
          <h2>Save your favourites easily and always</h2>
          <h2>have something to watch.</h2>
        </div>
      </section>
      <section className="three sect">
        <div className="vid2">
          <video src="./src/assets/videos/video1.m4v" autoPlay loop muted />
        </div>
        <div className="thr">
          <div className="txt4">
            <h1>Watch everywhere</h1>
            <h2>Stream unlimited movies and TV shows on</h2>
            <h2>your phone, tablet, laptop, and TV.</h2>
          </div>
          <div className="tv2">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" width="555px" height="416px" className="i3" alt="TV" />
          </div>
        </div>
      </section>
      <section className="four sect">
        <div className="kids">
          <img src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" width="555px" height="416.25px" className="i4" alt="Kids" />
        </div>
        <div className="txt5">
          <h1>Create profiles for</h1>
          <h1>kids</h1>
          <h2>Send children on adventures with their</h2>
          <h2>favourite characters in a space made just</h2>
          <h2>for them—free with your membership.</h2>
        </div>
      </section>
      <section className="FAQ">
        <h1>Frequently Asked Questions</h1>
        <div className="btn btn1">
          <h2>What is NetFlix</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="btn btn2">
          <h2>How much does Netflix cost?</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="btn btn3">
          <h2>What can I watch on Netflix?</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="btn btn4">
          <h2>Where can I watch?</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
      <footer>
        <div className="q">
          <h1><a href='https://affan-portfolioo.vercel.app/'>Click for My Portfolio</a></h1>
        </div>
        <div className="fc">
          <div className="a11">
            <div className="a a1"><a href="">Investor Relations</a><a href="">Help Centre</a><a href="">Media Centre</a><a href="">Contact Us</a></div>
            <div className="a a2"><a href="">Jobs</a><a href="">Account</a><a href="">Privacy</a><a href="">Speed Test</a></div>
          </div>
          <div className="a22">
            <div className="a a3"><a href="">Ways to Watch</a><a href="">Speed Test</a><a href="">Cookie Preferences</a><a href="">Legal Notices</a></div>
            <div className="a a4"><a href="">Terms of Use</a><a href="">Legal Notices</a><a href="">Corporate</a><a href="">Only on Netflix</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
