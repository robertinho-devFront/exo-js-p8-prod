// Créez votre fonction ici

// Exemples d'utilisation de la fonction
// console.log(calculateAverage([5, 10, 15])) // retourne 10
// console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
// console.log(calculateAverage()) // No numbers to calculate average

// export default calculateAverage

function calculateAverage(numbers = []) {
    // Vérifier si le tableau est vide ou undefined
    if (!numbers || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // Calculer la somme des nombres
    let sum = 0;
    for (let num of numbers) {
        sum += parseFloat(num); // Convertir chaque élément en nombre
    }

    // Calculer la moyenne
    const average = sum / numbers.length;
    return average;
}

export default calculateAverage;
