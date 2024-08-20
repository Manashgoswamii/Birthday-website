import React from 'react';
import './MemoriesPage.css';
import "./photo1.jpg";
import "./photo2.jpg";
import "./photo3.jpg";



const MemoriesPage = () => {
//   window.addEventListener('click', function () {
//     var audio = document.getElementById("HBD");
//     audio.play();
// });
   
  return (
    
    <div className="memories-page">
      
      
      
      <div className="memories-loop">
        <div className='memory-1'>
        
        </div>
        <div className='memory-2'>
        
        </div>
        <div className='memory-3'>
        
        </div>
        <div className='memory-2'>
        
        </div>
       
      </div>
      
      <div className="memories-loop">
        <div className='memory-1'>
        
        </div>
        <div className='memory-2'>
        
        </div>
        <div className='memory-3'>
        
        </div>
        <div className='memory-2'>
        
        </div>
      
        
      </div>
      {/* <audio id="HBD" loop>
        <source src="https://dl.dropbox.com/s/57hjcyz47o4us25/audio.mp3"/>
    </audio> */}
    </div>
  );
};

export default MemoriesPage;
