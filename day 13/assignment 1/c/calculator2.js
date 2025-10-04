import { render } from "@testing-library/react";

export default function Calculation(props) {
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);
    let op = props.op;

    console.log(op == 'sum')

    function sum() {
        let sum = n1 + n2;
        return sum;
    }
    function substraction() {
        let substraction = n1 - n2;
        return substraction;
    }
    function multiplication() {
        let multiplication = n1 * n2;
        return multiplication;
    }
    function division() {
        let division = n1 / n2;
        return division;
    }

    function validate() {
        if (op == "sum") {
            return sum();
        }



    }



    return (<>
        <h1> Result: {validate()} </h1>
    </>)
}