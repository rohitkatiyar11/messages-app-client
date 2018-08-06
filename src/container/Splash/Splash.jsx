import React, { Component } from 'react';
import {CSplash, CImage} from './c/CSplash';
import {Footer} from '../../components/Footer';
import { Redirect } from 'react-router-dom';
class Splash extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
        }
    }



  componentDidMount(){
      setTimeout(()=>{
          this.setState({
              redirect: true
          })
      },3000);
  }

       renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/intro' />
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
            <CSplash>
                <CImage />
                <Footer style="footer" />
            </CSplash>
            </div>
        );
    }
}

export default Splash;
