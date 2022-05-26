import React from "react"
import "./App.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            login: '',
            password: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    myAlert = async (value) => {
        alert(value);
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        this.setState({[name]: target.value});
    }

    handleSubmit(event) {
        if (this.state.login === "nik" && this.state.password === "1") {
            this.setState({isLoggedIn: true})
            //this.myAlert('Пользователь ' + this.state.login + ' вощел');
        } else {
            //this.myAlert('Неверный пользователь или пороль')
        }
    }

    handleClick() {
        if (this.state.isLoggedIn === true) {
            this.setState({isLoggedIn: false})
        }
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
                <div className='mainDiv'>
                    {!this.state.isLoggedIn ?
                        <form onSubmit={this.handleSubmit} className="MyForm">
                            <div className="formInp">
                                <div className="myDiv">
                                    <div> Логин:</div>
                                    <input placeholder="ваш логин" name="login" type="text" value={this.state.login}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="myDiv">
                                    <div> Пароль:</div>
                                    <input placeholder="пароль" name="password" type="text" value={this.state.password}
                                           onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <button className="myButton" type="submit"
                                            onClick={this.handleClick}>{buttonText}</button>
                                </div>
                            </div>
                        </form> :
                        <button className="myButton" onClick={this.handleClick}>{buttonText}</button>}

                    <h1>{displayText}</h1>
                </div>
        )
    }
}

export default App
