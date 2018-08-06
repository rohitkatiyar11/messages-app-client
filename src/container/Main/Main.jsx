import React, { Component } from 'react';
import {CMain, Tabs, Tab, TabItems, Item} from './c/CMain';
import {Footer} from '../../components/Footer';
import { Redirect } from 'react-router-dom';
import {contacts} from './contacts';
import axios from 'axios';
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatTab: true,
            contactTab: false,
            messages: [],
            redirect: false,
            id: ''


        }
    }

    componentWillMount(){
        const self = this;
        axios.get('http://localhost:8080/api/messages')
            .then(function (response) {
                self.setState({messages: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleOnClick() {
        this.setState({chatTab: !this.state.chatTab, contactTab: !this.state.contactTab})
    }

    redirectToMessage(e, id) {
        this.setState({id: id, redirect: true})
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/message/${this.state.id}`} />
        }
    }

    render() {
        const self = this;
        return (
            <div>
                {this.renderRedirect()}
                <CMain>
                    <Tabs>
                        <Tab type="chat" name="Chats" active={this.state.chatTab} handleChange={() => this.handleOnClick()} />
                        <Tab type="contact" name="Contacts" active={this.state.contactTab} handleChange={() => this.handleOnClick()}  />
                       </Tabs>
                    <TabItems>
                        {this.state.chatTab ?
                                this.state.messages.map(function(item, i){
                                return <Item name={item.name} key={i} text={item.message} handleClick={(e) => self.redirectToMessage(e, item._id)}  />
                            })
                            :
                            contacts.map(function(item, i){
                                console.log('item--', item.name);
                                return <Item name={item.name} key={i} text={item.phone}  />
                            })
                        }
                    </TabItems>
                    <Footer style="footer" />
                </CMain>

            </div>
        );
    }
}

export default Intro;
