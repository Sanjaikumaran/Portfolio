$(document).ready(
    function () {
        $(".option").click(
            function (event) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        );
    });