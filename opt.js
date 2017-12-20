var initialDate = new Date();
var lastDate = new Date();
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
$("#tabs").addClass("disabledbutton");
$(function () {
    $("#graduationDatePicker").datepicker({
        showButtonPanel: true,
        onSelect: function () {
            initialDate = $("#graduationDatePicker").datepicker("getDate");
            initialDate.setDate(initialDate.getDate() + 1);
            lastDate = $("#graduationDatePicker").datepicker("getDate");
            lastDate.setDate(lastDate.getDate() + 61);
            //console.log("initialDate = "+initialDate);
            //console.log("lastDate = "+lastDate);
            $("#startDatePicker").datepicker("option", "minDate", initialDate);
            $("#startDatePicker").datepicker("option", "maxDate", lastDate);
            $("#tabs").removeClass("disabledbutton");
        }
    });
});
$(function () {
    $("#startDatePicker").datepicker({
        numberOfMonths: 1,
        onSelect: function () {
            var submitDate = $("#startDatePicker").datepicker("getDate");
            submitDate.setDate(submitDate.getDate() - 90);
            $("#submitDate22").text(monthNamesFull[submitDate.getMonth()] + " " + submitDate.getDate() + ", " + submitDate.getFullYear());
            submitDate.setDate(submitDate.getDate() - 21);
            $("#submitDate21").text(monthNamesFull[submitDate.getMonth()] + " " + submitDate.getDate() + ", " + submitDate.getFullYear());
        }
    });
});
$(function () {
    $("#tabs").tabs();
});
$(function () {
    var handle = $("#custom-handle");
    $("#slider").slider({
        range: "max",
        min: 1,
        max: 61,
        value: 1,
        create: function () {
            var val = $(this).slider("value");
            var effectiveDate = new Date(initialDate.getTime());
            effectiveDate.setDate(effectiveDate.getDate() + val);
            handle.text(monthNames[effectiveDate.getMonth()] + " " + effectiveDate.getDate());
        },
        slide: function (event, ui) {
            var val = ui.value;
            var effectiveDate = new Date(initialDate.getTime());
            effectiveDate.setDate(effectiveDate.getDate() + val);
            handle.text(monthNames[effectiveDate.getMonth()] + " " + effectiveDate.getDate());
            var submitDate = new Date(effectiveDate.getTime());
            submitDate.setDate(submitDate.getDate() - 90);
            $("#submitDate12").text(monthNamesFull[submitDate.getMonth()] + " " + submitDate.getDate() + ", " + submitDate.getFullYear());
            submitDate.setDate(submitDate.getDate() - 21);
            $("#submitDate11").text(monthNamesFull[submitDate.getMonth()] + " " + submitDate.getDate() + ", " + submitDate.getFullYear());
        }
    });
    $('#slider .ui-slider-handle').text('Slide').css({width:70,'text-align': 'center'});
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}