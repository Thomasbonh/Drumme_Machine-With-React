import React, { useState } from 'react'



export default function Main() {
  const [text, setText] = useState('');
  const [volume, setVolume] = useState(1);
  

  
    


/**
 * This part only adds a click event handler to all the .drum-pad
 * that will print out on console which pad was just clicked
 * (the event gets fired both when the button is actually clicked with mouse
 * ..and when the corresponding character gets pressed)
 */
//when the page is loaded 
document.addEventListener('DOMContentLoaded', () =>{
  //for each element having the drum-pad class
  document.querySelectorAll('.drum-pad').forEach((o, i)=>{
    //adds the handler for the click event for the current element in the loop
    o.addEventListener('click', (event)=>{
      //print out on console which pad triggered the click event
      console.log(`Clicked Pad: ${event.target.innerText}`);
    });  
  });
});

//when the event keydown gets fired on window (the page in the browser)
window.addEventListener('keydown', function(event) {
  //get all the elements having the drum-pad class 
  const pads = document.querySelectorAll('.drum-pad'); 
  //for each on of them 
  for(let pad of pads){ 
    
    //get the innerText of the current element in the loop
    const keypad = pad.innerText;        
    //if the pressed key is equal to the current element in the loop
    if (event.key.toLowerCase() == keypad.toLowerCase()){
      //toggle the active status on the current button
      pad.classList.toggle('active');
      //fire the click event on the element
      pad.click(); 
      //wait 100ms and then toggle again the active status for the current button
      setTimeout( ()=>{pad.classList.toggle('active')}, 100);
      //exit the event handler  
      return;
    }
  }    
})
// 
const playDrum = function(elem) {  
  const sound = (elem.getAttribute("data-sound"));
  const audioElement = document.querySelector(`audio[data-sound="${sound}"]`);
  audioElement.currentTime = 0; 
  audioElement.play(); 
}

Array.from(document.getElementsByClassName("drum-pad")).forEach(
  function(element, index, array) { 
    element.onclick = function() { 
      playDrum(element)  
    };
  }
);





  return (

    <> 
  
    <div className="wrap" >
        <div id="tiles" className="columns" >
           <div id="ti">
           <button id ="Q" className='drum-pad' data-sound="Q" onClick={ () => setText('Heater 1')}>Q</button>
           <audio id="audio"  data-sound="Q" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav"></audio>
           <button id= "W" className='drum-pad' data-sound="W" onClick={ () => setText('Heater 2')}>W</button>
           <audio data-sound="W" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav"></audio>
           <button id= "E" className='drum-pad'data-sound="E" onClick={ () => setText('Heater 3')}>E</button>
           <audio data-sound="E" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav"></audio>
           

           <button id= "A" className='drum-pad' data-sound="A" onClick={ () => setText('Heater 4')}>A</button>
           <audio data-sound="A" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav"></audio>
           <button id= "S" className='drum-pad' data-sound="S" onClick={ () => setText('Tom High')}>S</button>
           <audio data-sound="S" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav"></audio>
           <button id= "D" className='drum-pad' data-sound="D" onClick={ () => setText('Tom Low')}>D</button>
           <audio data-sound="D" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav"></audio>
           <button  id= "Z" className='drum-pad'data-sound="Z" onClick={ () => setText('Crash')}>Z</button>
           <audio data-sound="Z" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav"></audio>
           <button id= "X" className='drum-pad' data-sound="X" onClick={ () => setText('Ride')}>X</button>
           <audio data-sound="X" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav"></audio>
           <button  id= "C" className='drum-pad' data-sound="C" onClick={ () => setText('Hihat Open')}>C</button>
           <audio  data-sound="C" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav"></audio>

           </div>
        </div>

        <div id='wrapde' className="columns"> 
        
        <label className="one"> Power
      <button className="ones"  label="Power"  > On</button>
      </label>
        
       <div className='Kit'><p id="textes">{text}</p></div>
       
      <input
       type="range" 
        id ="range" min="0" 
        max="1"  step="0.01" 
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        />
         
      
        </div>
      </div>
    
    </>
  )
}
