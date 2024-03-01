/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

  function updateOutput(outputID) {
    var htmlCode = $('#html-input'+outputID).val(); // Get HTML code from the input textarea
    $('#output'+outputID).html(htmlCode); // Set the HTML content of the output box
  }

  // Call updateOutput function on page load
  $(document).ready(function() {
    updateOutput();
  });

  // Call updateOutput function whenever the user types in the textarea
  $('#html-input1').on('input', function() {
    updateOutput(1);
  });

// Call updateOutput function whenever the user types in the textarea
$('#html-input2').on('input', function() {
    updateOutput(2);
});

// Call updateOutput function whenever the user types in the textarea
$('#html-input3').on('input', function() {
    updateOutput(3);
});

// Call updateOutput function whenever the user types in the textarea
$('#html-input4').on('input', function() {
    updateOutput(4);
});

$('#html-input5').on('input', function() {
    updateOutput(5);
});

