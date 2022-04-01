import React from "react";

export default class NameField extends React.Component {
    constructor(props) {
        super(props)
        const { name } = props
        const nameIsValid = this.validateName(name)
        this.state = {
            name,
            nameValid: nameIsValid,
        };
        console.log(this.state)
    }

    onNameChange = (e) => {
        const val = e.target.value
        const valid = this.validateName(val)
        this.setState({ name: val, nameValid: valid })
        console.log(this.state)
    }

    validateName = (name) => {
        return name.length > 2;
    }

    render() {
        const nameColor = this.state.nameValid ? "green" : "red";
        return (
            <p>
                <label>Имя:</label>
                <br />
                <input
                    type="text"
                    value={this.state.name}
                    style={{ borderColor: nameColor }}
                    onChange={this.onNameChange}
                />
            </p>
        )
    }
}