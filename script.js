var mapletv_gifs = ["","img/bmedia1.gif","img/bmedia2.gif","img/bmedia3.gif","img/bmedia4.gif", "img/bmedia5.gif","img/bmedia6.gif"];
var mapletv_gifs2 = ["", "img/tmedia1.gif","img/tmedia2.gif","img/tmedia3.gif"];

var mapletv1 = setInterval(function(){
	$('#adv1').css('background-image', 'url("' + mapletv_gifs2[Math.floor((Math.random() * 3) + 1)] + '")');
}, 12000);
var mapletv2 = setInterval(function(){
	$('#adv2').css('background-image', 'url("' + mapletv_gifs[Math.floor((Math.random() * 6) + 1)] + '")');
}, 7000);

$('#toolbartext').text('Welcome to MapleStory! We are an Old School Maplestory Server V62. Dont forget to join our Discord channel for updates.');

setInterval(servertime, 1000);

function servertime() {
	const d = new Date();
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	$("#servertime").text(month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + ' ' + d.toLocaleTimeString());
}

function mo_open_menu() {
	$(".toolbar").show();
}