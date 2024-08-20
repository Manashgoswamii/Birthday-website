import React from 'react';
import './WishesPage.css';


const WishesPage = () => {
  return (
    <>
    <div className="wishes-page">
    <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"></link>
      
      <div className="wishes-list">
     
          <div  className="wish-card">
          <div className="photo1"></div>
             <h4>Michael</h4>
            <p>Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!</p>
           
          </div>
          <div  className="wish-card">
          <div className="photo2"></div>
             <h4>John</h4>
            <p>May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!</p>
           
          </div>
          <div  className="wish-card">
             <div className="photo3"></div>
             <h4>Danny</h4>
            <p>Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!</p>
           
          </div>
          <div  className="wish-card">
          <div className="photo4"></div>
             <h4>Albert</h4>
            <p>May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.</p>
           
          </div>
        
      </div>
      <div className="wishes">
        <h2>Friends Wishes</h2>
      </div>
    </div>
    </>
  );
};

export default WishesPage;
