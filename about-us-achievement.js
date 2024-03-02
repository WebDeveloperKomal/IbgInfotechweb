// ------------------------------save the data---------------------------------

function previewImage() {
    const imageFile = document.getElementById('imageFile').files[0];
    const imagePreview = document.getElementById('imagePreview');

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(imageFile);

        document.getElementById('imagePath').value = imageFile.name;
    } else {
        imagePreview.style.display = 'none';
    }
}


function saveData() {
    var imageFile = document.getElementById('imageFile').files[0];
    var year = document.getElementById('year').value;
    var text = document.getElementById('text').value;
    var heading = document.getElementById('heading').value;

    if (!imageFile || !year || !text || !heading) {
        alert('Please fill in all required fields.');
        return;
    }

    var formData = new FormData();
    formData.append('year', year);
    formData.append('heading', heading);
    formData.append('text', text);
    formData.append('imageFile', imageFile);

    var jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    fetch('http://localhost:8181/ibg-infotech/auth/save-achievement', {
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
                text: 'Data has been saved successfully.',
            }).then((result) => {

                document.getElementById('imageFile').value = '';
                document.getElementById('year').value = '';
                document.getElementById('text').value = '';
                document.getElementById('heading').value = '';

                window.location.href = 'About-us-Achievement.html';
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




// -------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
    achievmentData();
    aboutusContent();
});


function achievmentData() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-achievements', {
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
            // const textTitle = data[0];
            const firstRecord4 = data1[0];
            const secondRecord5 = data1[1];
            const thirdRecord6 = data1[2];
            const fourthRecord7 = data1[3];
            const fifthRecord8 = data1[4];
            const sixthRecord9 = data1[5];

            // const textTitleData = "Your dynamic title here";
            // document.getElementById('textTitle').innerHTML = textTitleData.title;

            // Set image source, name, and designation for the first record
            document.getElementById('aRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord4.image}" width="113" height="150" alt="${firstRecord4.image}" title="${firstRecord4.image}" />`;
            document.getElementById('aRecordYear').innerText = firstRecord4.year;
            document.getElementById('aRecordText').innerText = firstRecord4.text;
            document.getElementById('aRecordHeading').innerText = firstRecord4.heading;

            // Set image source, name, and designation for the second record
            document.getElementById('bRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord5.image}" width="113" height="150" alt="${secondRecord5.image}" title="${secondRecord5.image}" />`;
            document.getElementById('bRecordYear').innerText = secondRecord5.year;
            document.getElementById('bRecordText').innerText = secondRecord5.text;
            document.getElementById('bRecordHeading').innerText = secondRecord5.heading;

            // Set image source, name, and designation for the third record
            document.getElementById('cRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord6.image}" width="113" height="150" alt="${thirdRecord6.image}" title="${thirdRecord6.image}" />`;
            document.getElementById('cRecordYear').innerText = thirdRecord6.year;
            document.getElementById('cRecordText').innerText = thirdRecord6.text;
            document.getElementById('cRecordHeading').innerText = thirdRecord6.heading;

            // Set image source, name, and designation for the third record
            document.getElementById('dRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord7.image}" width="113" height="150" alt="${fourthRecord7.image}" title="${fourthRecord7.image}" />`;
            document.getElementById('dRecordYear').innerText = fourthRecord7.year;
            document.getElementById('dRecordText').innerText = fourthRecord7.text;
            document.getElementById('dRecordHeading').innerText = fourthRecord7.heading;

            // Set image source, name, and designation for the third record
            document.getElementById('eRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord8.image}" width="113" height="150" alt="${fifthRecord8.image}" title="${fifthRecord8.image}" />`;
            document.getElementById('eRecordYear').innerText = fifthRecord8.year;
            document.getElementById('eRecordText').innerText = fifthRecord8.text;
            document.getElementById('eRecordHeading').innerText = fifthRecord8.heading;

            // Set image source, name, and designation for the third record
            document.getElementById('fRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord9.image}" width="113" height="150" alt="${sixthRecord9.image}" title="${sixthRecord9.image}" />`;
            document.getElementById('fRecordYear').innerText = sixthRecord9.year;
            document.getElementById('fRecordText').innerText = sixthRecord9.text;
            document.getElementById('fRecordHeading').innerText = sixthRecord9.heading;

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


// Call ourTeam() when the page loads
window.onload = function () {
    achievmentData();
};

// ----------------------------------------------------------------------------------------------

function aboutusContent() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-about-us-content', {
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

            const dynamicTextData1 = firstFooterItem.heading;
            const dynamicTextElement1 = document.getElementById('dynamicHeading');
            dynamicTextElement1.innerHTML = dynamicTextData1;

            const dynamicTextData2 = firstFooterItem.text1;
            const dynamicTextElement2 = document.getElementById('dynamicText1');
            dynamicTextElement2.innerHTML = dynamicTextData2;

            const dynamicTextData3 = firstFooterItem.text2;
            const dynamicTextElement3 = document.getElementById('dynamicText2');
            dynamicTextElement3.innerHTML = dynamicTextData3;

            const dynamicTextData4 = firstFooterItem.mission;
            const dynamicTextElement4 = document.getElementById('dynamicText3');
            dynamicTextElement4.innerHTML = dynamicTextData4;

            const dynamicTextData5 = firstFooterItem.vision;
            const dynamicTextElement5 = document.getElementById('dynamicText4');
            dynamicTextElement5.innerHTML = dynamicTextData5;

            const dynamicTextData6 = firstFooterItem.value;
            const dynamicTextElement6 = document.getElementById('dynamicText5');
            dynamicTextElement6.innerHTML = dynamicTextData6;

            // Update the image dynamically
            const imageContainer = document.getElementById('imageContainer');
            const dynamicImage = document.createElement('img');
            dynamicImage.src = `data:image/jpeg;base64,${firstFooterItem.image}`; // Assuming image_a contains the Base64-encoded image
            dynamicImage.width = "530"; // Set your desired width
            dynamicImage.height = "900"; // Set your desired height
            dynamicImage.alt = "Dynamic Image"; // Set your desired alt text
            dynamicImage.classList.add('no-lazyload', 'img-main', 'attachment-full'); // Add necessary classes

            // Append the dynamically created image to the container
            imageContainer.appendChild(dynamicImage);

            const dynamicTextData7 = firstFooterItem.experience;
            const dynamicTextElement7 = document.getElementById('dynamicText6');
            dynamicTextElement7.innerHTML = dynamicTextData7;

            // Set the color of the text to white inline
            // dynamicTextElement7.setAttribute('style', 'color: white;');

            const dynamicTextData8 = firstFooterItem.award_text;
            const dynamicTextElement8 = document.getElementById('dynamicText7');
            dynamicTextElement8.innerHTML = dynamicTextData8;

            const dynamicMemeberData = firstFooterItem.member_count; // Assuming nations holds the dynamic data
            const dynamicMemeberElement = document.getElementById('dynamicMemeberCount');
            dynamicMemeberElement.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="45" data-delimiter="">${dynamicMemeberData}</span><span class="ct-counter-number-suffix">+</span>`;


            const dynamicMemeberData1 = firstFooterItem.awards_count; // Assuming nations holds the dynamic data
            const dynamicMemeberElement1 = document.getElementById('dynamicAwardsCount');
            dynamicMemeberElement1.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="5" data-delimiter="">${dynamicMemeberData1}</span><span class="ct-counter-number-suffix">+</span>`;


            const dynamicMemeberData2 = firstFooterItem.project; // Assuming nations holds the dynamic data
            const dynamicMemeberElement2 = document.getElementById('dynamicProject');
            dynamicMemeberElement2.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="5" data-delimiter="">${dynamicMemeberData2}</span><span class="ct-counter-number-suffix">k+</span>`;

            const dynamicMemeberData3 = firstFooterItem.client_review; // Assuming nations holds the dynamic data
            const dynamicMemeberElement3 = document.getElementById('dynamicClientReview');
            dynamicMemeberElement3.innerHTML = `<span class="ct-counter-number-value" data-duration="2000" data-to-value="100" data-delimiter="">${dynamicMemeberData3}</span><span class="ct-counter-number-suffix">+</span>`;

            const dynamicTextData9 = firstFooterItem.terminal;
            const dynamicTextElement9 = document.getElementById('dynamicText8');
            dynamicTextElement9.innerHTML = dynamicTextData9;

        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });
}

// Call homeAbout() when the page loads
window.onload = function () {
    aboutusContent();
};



// ----------------------------get all data-----------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-achievements', {
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
            console.log('Error fetching data:', error);
        })
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
            <td>${item.year}</td>
            <td>${item.text}</td>
            <td>${item.heading}</td>
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
                console.log("Edit button clicked for ID:" + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/get-achievement/${id}`, {
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
                        window.location.href = `Update-about-us-achievement.html`;

                    })

                    .catch(error => {
                        console.error('Error fetching home content data:', error);
                    });
            });

            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                const id = deleteBtn.getAttribute('data-id');
                deleteAchievement(id);
            });
        });
    } else {
        console.error('Data received is not an array:', data);
    }
}


// -------------------------delete the data---------------------------------------------------------------


function deleteAchievement(id) {
    jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-achievement/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },

    })
        .then(response => {
            if (!response.ok) {
                throw new error('Network respose was not ok');
            }
            return response.json();
        })

        .then(data => {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'about us achievement has been deleted successfully.',
            }).then((result) => {

                getData();
            });
        })

        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete the about us achievement. Please try again later.',
            });
        });
}


// ---------------------------update the data by id--------------------------------------------


function updateData() {
    var id = document.getElementById('id').value;
    var year = document.getElementById('year').value;
    var heading = document.getElementById('heading').value;
    var text = document.getElementById('text').value;
    var imageFile = document.getElementById('image-input').files[0];
    var jwtToken = localStorage.getItem('jwtToken');

    if (!year || !heading || !text) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    var formData = new FormData();
    formData.append('year', year);
    formData.append('heading', heading);
    formData.append('text', text);

    var jsonData = {
        year: year,
        heading: heading,
        text: text,
    };

    formData.append('data', JSON.stringify(jsonData));

    if (imageFile) {
        formData.append('imageFile', imageFile);
    }

    fetch(`http://localhost:8181/ibg-infotech/auth/update-achievement/${id}`, {
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
            if (data.status) {
                // Data updated successfully
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Data has been updated successfully.',
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        window.location.href = 'About-us-Achievement.html';
                    }
                });
            } else {
                // Failed to update data
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update data. ' + data.error,
                });
            }
        })
        .catch(error => {
            // Error during fetch request
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update data. Please try again.',
            });
        });
}
