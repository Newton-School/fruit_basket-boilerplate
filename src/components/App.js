import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  

  
  return (
    <div id="main">
      <h2>Simple Application</h2>
      <div id='editing-page'>
        <div id='tabs-section'>
          
            <div className='tabs'  key={} >
              <div >
                <p></p>
                <p></p>
                <p></p>

              </div>
              <button >Delete</button>
              <button >Clear</button>
            </div>
          
          
          <button >+ items...</button>
        </div>
        <div id='selection'>
          <div id='fruit'  className='fruit choice' >
            <h2 style={{alignSelf:'center'}}>Fruit</h2>
            {/* Lets try conditional rendering? */}
            <input value={name} type='text'></input>
            <input value={content} type='text'></input>
            <select value={tags} >
                <option value={"Red"}>Red</option>
                <option value={"Yellow"}>Yellow</option>
            </select>
            
            


          </div>
          <div id='vegetable' className='vegetable choice' >
            <h2 style={{alignSelf:'center'}}>Vegetable</h2>
            
            <input value={name} type='text'></input>
            <input value={content} type='text'></input>
            <select value={tags} >
                
                <option value={"Green"}>Green</option>
                <option value={"Purple"}>Purple</option>
            </select>
            
            
          </div>
        </div>
      </div>
      <button >Show output</button>
    </div>
  )
}


export default App;
