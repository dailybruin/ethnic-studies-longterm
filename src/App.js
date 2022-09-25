import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import Article from './components/Article';
import Banner from "./components/Banner";
import Timeline from "./components/Timeline";

function App() {
  const [ data, setData ] = useState(null);
  const [landingDisplayed, setLandingDisplayed] = useState(false);
  
  useEffect(() => {
		fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/flatpage.2022.ethnic-studies-longterm"
    )
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  data && console.log(data)

  return data && (
    <div className="App">
      <Header/>
        <Landing image={data.landing_image} credits={data.landing_credits} setLandingDisplayed={setLandingDisplayed}/>
        <Banner/>
        <Article content={data.content} />
        <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
