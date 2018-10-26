import React, { Component } from 'react';
import './App.css'
import FlipPage from 'react-flip-page';

class App extends Component {
  render() {
    return (
      <div className='flipContainer'>
        <FlipPage orientation='horizontal' showSwipeHint='true' 
          width='600' uncutPages='true' className='flipBook'>
          <article>
            <h1>My awesome first article</h1>
            <p>My awesome first content</p>
          </article>
          <article>
            <h1>My wonderful second article</h1>
            <p>My wonderful second content</p>
          </article>
          <article>
            <h1>My excellent third article</h1>
            <p>My excellent third content</p>
          </article>
        </FlipPage>     
      </div>
    );
  }
}

export default App;
