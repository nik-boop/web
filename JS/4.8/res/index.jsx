

class AgeField extends React.Component {

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

class NameField extends React.Component {
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




class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.NameField = React.createRef()
        this.AgeField = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e){
        e.preventDefault();

        if (
            this.NameField.current.state.nameValid &&
            this.AgeField.current.state.ageValid
        ) {
        alert("Имя: " + this.NameField.current.state.name + " Возраст: " + this.AgeField.current.state.age);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <NameField name="" ref={this.NameField}/>
                <AgeField age="" ref={this.AgeField}/>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}


ReactDOM.render(
    <div>
        <UserForm name="" age="0"/>
    </div>,
    document.getElementById("app")
)