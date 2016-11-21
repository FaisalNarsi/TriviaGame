 // 1- TIMER FOR 1 MIN
 // 2- FUCNTION/IF STATEMENT THAT WILL DISPLAY CORRECT 
 //    ANSWERS AND WRONG ANSWERS TOWARDS THE END.
 // 3- 

// timer function is called ctimeounter
var correctAnswers = [0,3,2,2,1,2];  
var chosenAnswers = [];
var counter = 10000;
var wins;
var losses;


function timeCounter(){
 	getElementById("question").push(chosenAnswers);
 }

timeCounter();

if (correctAnswers == chosenAnswers) {
	document.html("wins++");
	else (correctAnswers != chosenAnswers); 
		document.html("losses--");
}

// set up array of specific questions
// 