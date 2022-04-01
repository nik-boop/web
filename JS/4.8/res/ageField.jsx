import React from "react";

export default class AgeField extends React.Component {
    constructor(props) {
        super(props)
        const { age } = props
        const ageIsValid = this.validateAge(age)
        this.state = {
            age,
            ageValid: ageIsValid,
        }
        console.log(this.state)
    }

    onAgeChange = (e) => {
        const val = e.target.value;
        const valid = this.validateAge(val)

        this.setState({ age: val, ageValid: valid });
        console.log(this.state)
    };

    validateAge = (age) => {
        return age >= 1;
    };

    render() {
        const ageColor = this.state.ageValid === true ? "green" : "red";
        return (
            <p>
                <label>Возраст:</label>
                <br />
                <input
                    type="number"
                    value={this.state.age}
                    onChange={this.onAgeChange}
                    style={{ borderColor: ageColor }}
                />
            </p>
        );
    }
}