(function ($) {
    "use strict"; // Start of use strict

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });

})(jQuery); // End of use strict

// Modal Javascript

$(document).ready(function () {
    $("#myBtn").click(function () {
        $('.modal').modal('show');
    });

    $("#modalLong").click(function () {
        $('.modal').modal('show');
    });

    $("#modalScroll").click(function () {
        $('.modal').modal('show');
    });

    $('#modalCenter').click(function () {
        $('.modal').modal('show');
    });
});

// Popover Javascript

// $(function () {
//     $('[data-toggle="popover"]').popover()
// });
// $('.popover-dismiss').popover({
//     trigger: 'focus'
// });


// // Version in Sidebar

// var version = document.getElementById('version-ruangadmin');

// version.innerHTML = "Version 1.1";

$(document).ready(function () {


    $('.select2-single').select2();

    // Select2 Single  with Placeholder
    $('.select2-single-placeholder').select2({
        placeholder: "Select a Province",
        allowClear: true
    });

    // Select2 Multiple
    $('.select2-multiple').select2();

    // Bootstrap Date Picker
    // $('#simple-date1 .input-group.date').datepicker({
    //     format: 'dd/mm/yyyy',
    //     todayBtn: 'linked',
    //     todayHighlight: true,
    //     autoclose: true,
    // });

    // $('#simple-date2 .input-group.date').datepicker({
    //     startView: 1,
    //     format: 'dd/mm/yyyy',
    //     autoclose: true,
    //     todayHighlight: true,
    //     todayBtn: 'linked',
    // });

    // $('#simple-date3 .input-group.date').datepicker({
    //     startView: 2,
    //     format: 'dd/mm/yyyy',
    //     autoclose: true,
    //     todayHighlight: true,
    //     todayBtn: 'linked',
    // });

    // $('#simple-date4 .input-daterange').datepicker({
    //     format: 'dd/mm/yyyy',
    //     autoclose: true,
    //     todayHighlight: true,
    //     todayBtn: 'linked',
    // });

    // TouchSpin

    $('#touchSpin1').TouchSpin({
        min: 0,
        max: 100,
        boostat: 5,
        maxboostedstep: 10,
        initval: 0
    });

    $('#touchSpin2').TouchSpin({
        min: 0,
        max: 100,
        decimals: 2,
        step: 0.1,
        postfix: '%',
        initval: 0,
        boostat: 5,
        maxboostedstep: 10
    });

    $('#touchSpin3').TouchSpin({
        min: 0,
        max: 100,
        initval: 0,
        boostat: 5,
        maxboostedstep: 10,
        verticalbuttons: true,
    });

    $('#clockPicker1').clockpicker({
        donetext: 'Done'
    });

    $('#clockPicker2').clockpicker({
        autoclose: true
    });

    let input = $('#clockPicker3').clockpicker({
        autoclose: true,
        'default': 'now',
        placement: 'top',
        align: 'left',
    });

    $('#check-minutes').click(function (e) {
        e.stopPropagation();
        input.clockpicker('show').clockpicker('toggleView', 'minutes');
    });

});
