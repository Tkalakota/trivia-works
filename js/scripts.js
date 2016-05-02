$(document).ready(function() {

  var firstName = '';
  var playerAnswer1= '';
  var answer1= 'on fleek';
  var correctCounter= 0;
  var triesLeft= 3;
  var answer2= 'selfie';
  var answer3= 'kimkardashian';
  var answer4= 'caitlynjenner';
  var answer5= 'walkingdead';


  // FIRST NAME
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    firstName = $('#first-name').val();
    console.log(firstName);
    $('#show-player-name').text(firstName);
    $('#welcome-screen').addClass('animated fadeOut');
    setTimeout(removeWelcomeScreen, 1000);
  });
  // MIDDLE NAME
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    middleName = $('#middle-name').val();
    console.log(middleName);
    $('#show-player-name2').text(middleName);
   });
  // LAST NAME
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    lastName = $('#last-name').val();
    console.log(lastName);
    $('#show-player-name3').text(lastName);
  });
  // FIRST NAME START
  $('#first-name').focus();

  // REMOVE WELCOME SCREEN
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#show-player-name').show().addClass('animated fadeIn');
    $('#show-player-name2').show().addClass('animated fadeIn');
    $('#show-player-name3').show().addClass('animated fadeIn');
    $('.question1').show().addClass('animated fadeIn').focus();
	};

	// HIDE
	$('.question1').hide();
	$('.question2').hide();
	$('.question3').hide();
  $('.question4').hide();
  $('.question5').hide();
	$('.correct-msg1').hide();
	$('.incorrect-msg1').hide();
	$('.correct-msg2').hide();
	$('.incorrect-msg2').hide();
	$('.correct-msg3').hide();
	$('.incorrect-msg3').hide();
  $('.correct-msg4').hide();
  $('.incorrect-msg4').hide();
  $('.correct-msg5').hide();
  $('.incorrect-msg5').hide();
	$('#lose-game-msg').hide();
  $('#won-game-msg').hide();

	/*****************************************************
		QUESTION 1
	*****************************************************/

	// QUESTION 1 BUTTON
  $('#question1-btn').on('click', function(e) {
  	e.preventDefault();
  	playerAnswer1 = $('#input-question1').val().trim().toLowerCase();
  	console.log('The players answer for question 1 is ' + playerAnswer1);
  	answerCheck1();
  });

  // SHOWS ANSWERS
  function showPlayerAnswer1(){
  	$('#show-player-answer1').text(playerAnswer1);
  	$('#correct-answer1').text(answer1);
  };

  // FADE OUT FUNCTION
  function fadeOutAnswerCheckMsg() {
    $('.incorrect-msg1').removeClass('fadeIn').addClass('fadeOut');
  }; 

  function fadeOutQuestion1() {
    $('.question1').addClass('animated fadeOut');
    setTimeout($('.question1').detach(), 2500);
    $('.question2').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question1').addClass('animated fadeOut');
      $('.question1').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn');
    };
  };

  // CHECK ANSWER
  function answerCheck1() {
  	if(playerAnswer1 === answer1) {
  		console.log("Player's answer is correct");
  		$('.correct-msg1').show().addClass('animated fadeIn');
  		correctCounter++;
  		$('#show-player-score').text(correctCounter);
  		setTimeout(fadeOutQuestion1, 2500);
  	}
  	else {
  		console.log("Player's answer is Incorrect!");
  		$('.incorrect-msg1').show().addClass('animated fadeIn');
  		setTimeout(fadeOutAnswerCheckMsg, 2500);
      triesLeftCountdown();
  	}
  };

  /**********************************************************
	QUESTION 2 
  ***********************************************************/

  // QUESTION 2 BUTTON
  $('#question2-btn').on('click', function(e) {
  	e.preventDefault();
  	playerAnswer2 = $('#input-question2').val().trim().toLowerCase();
  	console.log('The players answer for question 2 is ' + playerAnswer2);
  	answerCheck2();

  });

  // SHOW ANSWERS 2
  function showPlayerAnswer2(){
  	$('#show-player-answer2').text(playerAnswer2);
  	$('#correct-answer2').text(answer2);
  };

  function fadeOutAnswerCheckMsg() {
    $('.incorrect-msg2').removeClass('fadeIn').addClass('fadeOut');
  }; 

  function fadeOutQuestion2() {
    $('.question2').addClass('animated fadeOut');
    setTimeout($('.question2').detach(), 2500);
    $('.question3').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question2').addClass('animated fadeOut');
      $('.question2').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn');
    };
  };

  // CHECK ANSWERS 2
  	function answerCheck2() {
  	if(playerAnswer2 === answer2) {
  		console.log("Player's answer is correct");
  		$('.correct-msg2').show().addClass('animated fadeIn');
  		correctCounter++;
  		$('#show-player-score').text(correctCounter);
  		setTimeout(fadeOutQuestion2, 2500);
  	}
  	else {
  		console.log("Player's answer is Incorrect!");
  		$('.incorrect-msg2').show().addClass('animated fadeIn');
  		setTimeout(fadeOutAnswerCheckMsg, 2500);
      triesLeftCountdown();
  	}
  }

  /*****************************************************
		QUESTION 3
	*****************************************************/

	// QUESTION 3 BUTTON
  $('#question3-btn').on('click', function(e) {
  	e.preventDefault();
  	playerAnswer3 = $('#input-question3').val().trim().toLowerCase();
  	console.log('The players answer for question 3 is ' + playerAnswer3);
  	answerCheck3();
  });

  // SHOW ANSWERS 3
  function showPlayerAnswer3(){
  	$('#show-player-answer3').text(playerAnswer3);
  	$('#correct-answer3').text(answer3);
  };

  function fadeOutAnswerCheckMsg() {
    $('.incorrect-msg3').removeClass('fadeIn').addClass('fadeOut');
  }; 

  function fadeOutQuestion3() {
    $('.question3').addClass('animated fadeOut');
    setTimeout($('.question3').detach(), 2500);
    $('.question4').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question3').addClass('animated fadeOut');
      $('.question3').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn');
    };
  };

  // CHECK ANSWERS 3
  	function answerCheck3() {
  	if(playerAnswer3 === answer3) {
  		console.log("Player's answer is correct");
  		$('.correct-msg3').show().addClass('animated fadeIn');
  		correctCounter++;
  		$('#show-player-score').text(correctCounter);
  		setTimeout(fadeOutQuestion3, 2500);
  	}
  	else {
  		console.log("Player's answer is Incorrect!");
  		$('.incorrect-msg3').show().addClass('animated fadeIn');
  		setTimeout(fadeOutAnswerCheckMsg, 2500);
      triesLeftCountdown();
  	}
  }

  /*****************************************************
    QUESTION 4
  *****************************************************/

  // QUESTION 4 BUTTON
  $('#question4-btn').on('click', function(e) {
    e.preventDefault();
    playerAnswer4 = $('#input-question4').val().trim().toLowerCase();
    console.log('The players answer for question 4 is ' + playerAnswer4);
    answerCheck4();
  });

  // SHOW ANSWERS 4
  function showPlayerAnswer4(){
    $('#show-player-answer4').text(playerAnswer4);
    $('#correct-answer4').text(answer4);
  };

  function fadeOutAnswerCheckMsg() {
    $('.incorrect-msg4').removeClass('fadeIn').addClass('fadeOut');
  }; 

  function fadeOutQuestion4() {
    $('.question4').addClass('animated fadeOut');
    setTimeout($('.question4').detach(), 2500);
    $('.question5').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question4').addClass('animated fadeOut');
      $('.question4').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn');
    };
  };

  // CHECK ANSWERS 4
    function answerCheck4() {
    if(playerAnswer4 === answer4) {
      console.log("Player's answer is correct");
      $('.correct-msg4').show().addClass('animated fadeIn');
      correctCounter++;
      $('#show-player-score').text(correctCounter);
      setTimeout(fadeOutQuestion4, 2500);
    }
    else {
      console.log("Player's answer is Incorrect!");
      $('.incorrect-msg4').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      triesLeftCountdown();
    }
  }

  /*****************************************************
    QUESTION 5
  *****************************************************/

  // QUESTION 5 BUTTON
  $('#question5-btn').on('click', function(e) {
    e.preventDefault();
    playerAnswer5 = $('#input-question5').val().trim().toLowerCase();
    console.log('The players answer for question 5 is ' + playerAnswer5);
    answerCheck5();
  });

  // SHOW ANSWERS 5
  function showPlayerAnswer5(){
    $('#show-player-answer5').text(playerAnswer5);
    $('#correct-answer5').text(answer5);
  };

  function fadeOutAnswerCheckMsg() {
    $('.incorrect-msg5').removeClass('fadeIn').addClass('fadeOut');
  }; 

  function fadeOutQuestion5() {
    $('.question5').addClass('animated fadeOut');
    setTimeout($('.question5').detach(), 2500);
    $('#won-game-msg').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question5').addClass('animated fadeOut');
      $('.question5').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn');
    };
  };

  // CHECK ANSWERS 5
    function answerCheck5() {
    if(playerAnswer5 === answer5) {
      console.log("Player's answer is correct");
      $('.correct-msg5').show().addClass('animated fadeIn');
      correctCounter++;
      $('#show-player-score').text(correctCounter);
      setTimeout(fadeOutQuestion5, 2500);
    }
    else {
      console.log("Player's answer is Incorrect!");
      $('.incorrect-msg5').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
      triesLeftCountdown();
    }
  }
});