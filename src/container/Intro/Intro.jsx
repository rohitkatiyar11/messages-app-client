import React, { Component } from 'react';
import {CIntro, CImage, CWelcomeMessage, CText} from './c/CIntro';
import {Footer} from '../../components/Footer';
import { Redirect } from 'react-router-dom';
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/main' />
        }
    }


    render() {
        return (
            <div>
                <CIntro>
                    <CImage/>
                    <CWelcomeMessage />
                    <CText />
                    {this.renderRedirect()}
                    <Footer style="introFooter" handleChange={(e) => this.setRedirect(e)} />
                </CIntro>
            </div>
        );
    }
}

export default Intro;
