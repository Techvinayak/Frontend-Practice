export default function Data1({ name, email, f1 }) {
    function compute(e) {
        switch (e.target.value) {
            case "Graduate":
                f1([
                    " Graduation",
                    " Year :2025",
                    " Score:89",
                    " University :SPPU"
                ]);
                break;
            case "UG":
                f1([
                    " SSc :2018",
                    " HSC : 2021"
                ]);
                break;
            case "PG":
                f1([
                    " Year :2027",
                    " Subject : Math"
                ]);
                break;
            default:
                break;
        }
    }

    return (
        <div className="outline">
            <h5>Select Education</h5>
            <select onChange={compute}>
                <option value="Graduate">Graduation</option>
                <option value="UG">UnderGraduation</option>
                <option value="PG">PostGraduation</option>
            </select>
        </div>
    );
}
