function showDate(n) {
    for (let i = 0; i < n; i++) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        let yyyy = today.getFullYear();
        console.log(`${dd}-${mm}-${yyyy}`);
    }
}
showDate(10);