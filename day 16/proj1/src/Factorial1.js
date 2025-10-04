import { Component } from "react";

export default class Factorial1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
            ans: 1,
        };


        this.eventHandler = this.myeventHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(e) {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            this.setState({ num: value });
        }
    }


    myeventHandler(e) {
        console.log(e.target);
        console.log(e.target.value);
        console.log("in event handler");

        const val = this.state.num;
        let result = 1;

        for (let i = 1; i <= val; i++) {
            result *= i;
        }

        this.setState({ ans: result });
    }


    doOperation() {
        return (
            <>
                <h2>fact ==== {this.state.ans}</h2>

            </>
        );
    }

    render() {
        return (
            <>
                <h1>Factorial</h1>
                Enter a number{" "}
                <input
                    type="text"
                    id="t1"
                    value={this.state.num}
                    onChange={this.handleInputChange}
                />


                <button value="Factorial" onClick={this.eventHandler}>
                    Call Factorial
                </button>

                {this.doOperation()}
            </>
        );
    }
}
