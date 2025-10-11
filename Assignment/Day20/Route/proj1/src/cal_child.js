import "./ex2.css"
export default function Calchild({ num1, num2, f1 }) {
    function compute(e) {
        switch (e.target.value) {
            case "add": let res = num1 + num2;
                f1(res)
                break;
            case "pow": let r = Math.pow(num1, num2);
                f1(r)
                break;
            case "sub": let s = num1 - num2;
                f1(s)
                break;
            case "mul": let m = num1 * num2;
                f1(m)
                break;
            case "div": let d = num1 / num2;
                if (num1 == 0) {
                    f1("error number cannot be zero ")
                    break;
                }
                else {
                    f1(d)
                }
                break;
            default: break;
        }
    }

    return <div className="outline">
        <h5>Child Component</h5>
        <select onChange={compute}>
            <option value="add">Add</option>
            <option value="pow">Power</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
        </select>
    </div>
}