// Obtención de elementos
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

// Función para crear y mostrar un comentario
function displayComment(name, comment) {
    // Crear la tarjeta de comentario
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    // Añadir el nombre del usuario
    const commentName = document.createElement('div');
    commentName.classList.add('name');
    commentName.textContent = name;

    // Añadir el texto del comentario
    const commentText = document.createElement('div');
    commentText.classList.add('comment-text');
    commentText.textContent = comment;

    // Añadir el nombre y el comentario a la tarjeta
    commentCard.appendChild(commentName);
    commentCard.appendChild(commentText);

    // Insertar el comentario en el contenedor
    commentsContainer.prepend(commentCard); // Agregar al principio
}

// Manejo del envío del formulario
commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Verificar que los campos no estén vacíos
    if (name && comment) {
        // Mostrar el nuevo comentario
        displayComment(name, comment);

        // Limpiar los campos del formulario
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    }
});
