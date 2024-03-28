const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const password = document.getElementById('password').value.trim();

            if (name === '' || password === '') {
                alert('Please fill in all fields');
                return;
            }

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    password: password
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred, please try again later.');
            });
        });