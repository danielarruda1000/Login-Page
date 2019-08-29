import React, { Component } from 'react'
import axios from 'axios'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        

        const url = 'http://localhost:3001/api/user'

        const userName = this.state.userName
        const email = this.state.email
        const password = this.state.password

        axios.post(url,
            {
                "userName": `${userName}`,
                "email": `${email}`,
                "password": `${password}`
            }).then(response => console.log(response.data))
            
    }

    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"
                            onChange={(e) => this.setState({ userName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"
                            placeholder="Input your best email"
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                            onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <button className="btn btn-primary"
                        onClick={this.handleSubmit}>Register!</button>
                </form>
            </div>
        )
    }
}