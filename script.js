
document.getElementById('generateBtn').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const numbers = generateNumbers(quantity);
    document.getElementById('numbers').textContent = numbers.join(', ');
});

function generateNumbers(quantity) {
    const possibleNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
    const generated = [];

    while (generated.length < quantity) {
        const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
        const number = possibleNumbers.splice(randomIndex, 1)[0];
        generated.push(number);
    }

    return generated.sort((a, b) => a - b);
}
