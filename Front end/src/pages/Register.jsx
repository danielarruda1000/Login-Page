import React, { Component } from 'react'

import './Register.css'
import Api from '../services/api'


export default class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const response = await Api.post('http://localhost:3001/api/user', {
            "userName": this.state.userName,
            "email": this.state.email,
            "password": this.state.password
        })
        return(
            alert('Registred!')
        )
    }

    render() {
        return (
            <div className="login-container container-fluid">
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
                    <button className="btn btn-primary"
                        onClick={e => this.handleSubmit(e)}>Register</button>
                </form>
            </div>
        )
    }


}