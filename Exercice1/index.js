//votre code ici
function pairNumbers(min, max) {
    // Convertir les entrées en entiers si elles sont des chaînes
    min = parseInt(min);
    max = parseInt(max);

    // Vérifier si les valeurs ne sont pas des nombres ou si le minimum est supérieur au maximum
    if (isNaN(min) || isNaN(max) || min > max) {
        return '';
    }

    // Initialiser un tableau pour stocker les nombres pairs
    let result = [];

    // Boucle à travers les nombres entre min et max
    for (let i = min; i <= max; i++) {
        // Vérifier si le nombre est pair
        if (i % 2 === 0) {
            result.push(i);
        }
    }

    // Retourner les nombres pairs sous forme de chaîne séparée par des virgules
    return result.join(',');
}

export default pairNumbers;