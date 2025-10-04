function appendValue(val) {
    try {
        $('#display').val($('#display').val() + val);
    } catch (err) {
        console.error('Error appending value:', err.message);
    }
}

function clearDisplay() {
    try {
        let current = $('#display').val();
        $('#display').val(current.slice(0, -1));
    } catch (err) {
        console.error('Error clearing display:', err.message);
    }
}

function resetCalculator() {
    try {
        $('#display').val('');
    } catch (err) {
        console.error('Error resetting calculator:', err.message);
    }
}

function calculate() {
    try {
        const expression = $('#display').val();
        const invalidPattern = /[\+\-\*\/]{2,}/;

        if (invalidPattern.test(expression)) {
            alert('Invalid Expression: Two consecutive operators are not allowed.');
            return;
        }

        const result = eval(expression);
        $('#display').val(result);
    } catch (err) {
        alert('Invalid Expression');
        console.error('Calculation error:', err.message);
    }
}
