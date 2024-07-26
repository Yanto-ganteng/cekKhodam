document.getElementById('khodamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    // Simulasi logika atau hasil cek khodam berdasarkan nama dan tanggal lahir
    const khodamTypes = ["Jin", "Peri", "Naga", "Pendekar"];
    const randomIndex = Math.floor(Math.random() * khodamTypes.length);

    document.getElementById('result').innerText = `Khodam kamu adalah: ${khodamTypes[randomIndex]}`;
});