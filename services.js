
// 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXZpbmFwYXdhcjU5OTFAZ21haWwuY29tIiwiaWF0IjoxNzA1OTg5MzcxLCJleHAiOjE3MDYwMDczNzF9.hR50yiJJbnGWIh3VcS8qsqwY0xcJag6WA3WY8ZNaWnW6sRmqGMzA6fAxMe58gEKCVxReIyhsWS_PnNIetfQaxQ',
// 'username': 'ravinapawar5991@gmail.com',
// 'password': 'ravina@1234',

// Credential{email:'',password:''};
// localStorage.setItem('token', response.jwtToken);

// -----------------------------save the data------------------------------------

function saveData() {
    var saveData = {
        name: document.getElementById('name').value,
        title: document.getElementById('title').value,
        information: document.getElementById('information').value,
    };


    var jwtToken = localStorage.getItem('jwtToken');

    console.log('Request Data:', JSON.stringify(saveData));

    if (!saveData.name || !saveData.title || !saveData.information) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!jwtToken) {

        alert('JWT token is missing. Please log in again.');
        return;
    }

    fetch('http://localhost:8181/ibg-infotech/auth/save-services-content', {
        method: 'POST',
        body: new URLSearchParams(saveData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + jwtToken,
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
                title: 'Saved!',
                text: 'Data has been saved successfully.',
            }).then((result) => {

                document.getElementById('name').value = '';
                document.getElementById('title').value = '';
                document.getElementById('information').value = '';
                window.location.href = 'Services.html';

                getData();
            });
        })
        .catch(error => {
            console.error('Error:', error);
            window.location.href = 'Services-form.html';

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save data. Please try again.',
            });
        });
}


// -----------------------------------------------------------------------------------------------



document.addEventListener('DOMContentLoaded', function () {
    servicesData();
    whyibgContent();
});



function servicesData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services-content', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(data => {
            console.log(data);

            const serviceContent = data.data;
            const serviceC = serviceContent[0];

            document.getElementById('itemTitle').innerText = serviceC.name;
            document.getElementById('itemTitle1').innerText = serviceC.title;
            document.getElementById('itemTitle5').innerHTML = serviceC.information.substring(8, 68).replace('Businesses', '<span style="color: #0f67f6;">Businesses</span>');
            document.getElementById('itemTitle3').innerText = serviceC.information.substring(77, 244);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}




function whyibgContent() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-why-ibg-infotech', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            console.log('Fetched data:', data);

            const footerItems = data.data;
            const firstFooterItem = footerItems[0];
            const firstFooterItem1 = footerItems[1];
            const firstFooterItem2 = footerItems[2];
            const firstFooterItem3 = footerItems[3];


            const dynamicTextData11 = firstFooterItem.name;
            const dynamicTextElement11 = document.getElementById('dynamicName');
            dynamicTextElement11.innerHTML = dynamicTextData11;

            const dynamicTextData22 = firstFooterItem.title;
            const dynamicTextElement22 = document.getElementById('dynamicTitle');
            dynamicTextElement22.innerHTML = dynamicTextData22;

            const dynamicTextData33 = firstFooterItem.description;
            const dynamicTextElement33 = document.getElementById('dynamicDescription');
            dynamicTextElement33.innerHTML = dynamicTextData33;


            const imageContainer = document.getElementById('imageContainer');
            const dynamicImage = document.createElement('img');
            dynamicImage.src = `data:image/jpeg;base64,${firstFooterItem.image}`;
            dynamicImage.width = "1366";
            dynamicImage.height = "768";
            dynamicImage.alt = "Dynamic Image";
            dynamicImage.classList.add('no-lazyload', 'img-main', 'attachment-full');

            // Log computed styles
            console.log(window.getComputedStyle(dynamicImage));

            // Append the dynamically created image to the container
            imageContainer.appendChild(dynamicImage);



            const dynamicTextData66 = firstFooterItem1.name;
            const dynamicTextElement66 = document.getElementById('dynamicName1');
            dynamicTextElement66.innerHTML = dynamicTextData66;

            const dynamicTextData44 = firstFooterItem1.title;
            const dynamicTextElement44 = document.getElementById('dynamicTitle1');
            dynamicTextElement44.innerHTML = dynamicTextData44;


            const dynamicTextData55 = firstFooterItem1.description;
            const dynamicTextElement55 = document.getElementById('dynamicDescription1');
            dynamicTextElement55.innerHTML = dynamicTextData55;


            // Update the image dynamically
            const imageContainer1 = document.getElementById('imageContainer1');
            const dynamicImage1 = document.createElement('img');
            dynamicImage1.src = `data:image/jpeg;base64,${firstFooterItem1.image}`;
            dynamicImage1.width = "1366";
            dynamicImage1.height = "768";
            dynamicImage1.alt = "Dynamic Image";
            dynamicImage1.classList.add('no-lazyload', 'img-main', 'attachment-full');

            // Append the dynamically created image to the container
            imageContainer1.appendChild(dynamicImage1);


            const dynamicTextData77 = firstFooterItem2.name;
            const dynamicTextElement77 = document.getElementById('dynamicName2');
            dynamicTextElement77.innerHTML = dynamicTextData77;

            const dynamicTextData88 = firstFooterItem2.title;
            const dynamicTextElement88 = document.getElementById('dynamicTitle2');
            dynamicTextElement88.innerHTML = dynamicTextData88;


            const dynamicTextData99 = firstFooterItem2.description;
            const dynamicTextElement99 = document.getElementById('dynamicDescription2');
            dynamicTextElement99.innerHTML = dynamicTextData99;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem2.image}`;
            dynamicImage2.width = "958";
            dynamicImage2.height = "775";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            // Append the dynamically created image to the container
            imageContainer2.appendChild(dynamicImage2);


            const dynamicTextData7 = firstFooterItem3.name;
            const dynamicTextElement7 = document.getElementById('dynamicName3');
            dynamicTextElement7.innerHTML = dynamicTextData7;

            const dynamicTextData8 = firstFooterItem3.title;
            const dynamicTextElement8 = document.getElementById('dynamicTitle3');
            dynamicTextElement8.innerHTML = dynamicTextData8;


            const dynamicTextData9 = firstFooterItem3.description;
            const dynamicTextElement9 = document.getElementById('dynamicDescription3');
            dynamicTextElement9.innerHTML = dynamicTextData9;


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem3.image}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "1400";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            // Append the dynamically created image to the container
            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    whyibgContent();
};

// ----------------------------------get all the data----------------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services-content', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            populateTable(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function populateTable(data) {
    const tableBody = document.getElementById('dataTableBody');
    tableBody.innerHTML = '';

    if (Array.isArray(data)) {
        data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.title}</td>
                <td>${item.information}</td>
                <td>
                    <a class="edit-btn" data-id="${item.id}"><i class="ti-pencil"></i>Edit</a>
                    <a class="delete-btn" data-id="${item.id}"><i class="ti-trash"></i> Delete</a>
                </td>
            `;
            tableBody.appendChild(row);

            const editBtn = row.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () {
                const id = editBtn.getAttribute('data-id');
                console.log("Edit button clicked for ID: " + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/get-services-content/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + jwtToken,
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {

                        window.location.href = `update-services.html?id=${id}&name=${data.data.name}&title=${data.data.title}&information=${data.data.information}`;
                    })
                    .catch(error => {
                        console.error('Error fetching service data:', error);
                    });
            });


            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                const id = deleteBtn.getAttribute('data-id');
                deleteService(id);
            });
        });
    } else {
        console.error('Data received is not an array:', data);
    }
}



// --------------------------------------delete the data by id----------------------------------------

function deleteService(id) {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-services-content/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(data => {
            console.log(data);

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Service has been deleted successfully.',
            }).then((result) => {

                getData();
            });
        })
        .catch(error => {
            console.error('Error deleting service:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete the service. Please try again later.',
            });
        });
}


// ---------------------------update the data by id--------------------------------------------------


function updateData() {

    const updatedName = document.getElementById('name').value;
    const updatedTitle = document.getElementById('title').value;
    const updatedInformation = document.getElementById('information').value;

    updateService(id, updatedName, updatedTitle, updatedInformation);
}


function updateService(id, name, title, information) {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8181/ibg-infotech/auth/update-services-content/${id}?name=${name}&title=${title}&information=${information}`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Service has been updated successfully.',
            }).then((result) => {

                window.location.href = 'Services.html';
                getData();
            });
        })
        .catch(error => {
            console.error('Error updating service:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update the service. Please try again later.',
            });
        });
}

