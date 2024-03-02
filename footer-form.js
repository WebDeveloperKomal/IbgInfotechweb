
function saveData6() {
    var saveData1 = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        service_info: document.getElementById('service_info').value
    };

    var jwtToken = localStorage.getItem('jwtToken');

    if (!saveData1.name || !saveData1.email || !saveData1.phone || !saveData1.company || !saveData1.service_info) {
        alert('Please fill in all required fields.');
        return;
    }

    fetch('http://localhost:8181/ibg-infotech/auth/save-contact-us', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken,
        },
        body: JSON.stringify(saveData1)
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
                // Reset form fields and redirect
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('company').value = '';
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






// -----------------------------save the data--------------------------------------

function saveData() {
    var formData = new FormData();
    formData.append('pingNow', document.getElementById('ping_now').value);
    formData.append('text', document.getElementById('text').value);
    formData.append('openHours', document.getElementById('open_hours').value);
    formData.append('footer_title', document.getElementById('footer_title').value);

    var imageFile = document.getElementById('image-input').files[0];
    if (imageFile) {
        formData.append('image', imageFile);
    }

    var jwtToken = localStorage.getItem('jwtToken');

    if (!formData.get('pingNow')) {
        alert('Please fill in the Ping Now field.');
        return;
    }

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    fetch('http://localhost:8181/ibg-infotech/auth/save-footer', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })

        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Server response:', data);
            if (data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Saved!',
                    text: 'Footer data has been saved successfully.',
                }).then((result) => {
                    window.location.href = 'Footer.html';
                });
            } else {
                throw new Error(data.error || 'Unknown error occurred.');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save footer data. Please try again.',
            });
        });
}


document.addEventListener('DOMContentLoaded', function () {
    footerData();
    galleryData();
    homeAbout();
 //   slider();
    homeContent();
    ourTeam();
    contactUs();
});


function ourTeam() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-members', {
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
            const data1 = data.data;

            // Assuming data1[0] is the first record, data1[1] is the second record, and data1[2] is the third record
            const firstRecord = data1[0];
            const secondRecord = data1[1];
            const thirdRecord = data1[2];

            // Set image source, name, and designation for the first record
            document.getElementById('firstRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordName').innerText = firstRecord.name;
            document.getElementById('firstRecordDesignation').innerText = firstRecord.designation;

            // Set image source, name, and designation for the second record
            document.getElementById('secondRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordName').innerText = secondRecord.name;
            document.getElementById('secondRecordDesignation').innerText = secondRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('thirdRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordName').innerText = thirdRecord.name;
            document.getElementById('thirdRecordDesignation').innerText = thirdRecord.designation;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


// Call ourTeam() when the page loads
window.onload = function () {
    ourTeam();
};




function homeContent() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-home-content', {
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



            // Update the 'About' content dynamically
            const dynamicTextData = firstFooterItem.text; // Assuming 'text' holds the dynamic data
            const dynamicTextElement = document.getElementById('dynamicText');
            dynamicTextElement.innerHTML = dynamicTextData;


            const about_titleElement = document.getElementById('text1');
            about_titleElement.innerHTML = `<span class="ct-text-inner">${firstFooterItem.text1}</span>`;

            const dynamicData = firstFooterItem.text2; // Assuming text2 holds the dynamic data

            const dynamicHeaderTextElement = document.getElementById('dynamicHeaderText');
            dynamicHeaderTextElement.innerHTML = `<span class="ct-text-inner">${dynamicData}</span>`;

            const dynamicFactsData = firstFooterItem.facts; // Assuming facts holds the dynamic data

            const dynamicFactsDivElement = document.getElementById('dynamicFactsDiv');
            dynamicFactsDivElement.innerHTML = `<span>${dynamicFactsData}</span>`;

            const dynamicData2 = firstFooterItem.facts_text; // Assuming facts_text holds the dynamic data

            const dynamicHeaderTextElement2 = document.getElementById('dynamicHeaderText2');
            dynamicHeaderTextElement2.innerHTML = `<span>${dynamicData2}</span>`;

            const dynamicNationsData = firstFooterItem.nations; // Assuming nations holds the dynamic data

            const dynamicNationsElement = document.getElementById('dynamicNations');
            dynamicNationsElement.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="3" data-delimiter="">${dynamicNationsData}</span><span class="ct-counter-number-suffix">+</span>`;


            const dynamicMembersData = firstFooterItem.members; // Assuming 'members' holds the dynamic data
            const dynamicMembersDivElement = document.getElementById('dynamicMembers');
            dynamicMembersDivElement.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="${dynamicMembersData}" data-delimiter="">${dynamicMembersData}</span><span class="ct-counter-number-suffix">+</span>`;


            const dynamicAwardsData = firstFooterItem.awards; // Assuming 'awards' holds the dynamic data
            const dynamicAwardsDivElement = document.getElementById('dynamicAwards');
            dynamicAwardsDivElement.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="${dynamicAwardsData}" data-delimiter="">${dynamicAwardsData}</span><span class="ct-counter-number-suffix">+</span>`;


            const dynamicSatisfiedCustomersData = firstFooterItem.satisfied_customer; // Assuming 'satisfied_customer' holds the dynamic data
            const dynamicSatisfiedCustomersDivElement = document.getElementById('dynamicSatisfiedCustomers');
            dynamicSatisfiedCustomersDivElement.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="${dynamicSatisfiedCustomersData}" data-delimiter="">${dynamicSatisfiedCustomersData}</span><span class="ct-counter-number-suffix">+</span>`;


            const dynamicMiddleTextData = firstFooterItem.middle_text; // Assuming 'middle_text' holds the dynamic data
            const dynamicMiddleTextElement = document.getElementById('dynamicMiddleText');
            dynamicMiddleTextElement.innerHTML = `<span class="ct-text-inner">${dynamicMiddleTextData}</span>`;


            const dynamicMiddleText1Data = firstFooterItem.middle_text1; // Assuming 'middle_text1' holds the dynamic data
            const dynamicMiddleText1Element = document.getElementById('dynamicMiddleText1');
            dynamicMiddleText1Element.textContent = dynamicMiddleText1Data;


            const dynamicCustomerReviewData = firstFooterItem.cus_review; // Assuming 'cus_review' holds the dynamic data
            const dynamicCustomerReviewElement = document.getElementById('dynamicCustomerReview');
            dynamicCustomerReviewElement.innerHTML = `<span>${dynamicCustomerReviewData}</span>`;


            const dynamicData3 = firstFooterItem.cus_review_text; // Assuming 'cus_review_text' holds the dynamic data
            const dynamicSatisfiedClientsElement = document.getElementById('dynamicSatisfiedClients');
            dynamicSatisfiedClientsElement.innerHTML = `<span class="ct-text-inner">${dynamicData3}</span>`;


        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call homeAbout() when the page loads
window.onload = function () {
    homeContent();
};




// function slider() {
//     fetch('http://localhost:8181/ibg-infotech/auth/get-all-home-slider', {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer ' + jwtToken,
//         },
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const footerItems = data.data;
//             const firstFooterItem = footerItems[0];

//             // Update the text content dynamically
//             const sliderTextContainer = document.getElementById('slider-text1');
//             const sliderTextContainer1 = document.getElementById('text3');
//             if (sliderTextContainer && sliderTextContainer1) {
//                 sliderTextContainer.innerHTML = firstFooterItem.title.replace(/\n/g, '<br>');
//                 sliderTextContainer1.innerHTML = firstFooterItem.text.replace(/\n/g, '<br>');
//             } else {
//                 console.error('Text containers not found');
//             }

//             // Set the image source dynamically
//             const imageElement = document.getElementById('dynamic-image');
//             if (imageElement) {
//                 imageElement.src = 'data:image/jpeg;base64,' + firstFooterItem.image;
//             } else {
//                 console.error('Image element not found');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// // Call slider() when the page loads
// window.onload = function () {
//     slider();
// };






function homeAbout() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-home-about', {
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
            const footerItems = data.data;
            const firstFooterItem = footerItems[0];

            // Update the 'About' content dynamically
            const aboutElement = document.getElementById('about');
            aboutElement.innerHTML = `<span>${firstFooterItem.about}</span>`;

            const about_titleElement = document.getElementById('about_title');
            about_titleElement.innerHTML = `<span class="ct-text-inner">${firstFooterItem.about_title}</span>`;

            const about_textElement = document.getElementById('about_text');
            about_textElement.innerHTML = `<span class="ct-text-inner">${firstFooterItem.about_text}</span>`;

            // Update the image dynamically
            const imageContainer = document.getElementById('imageContainer');
            const dynamicImage = document.createElement('img');
            dynamicImage.src = `data:image/jpeg;base64,${firstFooterItem.image_a}`; // Assuming image_a contains the Base64-encoded image
            dynamicImage.width = "581"; // Set your desired width
            dynamicImage.height = "807"; // Set your desired height
            dynamicImage.alt = "Dynamic Image"; // Set your desired alt text
            dynamicImage.classList.add('no-lazyload', 'img-main', 'attachment-full'); // Add necessary classes

            // Append the dynamically created image to the container
            imageContainer.appendChild(dynamicImage);


        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call homeAbout() when the page loads
window.onload = function () {
    homeAbout();
};




// Function to fetch image data from the server API
function galleryData() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-galleries', {
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
            const imagesData = data.data; // Assuming data is an array of image objects

            // Loop through the fetched images and update the src attributes
            imagesData.forEach((imageData, index) => {
                const imageId = index + 1; // Update the id accordingly
                const imageSrc = 'data:image/jpeg;base64,' + imageData.upload_image;

                // Update the src attribute of the corresponding image
                const imageElement = document.getElementById(`image-${imageId}`);
                if (imageElement) {
                    imageElement.src = imageSrc;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call fetchImageData() when the page loads
window.onload = function () {
    galleryData();
};



function footerData() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-footer', {
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
            // Assuming data is an array of objects, each object representing a footer item
            const footerItems = data.data;

            // Find the elements you want to update
            const anchorTag = document.getElementById('dynamicImageAnchor');
            const nameElement = document.getElementById('ping_now');
            const textElement = document.getElementById('text');
            const openHoursElement = document.getElementById('openHours');
            const footerTitleElement = document.getElementById('footerTitle');

            const firstFooterItem = footerItems[0];

            // Update the href and src attributes with the fetched data
            anchorTag.href = '#'; // Update href if needed
            anchorTag.querySelector('img').src = 'data:image/jpeg;base64,' + firstFooterItem.image;
            anchorTag.querySelector('img').alt = '';

            // Update additional fields
            nameElement.textContent = firstFooterItem.ping_now;
            textElement.textContent = firstFooterItem.text;
            // Remove HTML tags from openHours content
            openHoursElement.innerHTML = firstFooterItem.openHours; // Update openHours content with HTML
            openHoursElement.textContent = openHoursElement.innerText; // Remove HTML tags

            footerTitleElement.textContent = firstFooterItem.footer_title;
        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call fetchImageData() when the page loads
window.onload = function () {
    footerData();
};




function contactUs() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-contact-us', {
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
            const contactItem = data.data;
            const citem = contactItem[0];

            const dynamicTextData = citem.address;
            const dynamicTextElement = document.getElementById('address');
            dynamicTextElement.innerHTML = dynamicTextData;

            const about_titleElement = document.getElementById('phone1');
            about_titleElement.innerHTML = `<span class="ct-text-inner">${citem.phone}</span>`;

            const dynamicData = citem.email;
            const dynamicHeaderTextElement = document.getElementById('email1');
            dynamicHeaderTextElement.innerHTML = `<span class="ct-text-inner">${dynamicData}</span>`;

            const dynamicFactsData = citem.map;
            const dynamicFactsDivElement = document.getElementById('map');

            // Update the src attribute of the iframe element with the dynamically fetched map URL
            dynamicFactsDivElement.innerHTML = `
            <iframe loading="lazy"
                src="${dynamicFactsData}"
                title="India,  Maharashtra" aria-label="India,  Maharashtra"
                style="border:0; filter: grayscale(0%)!important; width: 100%; height: 400px;"></iframe>
        `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


window.onload = function () {
    contactUs();
};


// ------------------------------get all the data-------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);


function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-footer', {
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
                <td><img src="data:image/jpeg;base64,${item.image}" width="100" height="100"></td>
                <td>
                    <a class="edit-btn" data-id="${item.id}"><i class="ti-pencil"></i>Edit</a>
                    <a class="delete-btn" data-id="${item.id}"><i class="ti-trash"></i>Delete</a>
                </td>
            `;
            tableBody.appendChild(row);

            const editBtn = row.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () {
                const id = editBtn.getAttribute('data-id');
                console.log("Edit button clicked for ID: " + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/get-home-footer/${id}`, {
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

                        localStorage.setItem('updateData', JSON.stringify(data));

                        window.location.href = 'Update-footer.html';
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

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-footer/${id}`, {
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
    var id = document.getElementById('id').value;
    var ping_now = document.getElementById('ping_now').value;
    var text = document.getElementById('text').value;
    var open_hours = document.getElementById('open_hours').value;
    var footer_title = document.getElementById('footer_title').value;
    var imageFile = document.getElementById('image-input').files[0];
    var jwtToken = localStorage.getItem('jwtToken');


    if (!ping_now || !text || !open_hours || !footer_title) {
        alert('Please fill in all required fields.');
        return;
    }


    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }


    var formData = new FormData();
    formData.append('ping_now', ping_now);
    formData.append('text', text);
    formData.append('open_hours', open_hours);
    formData.append('footer_title', footer_title);
    if (imageFile) {
        formData.append('image', imageFile);
    }


    fetch(`http://localhost:8181/ibg-infotech/auth/update-home-footer/${id}`, {
        method: 'PUT',
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
            if (data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Data has been updated successfully.',
                }).then((result) => {

                    window.location.href = 'Footer.html';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update data. ' + data.error,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update data. Please try again.',
            });
        });
}



function homeAbout() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-home-about', {
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
            const footerItems = data.data;
            const firstFooterItem = footerItems[0];

            // Update the 'About' content dynamically
            const aboutElement = document.getElementById('about');
            aboutElement.innerHTML = `<span>${firstFooterItem.about}</span>`;

            const about_titleElement = document.getElementById('about_title');
            about_titleElement.innerHTML = `<span class="ct-text-inner">${firstFooterItem.about_title}</span>`;

            const about_textElement = document.getElementById('about_text');
            about_textElement.innerHTML = `<span class="ct-text-inner">${firstFooterItem.about_text}</span>`;

            // Update the image dynamically
            const imageContainer = document.getElementById('imageContainer');
            const dynamicImage = document.createElement('img');
            dynamicImage.src = `data:image/jpeg;base64,${firstFooterItem.image_a}`; // Assuming image_a contains the Base64-encoded image
            dynamicImage.width = "581"; // Set your desired width
            dynamicImage.height = "807"; // Set your desired height
            dynamicImage.alt = "Dynamic Image"; // Set your desired alt text
            dynamicImage.classList.add('no-lazyload', 'img-main', 'attachment-full'); // Add necessary classes

            // Append the dynamically created image to the container
            imageContainer.appendChild(dynamicImage);


        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call homeAbout() when the page loads
window.onload = function () {
    homeAbout();
};




// Function to fetch image data from the server API
function galleryData() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-galleries', {
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
            const imagesData = data.data; // Assuming data is an array of image objects

            // Loop through the fetched images and update the src attributes
            imagesData.forEach((imageData, index) => {
                const imageId = index + 1; // Update the id accordingly
                const imageSrc = 'data:image/jpeg;base64,' + imageData.upload_image;

                // Update the src attribute of the corresponding image
                const imageElement = document.getElementById(`image-${imageId}`);
                if (imageElement) {
                    imageElement.src = imageSrc;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call fetchImageData() when the page loads
window.onload = function () {
    galleryData();
};



function footerData() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-footer', {
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
            // Assuming data is an array of objects, each object representing a footer item
            const footerItems = data.data;

            // Find the elements you want to update
            const anchorTag = document.getElementById('dynamicImageAnchor');
            const nameElement = document.getElementById('ping_now');
            const textElement = document.getElementById('text');
            const openHoursElement = document.getElementById('openHours');
            const footerTitleElement = document.getElementById('footerTitle');

            const firstFooterItem = footerItems[0];

            // Update the href and src attributes with the fetched data
            anchorTag.href = '#'; // Update href if needed
            anchorTag.querySelector('img').src = 'data:image/jpeg;base64,' + firstFooterItem.image;
            anchorTag.querySelector('img').alt = '';

            // Update additional fields
            nameElement.textContent = firstFooterItem.ping_now;
            textElement.textContent = firstFooterItem.text;
            // Remove HTML tags from openHours content
            openHoursElement.innerHTML = firstFooterItem.openHours; // Update openHours content with HTML
            openHoursElement.textContent = openHoursElement.innerText; // Remove HTML tags

            footerTitleElement.textContent = firstFooterItem.footer_title;
        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call fetchImageData() when the page loads
window.onload = function () {
    footerData();
};


// ------------------------------get all the data-------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);


function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-footer', {
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
                <td><img src="data:image/jpeg;base64,${item.image}" width="100" height="100"></td>
                <td>
                    <a class="edit-btn" data-id="${item.id}"><i class="ti-pencil"></i>Edit</a>
                    <a class="delete-btn" data-id="${item.id}"><i class="ti-trash"></i>Delete</a>
                </td>
            `;
            tableBody.appendChild(row);

            const editBtn = row.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () {
                const id = editBtn.getAttribute('data-id');
                console.log("Edit button clicked for ID: " + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/get-home-footer/${id}`, {
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

                        localStorage.setItem('updateData', JSON.stringify(data));

                        window.location.href = 'Update-footer.html';
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

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-footer/${id}`, {
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
    var id = document.getElementById('id').value;
    var ping_now = document.getElementById('ping_now').value;
    var text = document.getElementById('text').value;
    var open_hours = document.getElementById('open_hours').value;
    var footer_title = document.getElementById('footer_title').value;
    var imageFile = document.getElementById('image-input').files[0];
    var jwtToken = localStorage.getItem('jwtToken');


    if (!ping_now || !text || !open_hours || !footer_title) {
        alert('Please fill in all required fields.');
        return;
    }


    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }


    var formData = new FormData();
    formData.append('ping_now', ping_now);
    formData.append('text', text);
    formData.append('open_hours', open_hours);
    formData.append('footer_title', footer_title);
    if (imageFile) {
        formData.append('image', imageFile);
    }


    fetch(`http://localhost:8181/ibg-infotech/auth/update-home-footer/${id}`, {
        method: 'PUT',
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
            if (data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Data has been updated successfully.',
                }).then((result) => {

                    window.location.href = 'Footer.html';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update data. ' + data.error,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update data. Please try again.',
            });
        });
}