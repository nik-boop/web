import './App.css';
import React from "react";
import TodoList from "./components/TodoList";
import Categorуes from "./components/categorуes";

class TodoApp extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            items: [],
            text: '',
            data: [{category: "Работа", items: []}, {category: "Работа", items: []}, {
                category: "Работа",
                items: []
            }, {category: "кулинария", items: ["ничего", "и еще немного ничего"]}]
        };
        console.log(this.state.data)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deldo = (index) => {
            this.state.items.splice(index, 1)
            this.setState({items: this.state.items})
        }

        this.category = (category) => {
            this.category = category
        }
        //delFunc={this.deldo}
    }


    render() {
        return (
            <div>
                <h3>TODO</h3>
                <div>
                    {this.state.data.map((item, index) => (
                        <Categorуes name={item.category} delFunc={this.category}>
                        </Categorуes>
                    ))}
                </div>
                <TodoList list={this.state.items} delFunc={this.deldo}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}


function App() {
    return (
        <div>
            <TodoApp/>
        </div>
    );
}

export default App;
