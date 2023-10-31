import React from 'react';
import '../pages/Home.css'
import Navbar from '../components/Navbar';
import Bottombar from '../components/Bottombar';
import Bodypart from '../components/Bodypart';


function Home() {
  return (
    <div>
      <Navbar/>
      <Bodypart/>
      <Bottombar/>
    </div>
  );
}

export default Home;
