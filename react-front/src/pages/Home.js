import React from 'react';

import Mongoose from 'mongoose';

let random_num;

const Home = ()=>{
  return (
      <div>
          <h2>
              홈
          </h2>
          <button onClick={()=>{
               random_num = Math.random().toString(16).replace(/.*(\w{3})/, '#$1');

          }}>DB Page 추가</button>
      </div>
  )
};

export default Home;