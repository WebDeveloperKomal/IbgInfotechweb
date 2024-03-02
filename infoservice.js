// ---------------------------- save the data ----------------------------------------


function saveData() {
    var formData = new FormData(document.getElementById('myForm'));

    var jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    var data = {
        name: formData.get('name'),
        text: CKEDITOR.instances.editor2.getData(), // Get data from CKEditor instance 1
        home_text: CKEDITOR.instances.editor3.getData() // Get data from CKEditor instance 2
    };

    // Convert the data object to JSON and append it to the formData object
    formData.append('data', JSON.stringify(data));

    // Append image files to formData
    formData.append('image1File', formData.get('image1'));
    formData.append('image2File', formData.get('image2'));

    fetch('http://localhost:8181/ibg-infotech/auth/save-services', {
        method: 'POST',
        body: formData,
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
            console.log('Server response:', data);
            Swal.fire({
                icon: 'success',
                title: 'Saved!',
                text: 'Services have been saved successfully.',
            }).then((result) => {
                window.location.href = 'infoservice.html';
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save services. Please try again.',
            });
        });
}



// ---------------------------------------------------------------------------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', function () {
    BrandIdentity();
});

document.addEventListener('DOMContentLoaded', function () {
    Contentwriting();
});

document.addEventListener('DOMContentLoaded', function () {
    Animationvideomaking();
});

document.addEventListener('DOMContentLoaded', function () {
    Webdesign();
});

document.addEventListener('DOMContentLoaded', function () {
    Webdevelopment();
});

document.addEventListener('DOMContentLoaded', function () {
    Mobileappdevelopment();
});

document.addEventListener('DOMContentLoaded', function () {
    Softwaredevelopment();
});

document.addEventListener('DOMContentLoaded', function () {
    Digitalmarketing();
});




function BrandIdentity() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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

            const dynamicTextData1 = firstFooterItem.name;
            const dynamicTextElement1 = document.getElementById('dynamicName');
            dynamicTextElement1.innerHTML = dynamicTextData1;

            const dynamicTextData2 = firstFooterItem.text;
            const dynamicTextElement2 = document.getElementById('dynamicText');
            dynamicTextElement2.innerHTML = dynamicTextData2;

            const dynamicTextData3 = firstFooterItem.home_text;
            const dynamicTextElement3 = document.getElementById('dynamicHometext');
            dynamicTextElement3.innerHTML = dynamicTextData3;


            // Update the image dynamically
            const imageContainer = document.getElementById('imageContainer');
            const dynamicImage = document.createElement('img');
            dynamicImage.src = `data:image/jpeg;base64,${firstFooterItem.image1}`;
            dynamicImage.width = "800";
            dynamicImage.height = "1400";
            dynamicImage.alt = "Dynamic Image";
            dynamicImage.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer.appendChild(dynamicImage);

            // Update the image dynamically
            const imageContainer1 = document.getElementById('imageContainer1');
            const dynamicImage1 = document.createElement('img');
            dynamicImage1.src = `data:image/jpeg;base64,${firstFooterItem.image2}`;
            dynamicImage1.width = "800";
            dynamicImage1.height = "570";
            dynamicImage1.alt = "Dynamic Image";
            dynamicImage1.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer1.appendChild(dynamicImage1);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    BrandIdentity();
};



// -----------------------------------------------------------------------------------------------




function Contentwriting() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[1];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName1');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText2');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext3');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Contentwriting();
};


// -------------------------------------------------------------------------------------------------




function Animationvideomaking() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[2];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName4');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText5');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext6');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Animationvideomaking();
};


// --------------------------------------------------------------------------------------------



function Webdesign() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[3];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName7');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText8');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext9');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Webdesign();
};


// -------------------------------------------------------------------------------------------




function Webdevelopment() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[4];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName10');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText11');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext12');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Webdevelopment();
};


// ----------------------------------------------------------------------------------------------




function Mobileappdevelopment() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[5];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName13');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText14');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext15');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Mobileappdevelopment();
};


// --------------------------------------------------------------------------------------------



function Softwaredevelopment() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[6];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName16');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText17');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext18');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Softwaredevelopment();
};

// -------------------------------------------------------------------------------------------------




function Digitalmarketing() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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
            const firstFooterItem1 = footerItems[7];

            const dynamicTextData4 = firstFooterItem1.name;
            const dynamicTextElement4 = document.getElementById('dynamicName19');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem1.text;
            const dynamicTextElement5 = document.getElementById('dynamicText20');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem1.home_text;
            const dynamicTextElement6 = document.getElementById('dynamicHometext21');
            dynamicTextElement6.innerHTML = dynamicTextData6;


            // Update the image dynamically
            const imageContainer2 = document.getElementById('imageContainer2');
            const dynamicImage2 = document.createElement('img');
            dynamicImage2.src = `data:image/jpeg;base64,${firstFooterItem1.image1}`;
            dynamicImage2.width = "800";
            dynamicImage2.height = "1400";
            dynamicImage2.alt = "Dynamic Image";
            dynamicImage2.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer2.appendChild(dynamicImage2);


            // Update the image dynamically
            const imageContainer3 = document.getElementById('imageContainer3');
            const dynamicImage3 = document.createElement('img');
            dynamicImage3.src = `data:image/jpeg;base64,${firstFooterItem1.image2}`;
            dynamicImage3.width = "800";
            dynamicImage3.height = "570";
            dynamicImage3.alt = "Dynamic Image";
            dynamicImage3.classList.add('no-lazyload', 'img-main', 'attachment-full');

            imageContainer3.appendChild(dynamicImage3);

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}


window.onload = function () {
    Digitalmarketing();
};


// --------------------------get all the data-----------------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);


function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-services', {
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


function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
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
                <td><img src="data:image/jpeg;base64,${item.image1}" width="100" height="100"></td>
                <td><img src="data:image/jpeg;base64,${item.image2}" width="100" height="100"></td>
                <td>
                <a class="edit-btn" data-id="${item.id}"><i class="ti-pencil"></i> Edit</a>
                <a class="delete-btn" data-id="${item.id}"><i class="ti-trash"></i> Delete</a>
                </td>
            `;
            tableBody.appendChild(row);

            const editBtn = row.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () {
                const id = editBtn.getAttribute('data-id');
                console.log("Edit button clicked for ID: " + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/get-services/${id}`, {
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
                        localStorage.setItem('updateData', JSON.stringify(data.data));
                        console.log(localStorage.getItem('updateData')); // Add this line
                        window.location.href = 'update-infoservice-form.html';
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



// ----------------------------------------delete by id-----------------------------------------------

function deleteService(id) {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-services/${id}`, {
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

// -----------------------------------update the data by id-------------------------------------------


function updateData() {
    var formData = new FormData(document.getElementById('myForm'));
    var jwtToken = localStorage.getItem('jwtToken');
    var id = formData.get('id');

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    // Construct the data object from form fields
    var data = {
        name: formData.get('name'),
        text: CKEDITOR.instances.editor2.getData(),
        home_text: CKEDITOR.instances.editor3.getData(),
        // Add other fields as needed
    };

    // Convert the data object to a JSON string and append it to FormData
    formData.append('data', JSON.stringify(data));

    // Add image files to FormData if they exist
    if (formData.get('image1')) {
        formData.append('image1File', formData.get('image1'));
    }
    if (formData.get('image2')) {
        formData.append('image2File', formData.get('image2'));
    }

    // Configure the fetch request
    var url = 'http://localhost:8181/ibg-infotech/auth/update-services/' + id;
    var options = {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + jwtToken
        }
    };

    // Send the fetch request
    fetch(url, options)
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
                title: 'Updated!',
                text: 'Services have been updated successfully.'
            }).then((result) => {
                window.location.href = 'infoservice.html';
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update services. Please try again.'
            });
        });
}