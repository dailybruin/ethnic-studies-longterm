import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline/Timeline';

function App() {
  const [ data, setData ] = useState(null);
  
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
      Hello Daily Bruin!
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
