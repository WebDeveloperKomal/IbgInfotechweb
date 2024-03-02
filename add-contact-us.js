// ----------------------------save the data------------------------------------

function saveData5() {
    var saveData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        // company: document.getElementById('company').value,
        service_info: document.getElementById('service_info').value
    };

    // Check if the services field is provided by the user
    var servicesField = document.getElementById('services');
    if (servicesField) {
        saveData.services = servicesField.value;
    }

    var jwtToken = localStorage.getItem('jwtToken');

    if (!saveData.name || !saveData.email || !saveData.phone || !saveData.service_info) {
        alert('Please fill in all required fields.');
        return;
    }

    // Make the fetch request
    fetch('http://localhost:8181/ibg-infotech/auth/save-contact-us', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken,
        },
        body: JSON.stringify(saveData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Server response:', data);

            Swal.fire({
                icon: 'success',
                title: 'Saved!',
                text: 'Data has been saved successfully.',
            }).then((result) => {

                // Clear input fields and redirect
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                //   document.getElementById('company').value = '';
                if (servicesField) {
                    servicesField.value = '';
                }
                document.getElementById('service_info').value = '';
                window.location.href = 'Contact-Us.html';

            });
        })
        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save data. Please try again.',
            });
        });
}



// --------------------------------------------------------------------------------------


function saveData6() {
    var saveData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        // company: document.getElementById('company').value,
        service_info: document.getElementById('service_info').value
    };

    // Check if the services field is provided by the user
    var servicesField = document.getElementById('services');
    if (servicesField) {
        saveData.services = servicesField.value;
    }

    var jwtToken = localStorage.getItem('jwtToken');

    if (!saveData.name || !saveData.email || !saveData.phone || !saveData.service_info) {
        alert('Please fill in all required fields.');
        return;
    }

    // Make the fetch request
    fetch('http://localhost:8181/ibg-infotech/auth/save-contact-us', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken,
        },
        body: JSON.stringify(saveData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Server response:', data);

            Swal.fire({
                icon: 'success',
                title: 'Saved!',
                text: 'Data has been saved successfully.',
            }).then((result) => {

                // Clear input fields and redirect
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                //   document.getElementById('company').value = '';
                if (servicesField) {
                    servicesField.value = '';
                }
                document.getElementById('service_info').value = '';
                window.location.href = 'index.html';

            });
        })
        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save data. Please try again.',
            });
        });
}



// -----------------------------------------------------------------------------------




function Saveemail() {
    var email = document.getElementById('emailInput').value;

    fetch('http://localhost:8181/ibg-infotech/auth/subscribe?email=' + encodeURIComponent(email), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Server response:', data);
            Swal.fire({
                icon: 'success',
                title: 'Subscribed!',
                text: 'You have subscribed successfully.',
            }).then((result) => {
                document.getElementById('emailInput').value = '';
                // window.location.href = 'index.html'; 
                // Redirect to index.html after successful subscription
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to subscribe. Please try again.',
            });
        });
}




// ------------------------------get all the data--------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);

