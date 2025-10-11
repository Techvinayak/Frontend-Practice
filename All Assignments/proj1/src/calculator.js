export default function Calculator(props) {
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);

    function Addition() {
        return (n1 + n2);
    }

    function subtraction() {
        return (n1 - n2);
    }

    function multiplication() {
        return (n1 * n2);
    }

    function divison() {
        if (n2 == 0) {
            return ("num2 should not be zero");
        } else {
            return (n1 / n2);
        }
    }


    return (
        <>
            <h1>Addition is: {Addition()}</h1>
            <h1>subtraction is: {subtraction()}</h1>
            <h1>multiplication is: {multiplication()}</h1>
            <h1>divison is: {divison()}</h1>
        </>
    );
}

