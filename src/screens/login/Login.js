import React, { Component } from 'react';
import Header from "../../common/header/Header";
import './Login.css';
import Card from "@material-ui/core/Card";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            incorrectLoginCredentialMessage: "dispNone",
            username: "",
            password: "",
            isLoggedIn: false,
        };
    }

    /*****
     * Password field handler. 
     * It updates state accordingly when UserName field changes
     *****/
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    /*****
     * Password field handler. 
     * It updates state accordingly when password field changes
     *****/
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    /*****
     * Login button handler function
     *****/
    loginClickHandler = () => {
        let username = "InstaGrad";
        let password = "Sass@123#";

        let accessToken = "IGQVJXUVY0UHdRbS1iRExzZAFRZAQjdIWG8yQVVaS2V2SVJNOVpyTnE0Sm9faGlqa1J6aDRZAS3pDME1LRE9WVXczT29ZANDZApaFdMWjUwNkVDSk5XSnhDNmprTHA1ZA1ZAGTHNabkFUbmlLMzVmUndHQndWQW9zRkQzUURmSnk0";
        if (this.state.username === "" || this.state.password === "") {
            this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
            this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
            this.setState({ incorrectLoginCredentialMessage: "dispNone" });
        } else if (this.state.username === username && this.state.password === password) {
            sessionStorage.setItem("access-token", accessToken); 
            this.setState({ 
                isLoggedIn: true,
            });
        } else {
            this.setState({ incorrectLoginCredentialMessage: "dispBlock" });
        }

    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn === true ?
                <Redirect to= "/home"/>
                :
                    <div>
                        <Header></Header>
                        <Card className="login-card">
                            <p className="login-header">LOGIN</p>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} value = {this.state.username}/>
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} value = {this.state.password}/>
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormHelperText className={this.state.incorrectLoginCredentialMessage}><span className="red" style={{ fontSize: "14px" }}>Incorrect username and/or password</span></FormHelperText>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler} className="login-btn">LOGIN</Button>
                        </Card>
                    </div>
                }
            </div>
        );
    }
}

export default Login;