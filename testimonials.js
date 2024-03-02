function rate(star) {
    // Reset all stars to default color
    const stars = document.querySelectorAll('.star');
    stars.forEach(starElement => starElement.classList.remove('selected'));

    // Highlight selected stars
    for (let i = 0; i < star; i++) {
        stars[i].classList.add('selected');
    }

    // You can capture the selected star value (1 to 5) and use it as needed
    console.log(`User rated: ${star} star(s)`);
}



// ------------------------save the data-----------------------------------------

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
    var title = document.getElementById('title').value;
    var test_name = document.getElementById('test_name').value;
    var designation = document.getElementById('designation').value;
    var imageFile = document.getElementById('imageFile').files[0];
    var comment = document.getElementById('comment').value;
    var status = document.getElementById('status').value;


    var formData = new FormData();
    formData.append('data', JSON.stringify({
        'title': title,
        'test_name': test_name,
        'designation': designation,
        'comment': comment,
        'status': status
    }));

    formData.append('imageFile', imageFile);

    var jwtToken = localStorage.getItem('jwtToken');

    if (!title || !test_name || !designation || !imageFile || !comment || !status) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    fetch('http://localhost:8181/ibg-infotech/auth/save-testimonials', {
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

                document.getElementById('title').value = '';
                document.getElementById('test_name').value = '';
                document.getElementById('designation').value = '';
                document.getElementById('imageFile').value = '';
                document.getElementById('comment').value = '';
                document.getElementById('status').value = '';

                window.location.href = 'Testimonials.html';
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
    testinomialData();
});


function testinomialData() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-testimonials', {
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
            const firstRecord3 = data1[0];
            const secondRecord3 = data1[1];
            const thirdRecord3 = data1[2];
            const fourthRecord3 = data1[3];
            const fifthRecord3 = data1[4];
            const sixthRecord3 = data1[5];

            // const textTitleData = "Your dynamic title here";
            // document.getElementById('textTitle').innerHTML = textTitleData.title;

            // Set image source, name, and designation for the first record
            document.getElementById('sRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord3.image}" width="74" height="74" alt="${firstRecord3.image}" title="${firstRecord3.image}" />`;
            document.getElementById('sRecordName').innerText = firstRecord3.test_name;
            document.getElementById('sRecordDesignation').innerText = firstRecord3.designation;
            document.getElementById('sRecordComment').innerText = firstRecord3.comment;

            // Set image source, name, and designation for the second record
            document.getElementById('tRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord3.image}" width="74" height="74" alt="${secondRecord3.image}" title="${secondRecord3.image}" />`;
            document.getElementById('tRecordName').innerText = secondRecord3.test_name;
            document.getElementById('tRecordDesignation').innerText = secondRecord3.designation;
            document.getElementById('tRecordComment').innerText = secondRecord3.comment;


            // Set image source, name, and designation for the third record
            document.getElementById('rRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord3.image}" width="74" height="74" alt="${thirdRecord3.image}" title="${thirdRecord3.image}" />`;
            document.getElementById('rRecordName').innerText = thirdRecord3.test_name;
            document.getElementById('rRecordDesignation').innerText = thirdRecord3.designation;
            document.getElementById('rRecordComment').innerText = thirdRecord3.comment;

            // Set image source, name, and designation for the third record
            document.getElementById('pRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord3.image}" width="74" height="74" alt="${fourthRecord3.image}" title="${fourthRecord3.image}" />`;
            document.getElementById('pRecordName').innerText = fourthRecord3.test_name;
            document.getElementById('pRecordDesignation').innerText = fourthRecord3.designation;
            document.getElementById('pRecordComment').innerText = fourthRecord3.comment;

            // Set image source, name, and designation for the third record
            document.getElementById('qRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord3.image}" width="74" height="74" alt="${fifthRecord3.image}" title="${fifthRecord3.image}" />`;
            document.getElementById('qRecordName').innerText = fifthRecord3.test_name;
            document.getElementById('qRecordDesignation').innerText = fifthRecord3.designation;
            document.getElementById('qRecordComment').innerText = fifthRecord3.comment;


            // Set image source, name, and designation for the third record
            document.getElementById('zRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord3.image}" width="74" height="74" alt="${sixthRecord3.image}" title="${sixthRecord3.image}" />`;
            document.getElementById('zRecordName').innerText = sixthRecord3.test_name;
            document.getElementById('zRecordDesignation').innerText = sixthRecord3.designation;
            document.getElementById('zRecordComment').innerText = sixthRecord3.comment;

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


// Call ourTeam() when the page loads
window.onload = function () {
    testinomialData();
};



// ----------------------------get all the data------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-testimonials', {
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
            if (data && data.data) {
                console.log(data);
                populateTable(data.data);
            } else {
                console.log('Empty or invalid data received');
            }
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
            <td>${item.title}</td>
            <td>${item.test_name}</td>
            <td>${item.designation}</td>
            <td>${item.comment}</td>
            <td>${item.status}</td>
            <td><img src="data:image/jpeg;base64,${item.image}" width="100" height="100"></td>
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


                fetch(`http://localhost:8181/ibg-infotech/auth/get-testimonials/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + jwtToken,
                    }
                })

                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })

                    .then(data => {
                        localStorage.setItem('updateData', JSON.stringify(data.data));
                        window.location.href = 'update-testimonial.html';

                    })
                    .catch(error => {
                        console.error('Error fetching testinomial data:', error);
                    });
            });

            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                const id = deleteBtn.getAttribute('data-id');
                deleteTestimonial(id);
            });

        });

    } else {
        console.error('Data received is not an array:', data);
    }
}


// ----------------------delete the data--------------------------------------------------


function deleteTestimonial(id) {

    var jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-testimonials/${id}`, {
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
                text: 'tesinomial has been deleted successfully.',
            }).then((result) => {

                getData();
            });
        })

        .catch(error => {
            console.error('Error tesinomial:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete the tesinomial. Please try again later.',
            });
        });

}


// -------------------------update data by id--------------------------------------


function updateData() {
    var id = document.getElementById('id').value;
    var title = document.getElementById('title').value;
    var test_name = document.getElementById('test_name').value;
    var designation = document.getElementById('designation').value;
    var imageFile = document.getElementById('image-input').files[0];
    var comment = document.getElementById('comment').value;
    var status = document.getElementById('status').value;
    var jwtToken = localStorage.getItem('jwtToken');

    console.log("Fields captured:", id, title, test_name, designation, imageFile, comment, status, jwtToken);

    if (!title || !test_name || !designation || !comment || !status) {
        console.log("Please fill in all required fields.");
        alert('Please fill in all required fields.');
        return;
    }

    if (!jwtToken) {
        console.log("JWT token is missing. Please log in again.");
        alert('JWT token is missing. Please log in again.');
        return;
    }

    var formData = new FormData();
    formData.append('title', title);
    formData.append('test_name', test_name);
    formData.append('designation', designation);
    formData.append('comment', comment);
    formData.append('status', status);

    var jsonData = {
        title: title,
        test_name: test_name,
        designation: designation,
        comment: comment,
        status: status,
    };

    formData.append('data', JSON.stringify(jsonData));

    if (imageFile) {
        formData.append('imageFile', imageFile);
    }

    fetch(`http://localhost:8181/ibg-infotech/auth/update-testimonials/${id}`, {
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
                    window.location.href = 'Testimonials.html';
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
