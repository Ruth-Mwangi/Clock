function updateClock(){
    var d = new Date();
    var hour=d.getHours();
    var minute=d.getMinutes();

    if (minute<10){
        minute=('0'+minute);
    }
    var second=d.getSeconds();
    if (second<10){
        second=('0'+second);
    }
    var hourMinute=(hour+":"+minute+":"+second);
    $(".the-time").html(hourMinute);

}



$(document).ready(function(){

    
    setInterval('updateClock()',1000);

    $("#bulb").click(function(){
        $("#bulb").css("color","yellow")
    })


    
});