var sentence=prompt("Enter your details");
console.log(sentence);

var me=sentence.charAt(0);
var you=sentence.slice(-1);
var us= me.concat(you);
var them= us.toUpperCase();
var ours= (you+ me).toUpperCase();
var text=sentence.concat(ours);
var count=sentence.length;
var divide=(count)/2;
var output=sentence.charAt(divide);
var words=output.concat(sentence);
var cool=words.split("").reverse().join("");
jQuery("img#classy").click(function(){
  alert(sentence);
});
jQuery("img#cool").click(function(){
   alert(words);
});
