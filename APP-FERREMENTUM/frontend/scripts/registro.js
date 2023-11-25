document.getElementById('registration-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    try {
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        });

        if (response.ok) {
            alert('Usuario creado exitosamente');
            // Puedes redirigir a otra página o realizar otras acciones después de crear el producto
        } else {
            console.error('Error al crear el usuario:', response.statusText);
            alert('Error al crear el usuario.');
        }
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        alert('Error al crear el usuario.');    
    }
})