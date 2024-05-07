$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


