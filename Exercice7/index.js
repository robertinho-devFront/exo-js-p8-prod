function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    // Utiliser une expression régulière pour vérifier si l'entrée est un nombre valide
    const isValidNumber = /^\d+$/.test(decimalInput);

    if (!isValidNumber) {
        // Effacer le résultat si l'entrée n'est pas un nombre valide
        binaryResult.textContent = '';
        return;
    }

    // Convertir la valeur en nombre entier
    const decimalNumber = parseInt(decimalInput, 10);

    // Convertir le nombre décimal en binaire
    const binaryNumber = decimalNumber.toString(2);
    binaryResult.textContent = binaryNumber;
}
