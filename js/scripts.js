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

  function updateOutput() {
    var htmlCode = $('#html-input').val(); // Get HTML code from the input textarea
    $('#output').html(htmlCode); // Set the HTML content of the output box
  }

  // Call updateOutput function on page load
  $(document).ready(function() {
    updateOutput();
  });

  // Call updateOutput function whenever the user types in the textarea
  $('#html-input').on('input', function() {
    updateOutput();
  });

    function addHelloWorld() {
        var textArea = document.getElementById('html-input');
        textArea.value += '<p>Hello World</p>';
        updateOutput()
    }
 
        document.getElementById("searchInput").addEventListener("input", function() {
            var input, filter, dropdownMenu, items, a, i;
            input = this.value.toUpperCase();
            dropdownMenu = document.querySelector(".dropdown-menu");
            items = dropdownMenu.querySelectorAll(".dropdown-item");
            
            for (i = 0; i < items.length; i++) {
                a = items[i];
                if (a.textContent.toUpperCase().indexOf(input) > -1) {
                    a.style.display = "";
                } else {
                    a.style.display = "none";
                }
            }
        });
