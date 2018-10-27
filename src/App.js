import React, { Component } from 'react';
import './App.css'
import FlipPage from 'react-flip-page';

class App extends Component {
  render() {
    return (
      <div className='flipContainer'>
        <FlipPage orientation='horizontal' showSwipeHint='true' 
          width='672' uncutPages='true' className='flipBook'>
          <article>
          <img src={'page0.png'} alt='page0'/>
          </article>
          <article>
            <img src={'page1.png'} alt='page1'/>
          </article>
          <article>
            <img src={'page2.png'} alt='page2'/>
          </article>
        </FlipPage>     
      </div>
    );
  }
}

export default App;
