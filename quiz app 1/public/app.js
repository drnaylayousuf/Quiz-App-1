
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzA_ezVFgiqYzh_0yYVK85eG3Dtcs8dcw",
    authDomain: "quiz-app-2-9b82e.firebaseapp.com",
    databaseURL: "https://quiz-app-2-9b82e-default-rtdb.firebaseio.com",
    projectId: "quiz-app-2-9b82e",
    storageBucket: "quiz-app-2-9b82e.appspot.com",
    messagingSenderId: "806003273359",
    appId: "1:806003273359:web:ed2fafa3fcdde0b6b2cafa"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  console.log(app.auth);
  // **********************8
  
  function displayResult() {
      clearInterval(timerInterval); // Stop the timer
      var percentage = (score / questions.length) * 100;
  
      var resultRef = database.ref('quizResults'); // Change 'quizResults' to a suitable path in your database
  
      // Push the user's result to the database
      resultRef.push({
          score: score,
          totalQuestions: questions.length,
          percentage: percentage.toFixed(2),
          timestamp: firebase.database.ServerValue.TIMESTAMP
      });
  
      // 
      // ...
  }
  
  
  // // Example code to read data from the 'quizResults' path
  // var resultRef = database.ref('quizResults');
  
  // resultRef.on('value', function(snapshot) {
  //     // Handle the snapshot data
  //     var results = snapshot.val();
  //     console.log(results);
  //     // Update your UI or perform other actions with the results
  // });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var questions = [
      {
          question:"HTML stands for",
          option1:"Hyper Text markup language",
          option2:"Hyper Link markup language",
          option3:"Hyper Text makeup language",
          correctAns:"Hyper Text markup language"
      },
      {
          question:"CSS stands for",
          option1:"Cascading Style sheet",
          option2:"Cascading Styling sheet",
          option3:"Cascading super sheet",
          correctAns:"Cascading Style sheet"
      },{
          question:"In how many ways can CSS be written in?",
          option1:"1",
          option2:"2",
          option3:"3",
          correctAns:"3"
      },{
          question:"Which tag gives your the largest heading in html",
          option1:"<h6>",
          option2:"<h2>",
          option3:"<h1>",
          correctAns:"<h1>"
      },{
          question:"how many data types in js?",
          option1:"6",
          option2:"7",
          option3:"8",
          correctAns:"8"
      }
      ,{
          question:"how many days in febuary",
          option1:"30",
          option2:"28",
          option3:"29",
          correctAns:"28"
      }]
      
  
  var para = document.getElementById("ques");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var button = document.getElementById("btn");
  var time = document.getElementById("timer");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 59;
  var timerInterval;
  
  
  function startTimer() {
      min = 1;
      sec = 59;
      if (timerInterval) {
          clearInterval(timerInterval); // Clear the previous timer if it exists
      }
      timerInterval = setInterval(function () {
          time.innerHTML = `${min}:${sec}`;
          sec--;
          if (sec < 0) {
              min--;
              sec = 59;
          }
  
          if (min < 0) {
              clearInterval(timerInterval);
              if (index < questions.length) {
                  nextQuestion();
              }
          }
      }, 1000);
  }
  
  function nextQuestion() {
  
      var getOptions = document.getElementsByName("options");
  
      for (var i = 0; i < getOptions.length; i++) {
          if (getOptions[i].checked) {
              var selectedValue = getOptions[i].value;
              var selectedQues = questions[index - 1]["question"];
              var selectedAns = questions[index - 1][`option${selectedValue}`];
              var correctAns = questions[index - 1]["correctAns"];
              if (selectedAns == correctAns) {
                  score++;
              }
          }
          getOptions[i].checked = false;
      }
  
      button.disabled = true;
  
      if (index >= questions.length) {
          displayResult();
      } else {
          para.innerHTML = questions[index].question;
          opt1.innerText = questions[index].option1;
          opt2.innerText = questions[index].option2;
          opt3.innerText = questions[index].option3;
          index++;
          startTimer(); // Start the timer for the new question
      }
  }
  
  function displayResult() {
      clearInterval(timerInterval); // Stop the timer
      var percentage = (score / questions.length) * 100;
  
      if (percentage >= 90) {
          Swal.fire(
              'Excellent!',
              `Your percentage is ${percentage.toFixed(2)}%. You are an expert!`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else if (percentage >= 70) {
          Swal.fire(
              'Great Job!',
              `Your percentage is ${percentage.toFixed(2)}%. You have a strong knowledge.`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else if (percentage >= 50) {
          Swal.fire(
              'Good Effort!',
              `Your percentage is ${percentage.toFixed(2)}%. You're on the right track.`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else {
          Swal.fire(
              'Keep Learning',
              `Your percentage is ${percentage.toFixed(2)}%. You can improve your knowledge. Keep learning!`,
              'info'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      }
  }
  
  function showGoodLuckImage() {
      var goodLuckImage = document.getElementById("goodLuckImage");
      goodLuckImage.style.display = "block";
  }
  
  function clicked() {
      button.disabled = false;
      startTimer(); // Start the timer when the button is clicked
  }
  
  // Initial start of the timer when the page loads
  startTimer();
  
  

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzA_ezVFgiqYzh_0yYVK85eG3Dtcs8dcw",
    authDomain: "quiz-app-2-9b82e.firebaseapp.com",
    databaseURL: "https://quiz-app-2-9b82e-default-rtdb.firebaseio.com",
    projectId: "quiz-app-2-9b82e",
    storageBucket: "quiz-app-2-9b82e.appspot.com",
    messagingSenderId: "806003273359",
    appId: "1:806003273359:web:ed2fafa3fcdde0b6b2cafa"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  console.log(app.auth);
  // **********************8
  
  function displayResult() {
      clearInterval(timerInterval); // Stop the timer
      var percentage = (score / questions.length) * 100;
  
      var resultRef = database.ref('quizResults'); // Change 'quizResults' to a suitable path in your database
  
      // Push the user's result to the database
      resultRef.push({
          score: score,
          totalQuestions: questions.length,
          percentage: percentage.toFixed(2),
          timestamp: firebase.database.ServerValue.TIMESTAMP
      });
  
      // 
      // ...
  }
  
  
  // // Example code to read data from the 'quizResults' path
  // var resultRef = database.ref('quizResults');
  
  // resultRef.on('value', function(snapshot) {
  //     // Handle the snapshot data
  //     var results = snapshot.val();
  //     console.log(results);
  //     // Update your UI or perform other actions with the results
  // });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var questions = [
      {
          question:"HTML stands for",
          option1:"Hyper Text markup language",
          option2:"Hyper Link markup language",
          option3:"Hyper Text makeup language",
          correctAns:"Hyper Text markup language"
      },
      {
          question:"CSS stands for",
          option1:"Cascading Style sheet",
          option2:"Cascading Styling sheet",
          option3:"Cascading super sheet",
          correctAns:"Cascading Style sheet"
      },{
          question:"In how many ways can CSS be written in?",
          option1:"1",
          option2:"2",
          option3:"3",
          correctAns:"3"
      },{
          question:"Which tag gives your the largest heading in html",
          option1:"<h6>",
          option2:"<h2>",
          option3:"<h1>",
          correctAns:"<h1>"
      },{
          question:"how many data types in js?",
          option1:"6",
          option2:"7",
          option3:"8",
          correctAns:"8"
      }
      ,{
          question:"how many days in febuary",
          option1:"30",
          option2:"28",
          option3:"29",
          correctAns:"28"
      }]
      
  
  var para = document.getElementById("ques");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var button = document.getElementById("btn");
  var time = document.getElementById("timer");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 59;
  var timerInterval;
  
  
  function startTimer() {
      min = 1;
      sec = 59;
      if (timerInterval) {
          clearInterval(timerInterval); // Clear the previous timer if it exists
      }
      timerInterval = setInterval(function () {
          time.innerHTML = `${min}:${sec}`;
          sec--;
          if (sec < 0) {
              min--;
              sec = 59;
          }
  
          if (min < 0) {
              clearInterval(timerInterval);
              if (index < questions.length) {
                  nextQuestion();
              }
          }
      }, 1000);
  }
  
  function nextQuestion() {
  
      var getOptions = document.getElementsByName("options");
  
      for (var i = 0; i < getOptions.length; i++) {
          if (getOptions[i].checked) {
              var selectedValue = getOptions[i].value;
              var selectedQues = questions[index - 1]["question"];
              var selectedAns = questions[index - 1][`option${selectedValue}`];
              var correctAns = questions[index - 1]["correctAns"];
              if (selectedAns == correctAns) {
                  score++;
              }
          }
          getOptions[i].checked = false;
      }
  
      button.disabled = true;
  
      if (index >= questions.length) {
          displayResult();
      } else {
          para.innerHTML = questions[index].question;
          opt1.innerText = questions[index].option1;
          opt2.innerText = questions[index].option2;
          opt3.innerText = questions[index].option3;
          index++;
          startTimer(); // Start the timer for the new question
      }
  }
  
  function displayResult() {
      clearInterval(timerInterval); // Stop the timer
      var percentage = (score / questions.length) * 100;
  
      if (percentage >= 90) {
          Swal.fire(
              'Excellent!',
              `Your percentage is ${percentage.toFixed(2)}%. You are an expert!`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else if (percentage >= 70) {
          Swal.fire(
              'Great Job!',
              `Your percentage is ${percentage.toFixed(2)}%. You have a strong knowledge.`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else if (percentage >= 50) {
          Swal.fire(
              'Good Effort!',
              `Your percentage is ${percentage.toFixed(2)}%. You're on the right track.`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else {
          Swal.fire(
              'Keep Learning',
              `Your percentage is ${percentage.toFixed(2)}%. You can improve your knowledge. Keep learning!`,
              'info'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      }
  }
  
  function showGoodLuckImage() {
      var goodLuckImage = document.getElementById("goodLuckImage");
      goodLuckImage.style.display = "block";
  }
  
  function clicked() {
      button.disabled = false;
      startTimer(); // Start the timer when the button is clicked
  }
  
  // Initial start of the timer when the page loads
  startTimer();
  
  

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzA_ezVFgiqYzh_0yYVK85eG3Dtcs8dcw",
    authDomain: "quiz-app-2-9b82e.firebaseapp.com",
    databaseURL: "https://quiz-app-2-9b82e-default-rtdb.firebaseio.com",
    projectId: "quiz-app-2-9b82e",
    storageBucket: "quiz-app-2-9b82e.appspot.com",
    messagingSenderId: "806003273359",
    appId: "1:806003273359:web:ed2fafa3fcdde0b6b2cafa"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  console.log(app.auth);
  // **********************8
  
  function displayResult() {
      clearInterval(timerInterval); // Stop the timer
      var percentage = (score / questions.length) * 100;
  
      var resultRef = database.ref('quizResults'); // Change 'quizResults' to a suitable path in your database
  
      // Push the user's result to the database
      resultRef.push({
          score: score,
          totalQuestions: questions.length,
          percentage: percentage.toFixed(2),
          timestamp: firebase.database.ServerValue.TIMESTAMP
      });
  
      // 
      // ...
  }
  
  
  // // Example code to read data from the 'quizResults' path
  // var resultRef = database.ref('quizResults');
  
  // resultRef.on('value', function(snapshot) {
  //     // Handle the snapshot data
  //     var results = snapshot.val();
  //     console.log(results);
  //     // Update your UI or perform other actions with the results
  // });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var questions = [
      {
          question:"HTML stands for",
          option1:"Hyper Text markup language",
          option2:"Hyper Link markup language",
          option3:"Hyper Text makeup language",
          correctAns:"Hyper Text markup language"
      },
      {
          question:"CSS stands for",
          option1:"Cascading Style sheet",
          option2:"Cascading Styling sheet",
          option3:"Cascading super sheet",
          correctAns:"Cascading Style sheet"
      },{
          question:"In how many ways can CSS be written in?",
          option1:"1",
          option2:"2",
          option3:"3",
          correctAns:"3"
      },{
          question:"Which tag gives your the largest heading in html",
          option1:"<h6>",
          option2:"<h2>",
          option3:"<h1>",
          correctAns:"<h1>"
      },{
          question:"how many data types in js?",
          option1:"6",
          option2:"7",
          option3:"8",
          correctAns:"8"
      }
      ,{
          question:"how many days in febuary",
          option1:"30",
          option2:"28",
          option3:"29",
          correctAns:"28"
      }]
      
  
  var para = document.getElementById("ques");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var button = document.getElementById("btn");
  var time = document.getElementById("timer");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 59;
  var timerInterval;
  
  
  function startTimer() {
      min = 1;
      sec = 59;
      if (timerInterval) {
          clearInterval(timerInterval); // Clear the previous timer if it exists
      }
      timerInterval = setInterval(function () {
          time.innerHTML = `${min}:${sec}`;
          sec--;
          if (sec < 0) {
              min--;
              sec = 59;
          }
  
          if (min < 0) {
              clearInterval(timerInterval);
              if (index < questions.length) {
                  nextQuestion();
              }
          }
      }, 1000);
  }
  
  function nextQuestion() {
  
      var getOptions = document.getElementsByName("options");
  
      for (var i = 0; i < getOptions.length; i++) {
          if (getOptions[i].checked) {
              var selectedValue = getOptions[i].value;
              var selectedQues = questions[index - 1]["question"];
              var selectedAns = questions[index - 1][`option${selectedValue}`];
              var correctAns = questions[index - 1]["correctAns"];
              if (selectedAns == correctAns) {
                  score++;
              }
          }
          getOptions[i].checked = false;
      }
  
      button.disabled = true;
  
      if (index >= questions.length) {
          displayResult();
      } else {
          para.innerHTML = questions[index].question;
          opt1.innerText = questions[index].option1;
          opt2.innerText = questions[index].option2;
          opt3.innerText = questions[index].option3;
          index++;
          startTimer(); // Start the timer for the new question
      }
  }
  
  function displayResult() {
      clearInterval(timerInterval); // Stop the timer
      var percentage = (score / questions.length) * 100;
  
      if (percentage >= 90) {
          Swal.fire(
              'Excellent!',
              `Your percentage is ${percentage.toFixed(2)}%. You are an expert!`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else if (percentage >= 70) {
          Swal.fire(
              'Great Job!',
              `Your percentage is ${percentage.toFixed(2)}%. You have a strong knowledge.`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else if (percentage >= 50) {
          Swal.fire(
              'Good Effort!',
              `Your percentage is ${percentage.toFixed(2)}%. You're on the right track.`,
              'success'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      } else {
          Swal.fire(
              'Keep Learning',
              `Your percentage is ${percentage.toFixed(2)}%. You can improve your knowledge. Keep learning!`,
              'info'
          ).then(() => {
              showGoodLuckImage(); // Show the "good luck" image
          });
      }
  }
  
  function showGoodLuckImage() {
      var goodLuckImage = document.getElementById("goodLuckImage");
      goodLuckImage.style.display = "block";
  }
  
  function clicked() {
      button.disabled = false;
      startTimer(); // Start the timer when the button is clicked
  }
  
  // Initial start of the timer when the page loads
  startTimer();
  
  
      