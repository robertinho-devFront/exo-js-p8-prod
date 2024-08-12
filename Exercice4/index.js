// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton
    const button = document.getElementById('myButton');

    // Ajouter un événement de clic au bouton
    button.addEventListener('click', function() {
        // Créer un nouvel élément paragraphe
        const paragraph = document.createElement('p');

        // Ajouter du texte au paragraphe
        paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

        // Vérifier s'il existe déjà un paragraphe avec ce texte et l'enlever pour éviter les duplications
        const existingParagraph = document.querySelector('#messageContainer p');
        if (existingParagraph) {
            existingParagraph.remove();
        }

        // Ajouter le paragraphe dans un conteneur dédié
        const messageContainer = document.getElementById('messageContainer');

        // Ajouter le paragraphe au conteneur (au lieu de document.body)
        messageContainer.appendChild(paragraph);
    });
});