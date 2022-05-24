import React from "react";
import '../CSS/categorуes.css';

class Categorуes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {viewFlag: true}
    }

    render() {
        return (
            <div className="category">
                <div className="categoryName">
                    {this.props.name}
                </div>
                <div className="categoryEdit">
                    🖉
                </div>
                {(this.state.viewFlag == true) ? (
                    <div className="categoryView" onClick={ ()=>{this.setState({viewFlag: false})
                        this.props.delFunc(null)}}>
                        ▲
                    </div>
                ) : (
                    <div className="categoryView" onClick={ ()=>{this.setState({viewFlag: true})
                        this.props.delFunc(this.props.name)} }>
                        ▼
                    </div>
                )
                }


            </div>
        );
    }
}


export default Categorуes;
