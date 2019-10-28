

function bussen() {
    var bus = $("#bus").position();
    var houseOne = $("#houseOne").position();
    var houseTwo = $("#houseTwo").position();
    var houseThree = $("#houseThree").position();
    var houseFour = $("#houseFour").position();
    var a = houseOne.left - bus.left;
    var d = houseTwo.left - bus.left;
    var m = houseThree.left - bus.left;
    var h = houseFour.left - bus.left;
    

    if (a < 250 && a > 0) {
       
       $("#skiltOne").fadeIn();
    } else {
        $("#skiltOne").fadeOut();
    }

    if (d < 250 && d > 0) {
       
        $("#skiltTwo").fadeIn();
    } else {
        $("#skiltTwo").fadeOut();
    }

    if (m < 250 && m > 0) {
        $("#skiltThree").fadeIn();
    } else {
        $("#skiltThree").fadeOut();
    }

    if (h < 250 && h > 0) {
       
        $("#skiltFour").fadeIn();
    } else {
        $("#skiltFour").fadeOut();
    }

}


//Funktions timer
$(document).ready(function () {
    bussen();
})


//Når dokumentet er klart starter et interval der er sat til "40" sec (det samme tid som bussen
// tager om at køre hen over skærmen). Når de 40 sec er gået kører den de 3 funktioner igen, og
// intervallet starter forfra igen.

$(document).ready(function () {
    setInterval(function () {
        bussen();
    }, 100);
})


// // Funktionen er sat til at tælle fra siden bliver loaded. Med FadeInAndOutOne fader "skiltOne"  ind når der
// //  er gået 6 sekunder, og forsvinder når der er gået 12 sekunder. FadeInAndOutTwo gør at "skiltTwo" fader ind når 
// // der er gået 15 sec, og ud når der er gået 21. FadeInAndOutThree får "skiltThree" til at fade ind når der er gået
// // 23 sec, og ude igen når der er gået 29 sec.
// // Det kunne være ideelt at få skiltene til at fade ind når bussen var X px fra skiltets position, men hvordan?


// function FadeInAndOutOne()
// {
//     setTimeout(function () {
//         $('#skiltOne').fadeIn();
//     }, 6000);
    
//     setTimeout(function(){
//         $('#skiltOne').fadeOut();
//     }, 12000)

// }

// function FadeInAndOutTwo()
// {
//     setTimeout(function () {
//         $('#skiltTwo').fadeIn();
//     }, 15000);
    
//     setTimeout(function(){
//         $('#skiltTwo').fadeOut();
//     }, 21000)

// }

// function FadeInAndOutThree()
// {
//     setTimeout(function () {
//         $('#skiltThree').fadeIn();
//     }, 23000);
    
//     setTimeout(function(){
//         $('#skiltThree').fadeOut();
//     }, 29000)

// }

// // Dette afsnit gør at når dokumentet er klart, begynder de ovenstående funktioner at køre.

// $(document).ready(function(){
//     FadeInAndOutOne();
//     FadeInAndOutTwo();
//     FadeInAndOutThree();
// })


// //Når dokumentet er klart starter et interval der er sat til 40 sec (det samme tid som bussen
// // tager om at køre hen over skærmen). Når de 40 sec er gået kører den de 3 funktioner igen, og
// // intervallet starter forfra igen.

// $(document).ready(function(){
//     setInterval(function(){ 
//         FadeInAndOutOne();
//         FadeInAndOutTwo();
//         FadeInAndOutThree();
//     }, 40000);
// })



// /* $(document).ready(function () {
//     timeoutHandleOne = setTimeout(function () {
//         $('#skiltOne').fadeIn();
//     }, 6000);
// });

// $(document).ready(function () {
//     setTimeout(function(){
//         $('#skiltOne').fadeOut();
//     }, 12000)
// });

// $(document).ready(function () {
//     timeoutHandleTwo = setTimeout(function () {
//         $('#skiltTwo').fadeIn();
//     }, 15000);
//     setTimeout(function(){
//         $('#skiltTwo').fadeOut();
//     }, 21000)
// });

// $(document).ready(function () {
//     timeoutHandleThree = setTimeout(function () {
//         $('#skiltThree').fadeIn();
//     }, 23000);
//     setTimeout(function(){
//         $('#skiltThree').fadeOut();
//     }, 29000)
// });


// clearTimeout(timeoutHandleOne);
// clearTimeout(timeoutHandleTwo);
// clearTimeout(timeoutHandleThree); */


// /* $(document).ready(function(){
//     FadeInAndOutTwo();
// })

// $(document).ready(function(){
//     FadeInAndOutThree();
// }) */