// Paste the code from Firebase 
var config = {
 apiKey: "AIzaSyBE20BkozpbqsLP0QQBqNkOSUB86bWY_sk",
    authDomain: "ncut007-e9656.firebaseapp.com",
    databaseURL: "https://ncut007-e9656.firebaseio.com",
    projectId: "ncut007-e9656",
    storageBucket: "ncut007-e9656.appspot.com",
    messagingSenderId: "948507786563"
  
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});