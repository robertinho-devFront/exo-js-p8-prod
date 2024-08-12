// Sélectionner l'élément d'affichage
let display = document.getElementById('display');

// Fonction pour ajouter une valeur à l'affichage
function appendToDisplay(value) {
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    display.value = '';
}

// Fonction pour calculer le résultat
function calculateResult() {
    try {
        // Évaluer l'expression dans l'affichage
        let result = eval(display.value);

        // Vérifier la division par zéro
        if (result === Infinity || result === -Infinity) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = result;
        }
    } catch (e) {
        // En cas d'erreur d'évaluation, afficher une erreur
        display.value = 'Error';
    }
}