import React, { Component } from 'react';
import {Footer} from '../../components/Footer';
import {ChatDetails, BackToPage} from './c/CMain';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            messageDetails: ''
        }
    }

    componentWillMount(){
        const self = this;
        axios.get('http://localhost:8080/api/messages/' + this.props.match.params.id)
            .then(function (response) {
                self.setState({messageDetails: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
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
                <ChatDetails>
                    {this.renderRedirect()}
                    <BackToPage text="Back to main page" handleClick={(e) => this.setRedirect(e)} />
                    <p>name: {this.state.messageDetails.name}</p>
                    <p>message: {this.state.messageDetails.message}</p>
                    <Footer style="footer" />
                </ChatDetails>
            </div>
        );
    }
}

export default Splash;
