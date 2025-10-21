import React from 'react';
import Banner from '../Components/HomeLayout/Banner';
import PopularGames from '../Components/HomeLayout/PopularGames';
import NewsLetter from '../Components/HomeLayout/NewsLetter';

const Home = () => {
  return (
    <div className='mt-10'>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
