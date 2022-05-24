import React from "react";
import '../CSS/TodoList.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="DoList">
                {this.props.list.map((item, index) => (
                    <div key={item.id}
                         className="todo">

                        <div className="number">
                            {index + 1 }
                        </div>
                        <div className="do">
                            {item.text}
                        </div>
                        <button className="button" onClick={()=>{this.props.delFunc(index)}}>
                            ✘
                        </button>


                    </div>
                ))}
            </div>
        );
    }
}


export default TodoList;
