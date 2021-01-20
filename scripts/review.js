$(document).ready(function(){
    var reviewed = false;
    var username;
    $("#revwriterating").on("input", function() {
        $("#revwrittenrating").html($(this).val());
        $("#revwrittencolor").removeClass("unknown");
        if ($(this).val() >= 80) {
            $("#revwrittencolor").removeClass("fine");
            $("#revwrittencolor").removeClass("bad");
            $("#revwrittencolor").addClass("good");
        } else if ($(this).val() >= 50) {
            $("#revwrittencolor").removeClass("good");
            $("#revwrittencolor").removeClass("bad");
            $("#revwrittencolor").addClass("fine");
        } else {
            $("#revwrittencolor").removeClass("good");
            $("#revwrittencolor").removeClass("fine");
            $("#revwrittencolor").addClass("bad");
        }
    });

    $("#submitbutton").click(function(){
        if ($("#writedesc").val().length > 0 && $("#revwrittenrating").text() != "?") {
            reviewed = true;
            $(".reviewbg").css({"display": "none"});
            $("#writedesc").val("");
            $("#revwriterating").val(50);
            $("#revwrittencolor").addClass("unknown");
            $("#revwrittenrating").html("?");
            $("#curr").html(0);
            $(".logneeded").html("Review's under moderation");
            $(".revdone").show();
            $(".revdone").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".revdone").fadeOut();
        } else if ($("#writedesc").val().length == 0 && $("#revwrittenrating").text() == "?") {
            $("#revwrittencolor").removeClass("unknown");
            $("#revwrittencolor").addClass("bad");
            $("#writedesc").css({"border-color": "red"});
        } else if ($("#writedesc").val().length == 0) {
            $("#writedesc").css({"border-color": "red"});
        } else {
            $("#revwrittencolor").removeClass("unknown");
            $("#revwrittencolor").addClass("bad");
        }
    });

    $("#writedesc").keyup(function() {
        var characterCount = $(this).val().length,
            current = $('#curr'),
            maximum = 150;
        
        $("#writedesc").css({"border-color": "black"});
        current.text(characterCount);   
    });

    $(".reviewbutton").click(function() {
        if (!reviewed && $(".login").html() != "LOG IN") {
            $(".reviewbg").css({"display": "flex"});
            $(".revusername").html($("#uname"));
        } else if ($(".login").html() == "LOG IN") {
            $(".logneeded").html("Log in first");
            $(".revdone").show();
            $(".revdone").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".revdone").fadeOut();
        } else {
            $(".logneeded").html("Already reviewed");
            $(".revdone").show();
            $(".revdone").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".revdone").fadeOut();
        }
    });

    $("#revclose").click(function(){
        $(".reviewbg").css({"display": "none"});
        $("#writedesc").val("");
        $("#revwriterating").val(50);
        $("#revwrittencolor").addClass("unknown");
        $("#revwrittenrating").html("?");
        $("#curr").html(0);
    });
});