/****Geography Trivia Game by Nathan Perfetti 4-12-18 **********/

//Begin by importing Question Set JSON
var quiz = [
    {
    "question": "How many federal states does Germany have?",
    "correct_answer": "16",
    "options": [
    "13",
    "32",
    "25"
    ]},
    {
    "question": "What colour is the circle on the Japanese flag?",
    "correct_answer" : "Red",
    "options": [
    "White",
    "Yellow",
    "Black"]},
    {
    "question": "What is the capital of Jamaica?",
    "correct_answer": "Kingston",
    "options": [
    "Rio de Janeiro",
    "Dar es Salaam",
    "Kano"]},
    {
    "question": "What is the capital of the US State of New York?",
    "correct_answer": "Albany",
    "options": [
    "Buffalo",
    "New York",
    "Rochester"]},
    {
    "question": "Which country is the home of the largest Japanese population outside of Japan?",
    "correct_answer": "Brazil",
    "options": [
    "China",
    "Russia",
    "The United States"
    ]
    },
    {
    "question": "How many countries does Mexico border?",
    "correct_answer": "3",
    "options": [
    "2",
    "4",
    "1"
    ]
    },
    {
    "question": "Which of the following Japanese islands is the biggest?",
    "correct_answer": "Honshu",
    "options": [
    "Hokkaido",
    "Shikoku",
    "Kyushu"
    ]
    },
    {
    "question": "What is the capital of India?",
    "correct_answer": "New Delhi",
    "options": [
    "Bejing",
    "Montreal",
    "Tithi"
    ]
    },
    {
    "question": "What is the smallest country in the world?",
    "correct_answer": "Vatican City",
    "options": [
    "Maldives",
    "Monaco",
    "Malta",
    "Vatican City"
    ]
    },
    {
    "question": "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
    "correct_answer": "Sri Lanka",
    "options": [
    "Kiribati",
    "Scotland",
    "Bhutan",
    "Sri Lanka"
    ]
    }];


var timer;
 
//Define Game function
var game = {

 //Initial Variables
 totalCorrect : 0,
 totalIncorrect :0,
 totalUnanswered : 0,
 totalTime:120,
 
 //console.log(game.totalTime);
 

endGame :function(){
    //endgame logic
},
countDown :function(){
   game.totalTime--;
   $("#counter-number").html(game.totalTime);
   console.log(game.totalTime);
   if(game.totalTime === 0){
       endGame();
   }
},//End countDown
start:function(){
    //Start Quiz Time
    console.log(game.totalTime)
    timer = setInterval(game.countDown,1000);
    console.log(timer);
    $("#timerDiv").prepend("<h2>Total Time Left:<span id='counter-number'>120</span></h2>");
    //forlopp 

    //Hide Previous Landing Page
    $("#startGame").hide();
},
 
}//End game

 var startGame = function(){
     game.start();
 }//End startGame



//  $("document").ready(function(){




//  });



    