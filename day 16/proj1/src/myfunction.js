import { Component } from "react";

export default class Factorial extends Component {
    constructor(props) {
        super(props);
        this.a = props.num1;
        this.fact = 1;
        for (let i = 1; i <= this.a; i++) {
            this.fact = this.fact * i;
        }
    }

    doOperation() {
        return <>
            <h1>Factorial of {this.props.num1} is: </h1>
            {this.fact}
        </>

    }

    render() {
        return (
            <>
                this.doOperation()
            </>
        );
    }
}
