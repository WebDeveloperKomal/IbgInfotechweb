// ------------------------save the data-----------------------------------------

function previewImage() {
    const imagePath = document.getElementById('imagePath').files[0];
    const imagePreview = document.getElementById('imagePreview');

    if (imagePath) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(imagePath);
    } else {
        imagePreview.style.display = 'none';
    }
}


function saveData() {
    var title = document.getElementById('title').value;
    var empName = document.getElementById('empName').value;
    var imageFile = document.getElementById('imagePath').files[0]; // Access the file object
    var designation = document.getElementById('designation').value;

    var formData = new FormData();
    formData.append('data', JSON.stringify({
        title: title,
        empName: empName,
        designation: designation
    }));

    if (imageFile) {
        formData.append('image', imageFile); // Append the file object
    }

    var jwtToken = localStorage.getItem('jwtToken');

    if (!title || !empName || !imageFile || !designation) {
        alert('Please fill in required fields.');
        return;
    }

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again');
        return;
    }

    fetch('http://localhost:8181/ibg-infotech/auth/add-new-member', {
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
                document.getElementById('empName').value = '';
                document.getElementById('imagePath').value = '';
                document.getElementById('designation').value = '';

                window.location.href = 'Our-team.html';
            });
        })
        .catch(error => {
            console.error('Error:', error);
            window.location.href = 'Our-Team-form.html';
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to save data. Please try again.',
            });
        });
}

// ---------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
    teamData();
});



function teamData() {
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
            // const textTitle = data[0];
            const firstRecord3 = data1[3];
            const secondRecord = data1[4];
            const thirdRecord = data1[5];
            const fourthRecord = data1[6];
            const fifthRecord = data1[7];
            const sixthRecord = data1[8];
            const seventhRecord = data1[9];
            const eightRecord = data1[10];
            const ninethRecord = data1[11];
            const tenthRecord = data1[12];
            const elevenRecord = data1[13];


            // const textTitleData = "Your dynamic title here";
            // document.getElementById('textTitle').innerHTML = textTitleData.title;


            // Set image source, name, and designation for the first record
            document.getElementById('fRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord3.image}" width="370" height="509" alt="${firstRecord3.name}" title="${firstRecord3.name}" />`;
            document.getElementById('fRecordName').innerText = firstRecord3.name;
            document.getElementById('fRecordDesignation').innerText = firstRecord3.designation;

            // Set image source, name, and designation for the second record
            document.getElementById('secondRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image}" width="370" height="509" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordName').innerText = secondRecord.name;
            document.getElementById('secondRecordDesignation').innerText = secondRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('thirdRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image}" width="370" height="509" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordName').innerText = thirdRecord.name;
            document.getElementById('thirdRecordDesignation').innerText = thirdRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('fourthRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord.image}" width="370" height="509" alt="${fourthRecord.name}" title="${fourthRecord.name}" />`;
            document.getElementById('fourthRecordName').innerText = fourthRecord.name;
            document.getElementById('fourthRecordDesignation').innerText = fourthRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('fifthRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord.image}" width="370" height="509" alt="${fifthRecord.name}" title="${fifthRecord.name}" />`;
            document.getElementById('fifthRecordName').innerText = fifthRecord.name;
            document.getElementById('fifthRecordDesignation').innerText = fifthRecord.designation;


            // Set image source, name, and designation for the third record
            document.getElementById('sixthRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord.image}" width="370" height="509" alt="${sixthRecord.name}" title="${sixthRecord.name}" />`;
            document.getElementById('sixthRecordName').innerText = sixthRecord.name;
            document.getElementById('sixthRecordDesignation').innerText = sixthRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('seventhRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${seventhRecord.image}" width="370" height="509" alt="${seventhRecord.name}" title="${seventhRecord.name}" />`;
            document.getElementById('seventhRecordName').innerText = seventhRecord.name;
            document.getElementById('seventhRecordDesignation').innerText = seventhRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('eightRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${eightRecord.image}" width="370" height="509" alt="${eightRecord.name}" title="${eightRecord.name}" />`;
            document.getElementById('eightRecordName').innerText = eightRecord.name;
            document.getElementById('eightRecordDesignation').innerText = eightRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('ninethRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${ninethRecord.image}" width="370" height="509" alt="${ninethRecord.name}" title="${ninethRecord.name}" />`;
            document.getElementById('ninethRecordName').innerText = ninethRecord.name;
            document.getElementById('ninethRecordDesignation').innerText = ninethRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('tenthRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${tenthRecord.image}" width="370" height="509" alt="${tenthRecord.name}" title="${tenthRecord.name}" />`;
            document.getElementById('tenthRecordName').innerText = tenthRecord.name;
            document.getElementById('tenthRecordDesignation').innerText = tenthRecord.designation;

            // Set image source, name, and designation for the third record
            document.getElementById('elevenRecordImage').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${elevenRecord.image}" width="370" height="509" alt="${elevenRecord.name}" title="${elevenRecord.name}" />`;
            document.getElementById('elevenRecordName').innerText = elevenRecord.name;
            document.getElementById('elevenRecordDesignation').innerText = elevenRecord.designation;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


// Call ourTeam() when the page loads
window.onload = function () {
    teamData();
};


// -----------------------------get all data-----------------------------------


var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

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
            console.log(data);
            populateTable(data.data);
        })

        .catch(error => {
            console.log('Error fetching data:', error);
        })
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
                <td>${item.name}</td>
                <td>${item.designation}</td>
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
                console.log("Edit button clicked for ID:" + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/member-data/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + jwtToken,
                        'Content-Type': 'application/json' // Adjust content type if necessary
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
                        window.location.href = `update-Our-team.html`;
                    })
                    .catch(error => {
                        console.error('Error fetching member data by ID:', error);
                    });
            });

            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                const id = deleteBtn.getAttribute('data-id');
                deleteOurTeam(id);
            });
        });
    } else {
        console.error('Data received is not an array:', data);
    }
}

// -------------------------delete the data------------------------------------------------------------


function deleteOurTeam(id) {
    jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8181/ibg-infotech/auth/delete-member/${id}`, {
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
                text: 'our team has been deleted successfully.',
            }).then((result) => {

                getData();
            });
        })

        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete the our team. Please try again later.',
            });
        });
}


// --------------------------update the data by id-------------------------------------------


function updateData() {
    var id = document.getElementById('id').value;
    var title = document.getElementById('title').value;
    var name = document.getElementById('name').value; // Adjusted from 'empName' to 'name'
    var designation = document.getElementById('designation').value;
    var imageFile = document.getElementById('image-input').files[0];
    var jwtToken = localStorage.getItem('jwtToken');

    console.log("Fields captured:", id, title, name, designation, imageFile, jwtToken);

    if (!title || !name || !designation) { // Adjusted to check 'name' instead of 'empName'
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
    formData.append('name', name); // Adjusted from 'empName' to 'name'
    formData.append('designation', designation);

    var jsonData = {
        title: title,
        name: name, // Adjusted from 'empName' to 'name'
        designation: designation,
    };

    formData.append('data', JSON.stringify(jsonData));

    if (imageFile) {
        formData.append('image', imageFile); // Adjusted from 'imageFile' to 'image'
    }

    fetch(`http://localhost:8181/ibg-infotech/auth/update-member/${id}`, {
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
                    window.location.href = 'Our-team.html';
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
