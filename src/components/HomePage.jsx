import React from 'react';
import './HomePage.css';

const HomePage = () => {
 
    
//  var cake=document.querySelector('cake');
//  cake.addEventListener('click', function () {
//     var audio = document.getElementById("HBD");
//     audio.play();
// });
  return (
   <>
    <div className="home-page">
      <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"></link>
       <div className="wish">
        Happy Birthday
    </div>
       <div className="photo">

       </div>
    <div className="cake">
        <div className="plate"></div>
        <div className="layer"></div>
        <div class="icing">
            <div className="name">
                <p>Happy Birthday <br /> <span id="name"> John Doe</span></p>
            </div>
        </div>
        <div className="candle1">
            <div className="flame1"></div>
        </div>
        <div className="candle2">
            <div className="flame2"></div>
        </div>
        <div className="candle3">
            <div className="flame3"></div>
        </div>
        <div className="candle4">
            <div className="flame4"></div>
        </div>
        <div className="candle5">
            <div className="flame5"></div>
        </div>
    </div>
    <div className="text">May all your dreams come true and May God crown you with all the success in life. Wishing you many
        returns of this day. Happy birthday! From, Manash
    </div>
     {/* <audio id="HBD" loop>
        <source src="https://dl.dropbox.com/s/57hjcyz47o4us25/audio.mp3"/>
    </audio>  */}
    </div>
    </>
    
  );
};

export default HomePage;
