/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
getBoxes(randomNumber);*/

var score = 0, timer;
$(window).load(function () {

});
var randomNumber = getRandomInt(1,10);
getBoxes (randomNumber);

$(document).ready(function () {
    start();
});

function start() {
    $.extend($.fn.disableTextSelect = function () {
        return this.each(function () {
            if ($.browser.mozilla) {
                $(this).css('MozUserSelect', 'none');
            } else if ($.browser.msie) {
                $(this).bind('selectstart', function () {
                    return false;
                });
            } else {//Opera, etc.
                $(this).mousedown(function () {
                    return false;
                });
            }
        });
    });
   
    $('.number-box').disableTextSelect();
    $('#pausemsg').disableTextSelect();
    $('play').disableTextSelect();
    $('.refresh').disableTextSelect();
    $("#pause").hide();
    $("#pausemsg").hide();
    
    getBoxes();
    timer = window.setInterval(function () {
        getBoxes();
    }, 5000);
    
    $(".play").click(function () {
        timer = window.setInterval(function () {
            var rando = getRandomInt(1,10);
            getBoxes(rando);
        }, 5000);
        $(this).hide();
        $("#pause").show();
        $(".msgBack").fadeOut();
    });
    
    $("#pause").click(function () {
        clearTimeout(timer);
        $(this).hide();
        $(".play").show();
        $("#pausemsg").text("Game Paused!");
        $(".msgBack").fadeIn();
    });
    
    $(".refresh").click(function () {
        $(".grid").empty();
        setScore(0);
        clearTimeout(timer);
        timer = window.setInterval(function () {
            getBoxes();
        }, 5000);
        $(".play").show();
        $("#pause").hide();
        $(".msgBack").fadeOut();
    });
}

function setScore(randomNum) {
    score = randomNum;
    var highscore = $(".highScore").text();
    if (randomNum > highscore)
        $(".highScore").text(randomNum);
    $(".score").text(randomNum);
}

function reduceNum(box) {
    var num = $(box).text();
    num--;
    if (num > 0) {
        $(box).text(num);
        score++;
        setScore(score);
        changeColors(box, num);
    } else {
        $(box).remove();
        score += 5;
        setScore(score);
    }
}


function getBoxes(rand) {

    var boxes = [];
    for( var i = 0; i <rand; i++){
        col = $("#grid-" + getRandomInt());
        var box =  $("<div />", {class: "number-box"}).prependTo(col);
        box.hide();
        var randomNum = getRandomInt(1, 10);
        var boxNum = boxes.push(getRandomInt());
        
        if (boxes.indexOf(boxNum) > -1) {
          
        } else {
            
            //box.text(randomNum);
            
            $("<div />", {text: randomNum, class: "$(.btn) +randomNum"}).prependTo(box);
            box.show();
        }
        
    } 
    
    /*for( var i = 0; i <10; i++){
      if(col.contains(box)) {

      } 
      else{
          box.prependTo(col);
      }
  */
}
function  getRandomInt() {
    return (Math.floor(Math.random() * 10) + 1);
}




