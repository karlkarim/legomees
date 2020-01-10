function kustuta(){
	var t=document.getElementById("tahvel").getContext("2d");
	t.clearRect(0, 0, 300, 200);
}

function joonistaKiiver(){
	var t=document.getElementById("tahvel").getContext("2d");
	t.beginPath();
	t.arc(150, 30, 20, 0, Math.PI, true); //x, y -keskpunkt, R-raadius
	t.moveTo(130,30);
	t.lineTo(130,40);
	t.lineTo(140,50);
	t.lineTo(160,50);
	t.lineTo(170,40);
	t.lineTo(170,30);
	
	t.stroke();
	t.fillStyle="black";
	t.fillRect(130, 25,40 ,7);
	
	
	joonistaKiiver2();

}

function joonistaKiiver2(){
	var t=document.getElementById("tahvel").getContext("2d");
	t.beginPath();
	t.arc(150, 50, 10, 0, Math.PI, true);
	t.moveTo(145,50);
	t.lineTo(145,41);
	t.moveTo(150,50);
	t.lineTo(150,41);
	t.moveTo(155,50);
	t.lineTo(155,41);
	
	t.stroke();
	
}

function joonistaKeha(){
	
	var t=document.getElementById("tahvel").getContext("2d");
	t.beginPath();
	t.arc(150, 70, 20, 0, Math.PI, true);
	
	t.moveTo(130,70);
	t.lineTo(130,100);
	t.moveTo(170,100);
	t.lineTo(170,70);
	t.moveTo(150,50);
	t.lineTo(150,90)
	
	
	t.stroke();
	
	t.fillStyle="black";
	t.fillRect(130, 90, 40 ,10);
	
}

function joonistaJalad(){

	var t=document.getElementById("tahvel").getContext("2d");

	t.moveTo(130, 100);
	t.lineTo(120, 150);
	t.lineTo(140, 150);
	t.lineTo(145, 115);
	t.lineTo(155,115);
	t.lineTo(160, 150);
	t.lineTo(180,150);
	t.lineTo(170,100);

	t.stroke();

}
function joonistaKaed(){

	var t=document.getElementById("tahvel").getContext("2d");

	// parem käsi

	t.moveTo(162, 55);
	t.lineTo(190, 45);

	t.moveTo(168, 62);
	t.lineTo(195, 52);

	t.moveTo(196, 50);
	t.lineTo(205, 30);

	t.moveTo(189, 45);
	t.lineTo(198, 27);

	t.moveTo(198, 27);
	t.lineTo(205, 30);

	//vasak käsi

	t.moveTo(136, 55);
	t.lineTo(110, 74);

	t.moveTo(130, 69);
	t.lineTo(110, 83);

	t.moveTo(109, 75);
	t.lineTo(85, 75);

	t.moveTo(110, 83);
	t.lineTo(85, 83);

	t.moveTo(85, 75);
	t.lineTo(85, 83);

	// parem kinnas

	t.moveTo(202, 28);
	t.lineTo(204, 24);

	// vasak kinnas

	t.moveTo(85, 79);
	t.lineTo(80,79);


	t.stroke();
	kyynarnukk1();
	kyynarnukk2();
	kinnas1();
	kinnas2();
}

function kyynarnukk1(){

	var t=document.getElementById("tahvel").getContext("2d");

	t.beginPath();
	t.arc(192, 49, 4, 0, 2*Math.PI, true);
	

	t.stroke();

}
function kyynarnukk2(){

	var t=document.getElementById("tahvel").getContext("2d");

	t.beginPath();
	
	t.arc(109, 79, 4, 0, 2*Math.PI, true);

	t.stroke();

}

function kinnas1(){

	var t=document.getElementById("tahvel").getContext("2d");

	t.beginPath();
	
	t.arc(204, 20, 4, 0, Math.PI, false);

	t.stroke();
}

function kinnas2(){

	var t=document.getElementById("tahvel").getContext("2d");

	t.beginPath();
	
	t.arc(76, 79, 4, 0, 90, 180);

	t.stroke();
}


