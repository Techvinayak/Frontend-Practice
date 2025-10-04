import { Component } from "react";

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            arr: ["Pune", "Nagpur", "Mumbai", "Hyderabad"],
            s: ''
        };
    }

    changeState = (d) => {
        this.setState({ s: this.state.arr[d] });
    };

    getSelectBox = () => {
        return this.state.arr.map((sname, index) => (
            <option key={index} value={index}>{sname}</option>
        ));
    };

    render() {
        return (
            <div style={{ margin: "10px" }} className="outline">
                <select onChange={(e) => this.changeState(e.target.value)}>
                    {this.getSelectBox()}
                </select>
                <h1>State : {this.state.s}</h1>
            </div>
        );
    }
}
