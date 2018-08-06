import React, { Component } from 'react';
import {Intro, Main, Splash, ChatDetail} from './container';
import {BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Splash} />
                <Route path="/intro" component={Intro} />
                <Route path="/main" component={Main} />
                <Route path="/message/:id" component={ChatDetail} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
