import React, { Component } from 'react'

import './Register.css'
import Api from '../services/api'


export default class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            email: null,
            password: null,
            confirmPassword: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.passwordComparator = this.passwordComparator.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const response = await Api.post('http://localhost:3001/api/user', {
            "userName": this.state.userName,
            "email": this.state.email,
            "password": this.state.password
        })
        return (
            alert('Registred!')
        )
    }

    passwordComparator() {
        const inputedPassword = this.state.password
        const inputedConfirmPassword = this.state.confirmPassword
        if (inputedConfirmPassword) {
            if (inputedPassword !== inputedConfirmPassword)
                return (
                    <div class="alert alert-danger" role="alert">
                        <small>Passwords wrongs!</small>
                    </div>
                )
            else return (
                <div class="alert alert-success" role="alert">
                    <small>Passwords Corrects!</small>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="login-container container-fluid">
                <div className="row loginBox">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" placeholder="Enter username"
                                onChange={e => this.setState({ userName: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="email" placeholder="Enter your e-mail"
                                onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="**********"
                                onChange={e => this.setState({ password: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input className="form-control" type="password" placeholder="**********"
                                onChange={e => this.setState({ confirmPassword: e.target.value })} />
                            <div>{this.passwordComparator()}</div>
                        </div>
                        <button className="btn btn-primary"
                            onClick={e => this.handleSubmit(e)}>Register</button>
                    </form>
                </div>
            </div>
        )
    }


}