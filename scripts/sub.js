$(document).ready(function(){
    var subbed = false;

    $(".button").click(function(){
        if (!subbed) {
            $(".subbg").css({"display": "flex"});
        }
        else {
            $(".message").html("Already subscribed");
            $(".done").show();
            $(".done").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".done").fadeOut();
        }
    });

    $("#subclose").click(function(){
        $(".subbg").css({"display": "none"});
        $("#emailsub").val("");
        $("#emailsub").css({"border-color": "#ffcc34"});
        $("#emailsub").removeClass("red");
    });

    $("#subbutton").click(function(){
        var email = $("#emailsub").val();
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
            subbed = true;
            $(".done").show();
            $(".done").animate({"opacity": 1, bottom: "+=50px"}, 700).delay(1000).animate({"opacity": 0, bottom: "-=50px"}, 700);
            $(".done").delay(1000).fadeOut();
            $(".subbg").css({"display": "none"});
            $("#emailsub").val("");
            $("#emailsub").css({"border-color": "#ffcc34"});
            $("#emailsub").removeClass("red");
        } else if (!email) {
            $("#emailsub").css({"border-color": "red"});
            $("#emailsub").addClass("red");
        }
    });
});