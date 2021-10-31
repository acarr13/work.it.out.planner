$(document).ready(function () {
    function showCurrDay() {
        $("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));
    }
    showCurrDay();
    function comparetime() {
        var hour = parseInt(moment().hour());
        $(".text-input").each(function () {
            var hourSchedule = parseInt($(this).attr("id"));
            if (hourSchedule < hour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourSchedule == hour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        }
        );
    }
    comparetime();
    $(".saveBtn").on("click", function () {
        var UserInput = $(this).siblings(".text-input").val();
        var userTime = $(this).parent().attr("id");
        localStorage.setItem(userTime, UserInput);
    });
    $("#hour9 .text-input").val(localStorage.getItem("nine"));
    $("#hour10 .text-input").val(localStorage.getItem("ten"));
    $("#hour11 .text-input").val(localStorage.getItem("eleven"));
    $("#hour12 .text-input").val(localStorage.getItem("twelve"));
    $("#hour13 .text-input").val(localStorage.getItem("thirteen"));
    $("#hour14 .text-input").val(localStorage.getItem("fourteen"));
    $("#hour15 .text-input").val(localStorage.getItem("fifteen"));
    $("#hour16 .text-input").val(localStorage.getItem("sixteen"));
    $("#hour17 .text-input").val(localStorage.getItem("seventeen"));
});