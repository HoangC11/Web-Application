import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'
import HomeAdmin from './HomeAdmin'
import HomeUser from './HomeUser'
import { userLoginApi } from '../api/apiLogin'
import { userProfile } from './config/settings'
class Login extends React.Component {
    state = {
        username: 'hoaqualoaqb@gmail.com',
        password: '123123123',
        goToScreen: '',
    }
    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    onClickLogin = async () => {
        const response = await userLoginApi(this.state.username, this.state.password)
        console.log('rrrrr: ', response)
        if (response !== undefined) {
            if (response.statusCode === 1) {
                userProfile.username = this.state.username
                userProfile.password = this.state.password
                userProfile.token = response.token
                this.setState({
                    goToScreen: 'Home'
                })
            } else {
                alert('Đăng nhập không thành công')
            }
        } else {
            alert('Đăng nhập không thành công')
        }
        // if (this.state.username === '1') {
        //     this.setState({
        //         goToScreen: 'Home'
        //     })
        // } else {
        //     this.setState({
        //         goToScreen: 'HomeAdmin'
        //     })
        // }
    }
    render() {
        return (
            <div style={{ width: '100%', textAlign: 'center', }}>
                <h1>LOGIN</h1>
                <div><label>Username: <input type='text' value={this.state.username} onChange={this.onChangeUsername}></input></label></div>
                <div><label>Password: <input type='text' value={this.state.password} onChange={this.onChangePassword}></input></label></div>
                <button onClick={this.onClickLogin}>Đăng nhập</button>
                {this.state.goToScreen === 'Home' &&
                    <Redirect to={{ pathname: 'Home' }} />
                }
                {this.state.goToScreen === 'HomeAdmin' &&
                    <Redirect to={{ pathname: 'HomeAdmin' }} />
                }
            </div>
        );
    }
}
export default Login;