import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import Landing from "./components/Landing";
=======
import Article from './components/Article';
>>>>>>> origin/tracy

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
<<<<<<< HEAD
      <Landing image={data.landing_image} credits={data.landing_credits} setLandingDisplayed={setLandingDisplayed}/>
=======
        <Article content={data.content} />
>>>>>>> origin/tracy
      <Footer/>
    </div>
  );
}

export default App;
