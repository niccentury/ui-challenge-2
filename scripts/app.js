'use strict';

// Creating header text
let h1 = $('<h1>').text('UI Challenge - Custom Form Elements');
$('header').append(h1);
//Creating input boxes
// let input = $('<input type = text, id = userText, name = uText1>');
// $('.input1').append(input);
$('.input1').prepend('<p>', 'text input');