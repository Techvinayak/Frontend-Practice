export default function Radio1({ n1, f1 }) {
    function toTitleCase(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }


    function compute(e) {
        switch (e.target.value) {
            case "Upper-Case":
                f1(n1.toUpperCase());
                break;
            case "Lower-Case":
                f1(n1.toLowerCase());
                break;
            case "Title-Case":
                f1(toTitleCase(n1));
                break;
            default:
                break;
        }
    }

    return (
        <div className="outline">
            <h5>Select option</h5>
            <input type="radio" name="case" value="Upper-Case" onChange={compute} /> Upper Case
            <br />
            <input type="radio" name="case" value="Lower-Case" onChange={compute} /> Lower Case
            <br />
            <input type="radio" name="case" value="Title-Case" onChange={compute} /> Title Case
        </div>
    );
}
