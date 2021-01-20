$(document).ready(function(){
    $("#menuicon").click(function(){
        var x = $(".smallmenu");
        if (x.css("display") === "none") {
            x.css("display", "block");
        } else {
            x.css("display", "none");
        }
    });

    $(".thumbnail").animate({"opacity": "1"}, 700);

    $(".coverwrap").animate({"opacity": "1"}, 700);

    $("h1").animate({"opacity": "1"}, 700);

    $("h2").animate({"opacity": "1"}, 700);

    $(".nextl").animate({"opacity": "1"}, 700);

    $(".nextr").animate({"opacity": "1"}, 700);

    $("#closead").click(function(){
        $(".mobilead").hide();
    });

    $(".menu_item").mouseenter(function(){
        $(this).css({"transform": "scale(1.1)", "transition": "transform .3s ease"});
    });

    $(".menulink").mouseenter(function(){
        $(this).css({"color": "#ffcc34"});
    });

    $(".menu_item").mouseleave(function(){
        $(this).css({"transform": "scale(1)", "transition": "transform .3s ease"});
    });

    $(".menulink").mouseleave(function(){
        $(this).css({"color": "#fff"});
    });

    $(".selected").mouseleave(function(){
        $(this).css({"color": "#ffcc34"});
    });

    $(".smallmenu_item").mouseenter(function(){
        $(this).css({"transform": "scale(1.1)", "transition": "transform .3s ease", "color": "#ffcc34"});
    });

    $(".smallmenu_item").mouseleave(function(){
        $(this).css({"transform": "scale(1)", "transition": "transform .3s ease", "color": "#ffffff"});
    });

    $(".game").mouseenter(function(){
        $(this).css({"transform": "scale(1.05)", "transition": "transform .3s ease"});

    });

    $(".game").mouseleave(function(){
        $(this).css({"transform": "scale(1)", "transition": "transform .3s ease"});

    });

    $(".button").mouseenter(function(){
        $(this).css({"transform": "scale(1.03)", "transition": "transform .3s ease"});

    });

    $(".button").mouseleave(function(){
        $(this).css({"transform": "scale(1)", "transition": "transform .3s ease"});
    });

    $(".thx").click(function(){
        $(this).html("Thanked!");
        $(this).css({"color": "#cf1b6f", "cursor": "default"});
    });

    $(".whereBuy").click(function(){
        $(".mapbg").css({"display": "flex"});
    });

    $("#mapclose").click(function(){
        $(".mapbg").css({"display": "none"});
    });



    $(".login").click(function(){
        var text = $(this).text();
        $(".smallmenu").css("display", "none");
        if (text == "LOG IN") {
            $(".loginbg").css({"display": "flex"});
        } else {
            $(".login").text("LOG IN");
            $("#uname").html("");
        }
    });

    $("#loginclose").click(function(){
        $(".loginbg").css({"display": "none"});
        $("#loginusername").val("");
        $("#loginpass").val("");
    });

    $("#signupclose").click(function(){
        $("#signupemail").val("");
        $("#loginusername").val("");
        $("#signuppass1").val("");
        $("#signuppass2").val("");
        $(".gender").prop("checked", false);
        $(".signupbg").css({"display": "none"});
    });

    $("#loginbutton").click(function(){
        var username = $("#loginusername").val();
        var pass = $("#loginpass").val();
        if (username && pass && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(pass)) {
            $(".loginbg").css({"display": "none"});
            $("#loginusername").val("");
            $("#loginpass").val("");
            $(".login").text("LOG OUT");
            $("#uname").html(username);
            $(".logmessage").text("Welcome back, ");
            $(".logdone").show();
            $(".logdone").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".logdone").fadeOut();
        } else if (!username) {
            alert("Please, write your username");
        } else if (!pass) {
            alert("Please, write your password");
        }
    });

    $("#signuplink").click(function(){
        $("#loginusername").val("");
        $("#loginpass").val("");
        $(".loginbg").css({"display": "none"});
        $(".signupbg").css({"display": "flex"});
    })

    $("#signupbutton").click(function(){
        username = $("#signupusername").val();
        var email = $("#signupemail").val();
        var pass1 = $("#signuppass1").val();
        var pass2 = $("#signuppass2").val();
        if (username && email && pass1 === pass2 && $(".gender").is(":checked") && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(pass1)) {
            log[username] = pass1;
            $("#signupemail").val("");
            $("#signupusername").val("");
            $("#signuppass1").val("");
            $("#signuppass2").val("");
            $(".gender").prop("checked", false);
            $("#loginusername").val(username);
            $(".signupbg").css({"display": "none"});
            $("#uname").html("");
            $(".logmessage").html("Registration completed");
            $(".logdone").show();
            $(".logdone").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".logdone").fadeOut();
        } else if (!email) {
            alert("Please, write your email");
        } else if (!username) {
            alert("Please, write your username");
        } else if (!pass1) {
            alert("Please, write your password");
        } else if (!pass2) {
            alert("Please, confirm your password");
        } else if (pass1 !== pass2) {
            alert("Passwords don't match");
        } else if (!$(".gender").is(":checked")) {
            alert("Please, select your gender");
        }
    });

    $("#loginlink").click(function(){
        $("#signupemail").val("");
        $("#signupusername").val("");
        $("#signuppass1").val("");
        $("#signuppass2").val("");
        $(".gender").prop("checked", false);
        $(".signupbg").css({"display": "none"});
        $(".loginbg").css({"display": "flex"});
    })

    $('#scrollmr1').click(function() {
        event.preventDefault();
        $('#scrollm1').animate({
        scrollLeft: "+=1280px"
        }, 900);
    });

    $('#scrollml1').click(function() {
        event.preventDefault();
        $('#scrollm1').animate({
        scrollLeft: "-=1280px"
        }, 900);
    });

    $('#scrollmr2').click(function() {
        event.preventDefault();
        $('#scrollm2').animate({
        scrollLeft: "+=1280px"
        }, 900);
    });

    $('#scrollml2').click(function() {
        event.preventDefault();
        $('#scrollm2').animate({
        scrollLeft: "-=1280px"
        }, 900);
    });

    $('#scrollmr3').click(function() {
        event.preventDefault();
        $('#scrollm3').animate({
        scrollLeft: "+=1280px"
        }, 900);
    });

    $('#scrollml3').click(function() {
        event.preventDefault();
        $('#scrollm3').animate({
        scrollLeft: "-=1280px"
        }, 900);
    });

    $('#scrollmr4').click(function() {
        event.preventDefault();
        $('#scrollm4').animate({
        scrollLeft: "+=1212px"
        }, 900);
    });

    $('#scrollml4').click(function() {
        event.preventDefault();
        $('#scrollm4').animate({
        scrollLeft: "-=1212px"
        }, 900);
    });

    $('#scrollmr5').click(function() {
        event.preventDefault();
        $('#scrollm5').animate({
        scrollLeft: "+=700px"
        }, 900);
    });

    $('#scrollml5').click(function() {
        event.preventDefault();
        $('#scrollm5').animate({
        scrollLeft: "-=700px"
        }, 900);
    });

    $('#scrollmr6').click(function() {
        event.preventDefault();
        $('#scrollm6').animate({
        scrollLeft: "+=800px"
        }, 900);
    });

    $('#scrollml6').click(function() {
        event.preventDefault();
        $('#scrollm6').animate({
        scrollLeft: "-=800px"
        }, 900);
    });
});