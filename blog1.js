// ----------------------------get all data----------------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);

document.addEventListener('DOMContentLoaded', function () {
    blog1();
});


document.addEventListener('DOMContentLoaded', function () {
    blog2();
});

document.addEventListener('DOMContentLoaded', function () {
    blog3();
});

document.addEventListener('DOMContentLoaded', function () {
    blog4();
});

document.addEventListener('DOMContentLoaded', function () {
    blog5();
});

document.addEventListener('DOMContentLoaded', function () {
    blog6();
});

document.addEventListener('DOMContentLoaded', function () {
    blog7();
});

document.addEventListener('DOMContentLoaded', function () {
    blog8();
});





function blog1() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;

            // Assuming blogData[0] is the first record, blogData[1] is the second record, and blogData[2] is the third record
            const firstRecord = blogData[0];
            // const secondRecord = blogData[1];
            // const thirdRecord = blogData[2];

            // Set image source, title, and content for the first record
            document.getElementById('firstRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image1}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image2}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image3}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image4}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image5}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordName').innerText = firstRecord.name;
            document.getElementById('firstRecordText1').innerText = firstRecord.text.substring(48, 117);
            document.getElementById('firstRecordText2').innerText = firstRecord.text.substring(133, 480);
            document.getElementById('firstRecordText3').innerText = firstRecord.text.substring(491, 715);
            document.getElementById('firstRecordText4').innerText = firstRecord.text.substring(727, 762);
            document.getElementById('firstRecordText5').innerText = firstRecord.text.substring(780, 1066);
            document.getElementById('firstRecordText6').innerText = firstRecord.text.substring(1085, 1206);
            document.getElementById('firstRecordText7').innerHTML = firstRecord.text.substring(1222, 1673);
            document.getElementById('firstRecordText8').innerText = firstRecord.text.substring(1684, 1720);
            document.getElementById('firstRecordText9').innerText = firstRecord.text.substring(1731, 1987);
            document.getElementById('firstRecordText10').innerText = firstRecord.text.substring(2006, 2119);
            document.getElementById('firstRecordText11').innerHTML = firstRecord.text.substring(2134, 2630);
            document.getElementById('firstRecordText12').innerText = firstRecord.text.substring(2631, 2668);
            document.getElementById('firstRecordText13').innerText = firstRecord.text.substring(2679, 2960);
            document.getElementById('firstRecordText14').innerText = firstRecord.text.substring(2979, 3091);
            document.getElementById('firstRecordText15').innerHTML = firstRecord.text.substring(3091, 3809);
            document.getElementById('firstRecordText16').innerText = firstRecord.text.substring(3831, 3871);
            document.getElementById('firstRecordText17').innerText = firstRecord.text.substring(3882, 4598);
            document.getElementById('firstRecordText18').innerText = firstRecord.text.substring(4609, 4808);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog1();
};


// ----------------------------------------------------------------------------------------------------


// Function to fetch data and populate second record on blog2.html
function blog2() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const secondRecord = blogData[1]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('secondRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image1}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image2}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image3}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image4}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image5}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordName').innerText = secondRecord.name;
            document.getElementById('secondRecordText1').innerText = secondRecord.text.substring(48, 115);
            document.getElementById('secondRecordText2').innerText = secondRecord.text.substring(131, 635);
            document.getElementById('secondRecordText3').innerText = secondRecord.text.substring(646, 679);
            document.getElementById('secondRecordText4').innerText = secondRecord.text.substring(690, 1036);
            document.getElementById('secondRecordText5').innerText = secondRecord.text.substring(1047, 1085);
            document.getElementById('secondRecordText6').innerText = secondRecord.text.substring(1096, 1379);
            document.getElementById('secondRecordText7').innerHTML = secondRecord.text.substring(1379, 1555);
            document.getElementById('secondRecordText8').innerText = secondRecord.text.substring(1566, 1593);
            document.getElementById('secondRecordText9').innerText = secondRecord.text.substring(1604, 1904);
            document.getElementById('secondRecordText10').innerText = secondRecord.text.substring(1915, 1946);
            document.getElementById('secondRecordText11').innerHTML = secondRecord.text.substring(1950, 2321);
            document.getElementById('secondRecordText12').innerText = secondRecord.text.substring(2332, 2367);
            document.getElementById('secondRecordText13').innerText = secondRecord.text.substring(2378, 2692);
            document.getElementById('secondRecordText14').innerText = secondRecord.text.substring(2703, 2730);
            document.getElementById('secondRecordText15').innerHTML = secondRecord.text.substring(2741, 3058);
            document.getElementById('secondRecordText16').innerText = secondRecord.text.substring(3069, 3084);
            document.getElementById('secondRecordText17').innerText = secondRecord.text.substring(3095, 3654);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog2();
};


// ------------------------------------------------------------------------------------------------------------------




// Function to fetch data and populate second record on blog2.html
function blog3() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const thirdRecord = blogData[2]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('thirdRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image1}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image2}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image3}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image4}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image5}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordName').innerText = thirdRecord.name;
            document.getElementById('thirdRecordText1').innerText = thirdRecord.text.substring(48, 117);
            document.getElementById('thirdRecordText2').innerText = thirdRecord.text.substring(133, 835);
            document.getElementById('thirdRecordText3').innerText = thirdRecord.text.substring(846, 865);
            document.getElementById('thirdRecordText4').innerText = thirdRecord.text.substring(876, 1248);
            document.getElementById('thirdRecordText5').innerText = thirdRecord.text.substring(1259, 1287);
            document.getElementById('thirdRecordText6').innerText = thirdRecord.text.substring(1298, 1563);
            document.getElementById('thirdRecordText7').innerHTML = thirdRecord.text.substring(1567, 1608);
            document.getElementById('thirdRecordText8').innerText = thirdRecord.text.substring(1619, 1927);
            document.getElementById('thirdRecordText9').innerText = thirdRecord.text.substring(1938, 1971);
            document.getElementById('thirdRecordText10').innerText = thirdRecord.text.substring(1982, 2189);
            document.getElementById('thirdRecordText11').innerHTML = thirdRecord.text.substring(2250, 2200);
            document.getElementById('thirdRecordText12').innerText = thirdRecord.text.substring(2257, 2456);
            document.getElementById('thirdRecordText13').innerText = thirdRecord.text.substring(2467, 2488);
            document.getElementById('thirdRecordText14').innerText = thirdRecord.text.substring(2499, 2735);
            document.getElementById('thirdRecordText15').innerHTML = thirdRecord.text.substring(2739, 2800);
            document.getElementById('thirdRecordText16').innerText = thirdRecord.text.substring(2803, 3049);
            document.getElementById('thirdRecordText17').innerText = thirdRecord.text.substring(3060, 3098);
            document.getElementById('thirdRecordText18').innerText = thirdRecord.text.substring(3109, 3333);
            document.getElementById('thirdRecordText19').innerText = thirdRecord.text.substring(3344, 3362);
            document.getElementById('thirdRecordText20').innerText = thirdRecord.text.substring(3373, 3604);
            document.getElementById('thirdRecordText21').innerText = thirdRecord.text.substring(3615, 3653);
            document.getElementById('thirdRecordText22').innerText = thirdRecord.text.substring(3664, 3883);
            document.getElementById('thirdRecordText23').innerText = thirdRecord.text.substring(3894, 3909);
            document.getElementById('thirdRecordText24').innerText = thirdRecord.text.substring(3920, 4483);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog3();
};

// -------------------------------------------------------------------------------------------------------------






// Function to fetch data and populate second record on blog2.html
function blog4() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const fourthRecord = blogData[3]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('fourthRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord.image1}" width="253" height="253" alt="${fourthRecord.name}" title="${fourthRecord.name}" />`;
            document.getElementById('fourthRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord.image2}" width="253" height="253" alt="${fourthRecord.name}" title="${fourthRecord.name}" />`;
            document.getElementById('fourthRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord.image3}" width="253" height="253" alt="${fourthRecord.name}" title="${fourthRecord.name}" />`;
            document.getElementById('fourthRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord.image4}" width="253" height="253" alt="${fourthRecord.name}" title="${fourthRecord.name}" />`;
            document.getElementById('fourthRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fourthRecord.image5}" width="253" height="253" alt="${fourthRecord.name}" title="${fourthRecord.name}" />`;
            document.getElementById('fourthRecordName').innerText = fourthRecord.name;
            document.getElementById('fourthRecordText1').innerText = fourthRecord.text.substring(48, 119);
            document.getElementById('fourthRecordText2').innerText = fourthRecord.text.substring(135, 816);
            document.getElementById('fourthRecordText3').innerText = fourthRecord.text.substring(827, 869);
            document.getElementById('fourthRecordText4').innerText = fourthRecord.text.substring(880, 1322);
            document.getElementById('fourthRecordText5').innerText = fourthRecord.text.substring(1333, 1369);
            document.getElementById('fourthRecordText6').innerText = fourthRecord.text.substring(1380, 1768);
            document.getElementById('fourthRecordText7').innerHTML = fourthRecord.text.substring(1779, 1818);
            document.getElementById('fourthRecordText8').innerText = fourthRecord.text.substring(1829, 2176);
            document.getElementById('fourthRecordText9').innerText = fourthRecord.text.substring(2187, 2221);
            document.getElementById('fourthRecordText10').innerText = fourthRecord.text.substring(2232, 2614);
            document.getElementById('fourthRecordText11').innerHTML = fourthRecord.text.substring(2620, 2678);
            document.getElementById('fourthRecordText12').innerText = fourthRecord.text.substring(2689, 3071);
            document.getElementById('fourthRecordText13').innerText = fourthRecord.text.substring(3082, 3121);
            document.getElementById('fourthRecordText14').innerText = fourthRecord.text.substring(3132, 3506);
            document.getElementById('fourthRecordText15').innerHTML = fourthRecord.text.substring(3510, 3558);
            document.getElementById('fourthRecordText16').innerText = fourthRecord.text.substring(3562, 3954);
            document.getElementById('fourthRecordText17').innerText = fourthRecord.text.substring(3965, 3980);
            document.getElementById('fourthRecordText18').innerText = fourthRecord.text.substring(3991, 4293);
            document.getElementById('fourthRecordText19').innerText = fourthRecord.text.substring(4304, 4588);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog4();
};


// ---------------------------------------------------------------------------------------------------------------



// Function to fetch data and populate second record on blog2.html
function blog5() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const fifthRecord = blogData[4]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('fifthRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord.image1}" width="253" height="253" alt="${fifthRecord.name}" title="${fifthRecord.name}" />`;
            document.getElementById('fifthRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord.image2}" width="253" height="253" alt="${fifthRecord.name}" title="${fifthRecord.name}" />`;
            document.getElementById('fifthRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord.image3}" width="253" height="253" alt="${fifthRecord.name}" title="${fifthRecord.name}" />`;
            document.getElementById('fifthRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord.image4}" width="253" height="253" alt="${fifthRecord.name}" title="${fifthRecord.name}" />`;
            document.getElementById('fifthRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${fifthRecord.image5}" width="253" height="253" alt="${fifthRecord.name}" title="${fifthRecord.name}" />`;
            document.getElementById('fifthRecordName').innerText = fifthRecord.name;
            document.getElementById('fifthRecordText1').innerText = fifthRecord.text.substring(48, 106);
            document.getElementById('fifthRecordText2').innerText = fifthRecord.text.substring(122, 654);
            document.getElementById('fifthRecordText3').innerText = fifthRecord.text.substring(665, 678);
            document.getElementById('fifthRecordText4').innerText = fifthRecord.text.substring(689, 863);
            document.getElementById('fifthRecordText5').innerText = fifthRecord.text.substring(874, 898);
            document.getElementById('fifthRecordText6').innerText = fifthRecord.text.substring(909, 1069);
            document.getElementById('fifthRecordText7').innerHTML = fifthRecord.text.substring(1074, 1100);
            document.getElementById('fifthRecordText8').innerText = fifthRecord.text.substring(1107, 1257);
            document.getElementById('fifthRecordText9').innerText = fifthRecord.text.substring(1268, 1286);
            document.getElementById('fifthRecordText10').innerText = fifthRecord.text.substring(1297, 1441);
            document.getElementById('fifthRecordText11').innerHTML = fifthRecord.text.substring(1446, 1486);
            document.getElementById('fifthRecordText12').innerText = fifthRecord.text.substring(1486, 1645);
            document.getElementById('fifthRecordText13').innerText = fifthRecord.text.substring(1656, 1674);
            document.getElementById('fifthRecordText14').innerText = fifthRecord.text.substring(1685, 1815);
            document.getElementById('fifthRecordText15').innerHTML = fifthRecord.text.substring(1819, 1858);
            document.getElementById('fifthRecordText16').innerText = fifthRecord.text.substring(1862, 2007);
            document.getElementById('fifthRecordText17').innerText = fifthRecord.text.substring(2018, 2037);
            document.getElementById('fifthRecordText18').innerText = fifthRecord.text.substring(2048, 2200);
            document.getElementById('fifthRecordText19').innerText = fifthRecord.text.substring(2211, 2228);
            document.getElementById('fifthRecordText20').innerText = fifthRecord.text.substring(2239, 2380);
            document.getElementById('fifthRecordText21').innerText = fifthRecord.text.substring(2391, 2417);
            document.getElementById('fifthRecordText22').innerText = fifthRecord.text.substring(2428, 2562);
            document.getElementById('fifthRecordText23').innerText = fifthRecord.text.substring(2573, 2598);
            document.getElementById('fifthRecordText24').innerText = fifthRecord.text.substring(2609, 2754);
            document.getElementById('fifthRecordText25').innerText = fifthRecord.text.substring(2765, 2787);
            document.getElementById('fifthRecordText26').innerText = fifthRecord.text.substring(2798, 2931);
            document.getElementById('fifthRecordText27').innerText = fifthRecord.text.substring(2942, 2957);
            document.getElementById('fifthRecordText28').innerText = fifthRecord.text.substring(2968, 3471);
            document.getElementById('fifthRecordText29').innerText = fifthRecord.text.substring(3482, 3722);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog5();
};


// ------------------------------------------------------------------------------------------------------------





// Function to fetch data and populate second record on blog2.html
function blog6() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const sixthRecord = blogData[5]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('sixthRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord.image1}" width="253" height="253" alt="${sixthRecord.name}" title="${sixthRecord.name}" />`;
            document.getElementById('sixthRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord.image2}" width="253" height="253" alt="${sixthRecord.name}" title="${sixthRecord.name}" />`;
            document.getElementById('sixthRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord.image3}" width="253" height="253" alt="${sixthRecord.name}" title="${sixthRecord.name}" />`;
            document.getElementById('sixthRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord.image4}" width="253" height="253" alt="${sixthRecord.name}" title="${sixthRecord.name}" />`;
            document.getElementById('sixthRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${sixthRecord.image5}" width="253" height="253" alt="${sixthRecord.name}" title="${sixthRecord.name}" />`;
            document.getElementById('sixthRecordName').innerText = sixthRecord.name;
            document.getElementById('sixthRecordText1').innerText = sixthRecord.text.substring(48, 118);
            document.getElementById('sixthRecordText2').innerText = sixthRecord.text.substring(134, 816);
            document.getElementById('sixthRecordText3').innerText = sixthRecord.text.substring(827, 855);
            document.getElementById('sixthRecordText4').innerText = sixthRecord.text.substring(866, 1292);
            document.getElementById('sixthRecordText5').innerText = sixthRecord.text.substring(1303, 1335);
            document.getElementById('sixthRecordText6').innerText = sixthRecord.text.substring(1346, 1361);
            document.getElementById('sixthRecordText7').innerHTML = sixthRecord.text.substring(1369, 1597);
            document.getElementById('sixthRecordText8').innerText = sixthRecord.text.substring(1608, 1636);
            document.getElementById('sixthRecordText9').innerText = sixthRecord.text.substring(1647, 1789);
            document.getElementById('sixthRecordText10').innerText = sixthRecord.text.substring(1800, 1823);
            document.getElementById('sixthRecordText11').innerHTML = sixthRecord.text.substring(1828, 1991);
            document.getElementById('sixthRecordText12').innerText = sixthRecord.text.substring(2002, 2037);
            document.getElementById('sixthRecordText13').innerText = sixthRecord.text.substring(2048, 2262);
            document.getElementById('sixthRecordText14').innerText = sixthRecord.text.substring(2273, 2309);
            document.getElementById('sixthRecordText15').innerHTML = sixthRecord.text.substring(2313, 2358);
            document.getElementById('sixthRecordText16').innerText = sixthRecord.text.substring(2365, 2488);
            document.getElementById('sixthRecordText17').innerText = sixthRecord.text.substring(2499, 2528);
            document.getElementById('sixthRecordText18').innerText = sixthRecord.text.substring(2539, 2665);
            document.getElementById('sixthRecordText19').innerText = sixthRecord.text.substring(2676, 2706);
            document.getElementById('sixthRecordText20').innerText = sixthRecord.text.substring(2717, 2823);
            document.getElementById('sixthRecordText21').innerText = sixthRecord.text.substring(2834, 2861);
            document.getElementById('sixthRecordText22').innerText = sixthRecord.text.substring(2872, 2987);
            document.getElementById('sixthRecordText23').innerText = sixthRecord.text.substring(2998, 3023);
            document.getElementById('sixthRecordText24').innerText = sixthRecord.text.substring(3034, 3160);
            document.getElementById('sixthRecordText25').innerText = sixthRecord.text.substring(3171, 3196);
            document.getElementById('sixthRecordText26').innerText = sixthRecord.text.substring(3207, 3314);
            document.getElementById('sixthRecordText27').innerText = sixthRecord.text.substring(3325, 3348);
            document.getElementById('sixthRecordText28').innerText = sixthRecord.text.substring(3359, 3476);
            document.getElementById('sixthRecordText29').innerText = sixthRecord.text.substring(3487, 3517);
            document.getElementById('sixthRecordText30').innerText = sixthRecord.text.substring(3528, 3914);
            document.getElementById('sixthRecordText31').innerText = sixthRecord.text.substring(3925, 3940);
            document.getElementById('sixthRecordText32').innerText = sixthRecord.text.substring(3951, 4530);
            document.getElementById('sixthRecordText33').innerText = sixthRecord.text.substring(4541, 4730);


        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog6();
};


// ------------------------------------------------------------------------------------------------------------------




// Function to fetch data and populate second record on blog2.html
function blog7() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const seventhRecord = blogData[6]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('seventhRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${seventhRecord.image1}" width="253" height="253" alt="${seventhRecord.name}" title="${seventhRecord.name}" />`;
            document.getElementById('seventhRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${seventhRecord.image2}" width="253" height="253" alt="${seventhRecord.name}" title="${seventhRecord.name}" />`;
            document.getElementById('seventhRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${seventhRecord.image3}" width="253" height="253" alt="${seventhRecord.name}" title="${seventhRecord.name}" />`;
            document.getElementById('seventhRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${seventhRecord.image4}" width="253" height="253" alt="${seventhRecord.name}" title="${seventhRecord.name}" />`;
            document.getElementById('seventhRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${seventhRecord.image5}" width="253" height="253" alt="${seventhRecord.name}" title="${seventhRecord.name}" />`;
            document.getElementById('seventhRecordName').innerText = seventhRecord.name;
            document.getElementById('seventhRecordText1').innerText = seventhRecord.text.substring(48, 128);
            document.getElementById('seventhRecordText2').innerText = seventhRecord.text.substring(144, 776);
            document.getElementById('seventhRecordText3').innerText = seventhRecord.text.substring(787, 817);
            document.getElementById('seventhRecordText4').innerText = seventhRecord.text.substring(828, 1303);
            document.getElementById('seventhRecordText5').innerText = seventhRecord.text.substring(1314, 1356);
            document.getElementById('seventhRecordText6').innerText = seventhRecord.text.substring(1367, 1391);
            document.getElementById('seventhRecordText7').innerHTML = seventhRecord.text.substring(1395, 1650);
            document.getElementById('seventhRecordText8').innerText = seventhRecord.text.substring(1657, 1684);
            document.getElementById('seventhRecordText9').innerText = seventhRecord.text.substring(1695, 1918);
            document.getElementById('seventhRecordText10').innerText = seventhRecord.text.substring(1929, 1961);
            document.getElementById('seventhRecordText11').innerHTML = seventhRecord.text.substring(1965, 2265);
            document.getElementById('seventhRecordText12').innerText = seventhRecord.text.substring(2276, 2304);
            document.getElementById('seventhRecordText13').innerText = seventhRecord.text.substring(2315, 2538);
            document.getElementById('seventhRecordText14').innerText = seventhRecord.text.substring(2549, 2571);
            document.getElementById('seventhRecordText15').innerHTML = seventhRecord.text.substring(2578, 2772);
            document.getElementById('seventhRecordText16').innerText = seventhRecord.text.substring(2783, 2821);
            document.getElementById('seventhRecordText17').innerText = seventhRecord.text.substring(2832, 2867);
            document.getElementById('seventhRecordText18').innerText = seventhRecord.text.substring(2878, 3025);
            document.getElementById('seventhRecordText19').innerText = seventhRecord.text.substring(3036, 3062);
            document.getElementById('seventhRecordText20').innerText = seventhRecord.text.substring(3073, 3235);
            document.getElementById('seventhRecordText21').innerText = seventhRecord.text.substring(3246, 3274);
            document.getElementById('seventhRecordText22').innerText = seventhRecord.text.substring(3285, 3468);
            document.getElementById('seventhRecordText23').innerText = seventhRecord.text.substring(3479, 3503);
            document.getElementById('seventhRecordText24').innerText = seventhRecord.text.substring(3514, 3691);
            document.getElementById('seventhRecordText25').innerText = seventhRecord.text.substring(3702, 3766);
            document.getElementById('seventhRecordText26').innerText = seventhRecord.text.substring(3777, 4257);
            document.getElementById('seventhRecordText27').innerText = seventhRecord.text.substring(4268, 4283);
            document.getElementById('seventhRecordText28').innerText = seventhRecord.text.substring(4294, 4870);


        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog7();
};


// ----------------------------------------------------------------------------------------------------------------





// Function to fetch data and populate second record on blog2.html
function blog8() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            const blogData = data.data;
            const eightRecord = blogData[7]; // Assuming the second record is present

            // Set image source, title, and content for the second record on blog2.html
            document.getElementById('eightRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${eightRecord.image1}" width="253" height="253" alt="${eightRecord.name}" title="${eightRecord.name}" />`;
            document.getElementById('eightRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${eightRecord.image2}" width="253" height="253" alt="${eightRecord.name}" title="${eightRecord.name}" />`;
            document.getElementById('eightRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${eightRecord.image3}" width="253" height="253" alt="${eightRecord.name}" title="${eightRecord.name}" />`;
            document.getElementById('eightRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${eightRecord.image4}" width="253" height="253" alt="${eightRecord.name}" title="${eightRecord.name}" />`;
            document.getElementById('eightRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${eightRecord.image5}" width="253" height="253" alt="${eightRecord.name}" title="${eightRecord.name}" />`;
            document.getElementById('eightRecordName').innerText = eightRecord.name;
            document.getElementById('eightRecordText1').innerText = eightRecord.text.substring(48, 115);
            document.getElementById('eightRecordText2').innerText = eightRecord.text.substring(131, 637);
            document.getElementById('eightRecordText3').innerText = eightRecord.text.substring(648, 684);
            document.getElementById('eightRecordText4').innerText = eightRecord.text.substring(695, 720);
            document.getElementById('eightRecordText5').innerText = eightRecord.text.substring(731, 961);
            document.getElementById('eightRecordText6').innerText = eightRecord.text.substring(972, 996);
            document.getElementById('eightRecordText7').innerHTML = eightRecord.text.substring(1000, 1200);
            document.getElementById('eightRecordText8').innerText = eightRecord.text.substring(1211, 1234);
            document.getElementById('eightRecordText9').innerText = eightRecord.text.substring(1245, 1445);
            document.getElementById('eightRecordText10').innerText = eightRecord.text.substring(1456, 1480);
            document.getElementById('eightRecordText11').innerHTML = eightRecord.text.substring(1485, 1711);
            document.getElementById('eightRecordText12').innerText = eightRecord.text.substring(1722, 1753);
            document.getElementById('eightRecordText13').innerText = eightRecord.text.substring(1764, 2220);
            document.getElementById('eightRecordText14').innerText = eightRecord.text.substring(2231, 2281);
            document.getElementById('eightRecordText15').innerHTML = eightRecord.text.substring(2289, 2310);
            document.getElementById('eightRecordText16').innerText = eightRecord.text.substring(2316, 2509);
            document.getElementById('eightRecordText17').innerText = eightRecord.text.substring(2520, 2537);
            document.getElementById('eightRecordText18').innerText = eightRecord.text.substring(2548, 2726);
            document.getElementById('eightRecordText19').innerText = eightRecord.text.substring(2737, 2750);
            document.getElementById('eightRecordText20').innerText = eightRecord.text.substring(2761, 2956);
            document.getElementById('eightRecordText21').innerText = eightRecord.text.substring(2967, 2984);
            document.getElementById('eightRecordText22').innerText = eightRecord.text.substring(2995, 3125);
            document.getElementById('eightRecordText23').innerText = eightRecord.text.substring(3136, 3152);
            document.getElementById('eightRecordText24').innerText = eightRecord.text.substring(3163, 3341);
            document.getElementById('eightRecordText25').innerText = eightRecord.text.substring(3352, 3383);
            document.getElementById('eightRecordText26').innerText = eightRecord.text.substring(3394, 3562);
            document.getElementById('eightRecordText27').innerText = eightRecord.text.substring(3573, 3640);
            document.getElementById('eightRecordText28').innerText = eightRecord.text.substring(3651, 4171);
            document.getElementById('eightRecordText29').innerText = eightRecord.text.substring(4182, 4197);
            document.getElementById('eightRecordText30').innerText = eightRecord.text.substring(4208, 4653);
            document.getElementById('eightRecordText31').innerText = eightRecord.text.substring(4664, 4853);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog8();
};










function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
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
            <td><img src="data:image/jpeg;base64,${item.image3}" width="100" height="100"></td>
            <td><img src="data:image/jpeg;base64,${item.image4}" width="100" height="100"></td>
            <td><img src="data:image/jpeg;base64,${item.image5}" width="100" height="100"></td>
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

                fetch(`http://localhost:8181/ibg-infotech/auth/blog-data/${id}`, {
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
                        window.location.href = `Update-blog.html`;
                    })

                    .catch(error => {
                        console.error('Error fetching blog data:', error);
                    });
            });

            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                const id = deleteBtn.getAttribute('data-id');
                deleteBlog(id);
            });
        });

    } else {
        console.error('Data received is not an array:', data);
    }
}


// ------------------------------------delete the data------------------------------------------------------

function deleteBlog(id) {

    var jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'JWT token is missing. Please log in again.',
        });
        return;
    }


    fetch(`http://localhost:8181/ibg-infotech/auth/delete-blog/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.text();
        })
        .then(data => {

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Blog has been deleted successfully.',
            }).then(() => {

                location.reload();
            });
        })
        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete the blog. Please try again later.',
            });
        });
}


// -------------------------update the data by id----------------------------------


function updateData() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var text = CKEDITOR.instances['editor2'].getData();
    var imageFile1 = document.getElementById('image-input1').files[0];
    var imageFile2 = document.getElementById('image-input2').files[0];
    var imageFile3 = document.getElementById('image-input3').files[0];
    var imageFile4 = document.getElementById('image-input4').files[0];
    var imageFile5 = document.getElementById('image-input5').files[0];
    var jwtToken = localStorage.getItem('jwtToken');

    if (!name || !text) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    var formData = new FormData();
    formData.append('name', name);
    formData.append('text', text);

    if (imageFile1) {
        formData.append('image1', imageFile1);
    }
    if (imageFile2) {
        formData.append('image2', imageFile2);
    }
    if (imageFile3) {
        formData.append('image3', imageFile3);
    }
    if (imageFile4) {
        formData.append('image4', imageFile4);
    }
    if (imageFile5) {
        formData.append('image5', imageFile5);
    }

    // Send the update request to the server
    fetch(`http://localhost:8181/ibg-infotech/auth/update-blog/${id}`, {
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
            return response.text(); // Handle plain text response
        })
        .then(data => {
            console.log('Server response:', data);
            if (data.includes('updated successfully')) {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Data has been updated successfully.',
                }).then((result) => {
                    window.location.href = 'Blogs.html';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update data. ' + data,
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