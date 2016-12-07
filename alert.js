var i=0;  // ряд вертикальный
var n=5;  // ряд горизонтальный
var time = 500; // время падения
var chekRevers = false; // состояние реверса
var poin=0; // переменная для подсчета очков
var point = document.getElementById('points'); //  расположение переменной для очков
point.innerHTML = poin // меняем текст на странице на 0
var keyleft; // переменная для ввода с клавиатуры ЛЕВО
var keyright; // переменная для ввода с клавиатуры ПРАВО
var keyrevers; // переменная для ввода с клавиатуры РЕВЕРС
var keyunRevers; // переменная для ввода с клавиатуры АНРЕВЕРС
var space; // переменная для ввода с клавиатуры ПРОБЕЛ - СКОРОСТЬ
keyleft = function onclick(event) {linetwo.left();}  // устанавливаем начальные  функции для клавиатуры
keyright = function onclick(event) {linetwo.right();}
keyrevers = function onclick(event) {linetwo.revers();}
keyunRevers = function onclick(event) {linetwo.unRevers();}
keyspaceup = function onclick(event) {intervalId1 = setInterval(goLinetwo,time)}

// Фигурка 1

function linetwo() {  // фигурка OO

var one = document.getElementById(i).children[n]; // нахождение первого кубика
var two = document.getElementById(i).children[n+1]; // нахождение второго первого кубика

this.start = function() { // если функция работает то красим первый и второй кубик синим учитывая реверс
if (chekRevers == false) {
one = document.getElementById(i).children[n]; 
two = document.getElementById(i).children[n+1];
document.getElementById(i-1).children[n].style.backgroundColor="white"; // убираем ненужное
document.getElementById(i-1).children[n+1].style.backgroundColor="white";
}
if (chekRevers == true) {
one = document.getElementById(i).children[n]; 
two = document.getElementById(i+1).children[n];
document.getElementById(i-1).children[n].style.backgroundColor="white";

}

one.style.backgroundColor="blue"; 
two.style.backgroundColor="blue"; 

}

this.revers = function() {   // тут делаем реверс
chekRevers = true;
one = document.getElementById(i).children[n].style.backgroundColor="blue";
two = document.getElementById(i+1).children[n].style.backgroundColor="blue"; 
document.getElementById(i).children[n+1].style.backgroundColor="white";
 }
 
this.unRevers = function() { // тут делаем анреверс
chekRevers = false;
one = document.getElementById(i).children[n].style.backgroundColor="blue";
two = document.getElementById(i).children[n+1].style.backgroundColor="blue"; 
document.getElementById(i+1).children[n].style.backgroundColor="white";
 }

this.left = function () {  // тут налево С УЧЕТОМ РЕВЕРСОВ
if (n==0) {return}
if (chekRevers == true) {
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
document.getElementById(i+1).children[n-1].style.backgroundColor="blue";
n=n-1;
}

if (chekRevers == false) {
document.getElementById(i).children[n+1].style.backgroundColor="white";
document.getElementById(i).children[n].style.backgroundColor="blue";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
n=n-1;
}

}


this.right = function () { // тут направо С УЧЕТОМ РЕВЕРСОВ

if (chekRevers == true) {if (n==13) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+1].style.backgroundColor="blue";
document.getElementById(i+1).children[n+1].style.backgroundColor="blue";
n=n+1;
}

if (chekRevers == false) {if (n==12) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+1].style.backgroundColor="blue";
document.getElementById(i).children[n+2].style.backgroundColor="blue";
n=n+1;
}

}

}

var linetwo = new linetwo();

function goLinetwo() {   // запускаем функцию для фигуры 1
i=i+1;  
linetwo.start() // показываем фигуру 1
if (i==14 && chekRevers == false) { // если фигура внизу то перезапускаем функцию с учетом реверса
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
 }
 
if (i==13 && chekRevers == true) { // если фигура внизу то перезапускаем функцию с учетом реверса
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
 }

if (chekRevers == true && document.getElementById(i+2).children[n].style.backgroundColor == 'blue') {// если фигура костулась другую перезапускаем функцию с учетом реверса
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

if (chekRevers == false && document.getElementById(i+1).children[n+1].style.backgroundColor == 'blue') { // если фигура костулась другую перезапускаем функцию с учетом реверса
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

if (chekRevers == false && document.getElementById(i+1).children[n].style.backgroundColor == 'blue') { // если фигура костулась другую перезапускаем функцию с учетом реверса
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}
 
 }
 
 // --------------------------------------------------------- |||||| -----------------------------------------------------------------
 
 // фигура 2
 
 function cub() {  // фигурка OO
                       //     OO             

var one = document.getElementById(i).children[n]; // нахождение первого кубика
var two = document.getElementById(i).children[n+1]; // нахождение второго первого кубика
var three = document.getElementById(i+1).children[n]; // нахождение третьего первого кубика
var four = document.getElementById(i+1).children[n+1]; // нахождение четвертого первого кубика

this.start = function() { // если функция работает то красим первый и второй кубик синим

one = document.getElementById(i).children[n]; 
two = document.getElementById(i).children[n+1];
three = document.getElementById(i+1).children[n];
four = document.getElementById(i+1).children[n+1];
document.getElementById(i-1).children[n].style.backgroundColor="white";
document.getElementById(i-1).children[n+1].style.backgroundColor="white";
one.style.backgroundColor="blue"; 
two.style.backgroundColor="blue"; 
three.style.backgroundColor="blue"; 
four.style.backgroundColor="blue"; 

}


this.left = function () {
if (n==0) {return}
document.getElementById(i).children[n+1].style.backgroundColor="white";
document.getElementById(i+1).children[n+1].style.backgroundColor="white";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
document.getElementById(i+1).children[n-1].style.backgroundColor="blue";
n=n-1;
}


this.right = function () {
if (n==12) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+2].style.backgroundColor="blue";
document.getElementById(i+1).children[n+2].style.backgroundColor="blue";
n=n+1;

}

}

var cub = new cub();

function goCub() {
i=i+1;
cub.start();

 
if (i==13) {
clearInterval(intervalId1);
i=0; n=5;
randomFigur();
checkLine();
 }

if (document.getElementById(i+2).children[n].style.backgroundColor == 'blue' || document.getElementById(i+2).children[n+1].style.backgroundColor == 'blue') {
clearInterval(intervalId1);
i=0; n=5;
randomFigur();
checkLine();
}
 
 }
 
 // ----------------------------------------------------------------|| ------------------------------------------------------------------------------
 
 
 function lineThree() {  // фигурка OO
                       //            O

var one = document.getElementById(i).children[n]; // нахождение первого кубика
var two = document.getElementById(i).children[n+1]; // нахождение второго первого кубика
var tree = document.getElementById(i+1).children[n+1]; // нахождение второго первого кубика

this.start = function() { // если функция работает то красим первый и второй кубик синим

if (chekRevers == false) {
one = document.getElementById(i).children[n]; 
two = document.getElementById(i).children[n+1];
tree = document.getElementById(i+1).children[n+1];
document.getElementById(i-1).children[n].style.backgroundColor="white";
document.getElementById(i-1).children[n+1].style.backgroundColor="white";
}
if (chekRevers == true) {
one = document.getElementById(i).children[n]; 
two = document.getElementById(i+1).children[n];
tree = document.getElementById(i+1).children[n+1];
document.getElementById(i-1).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+1].style.backgroundColor="white";

}

one.style.backgroundColor="blue"; 
two.style.backgroundColor="blue"; 
tree.style.backgroundColor="blue"; 

}

this.revers = function() {
chekRevers = true;
one = document.getElementById(i).children[n].style.backgroundColor="blue";
two = document.getElementById(i+1).children[n].style.backgroundColor="blue"; 
tree = document.getElementById(i+1).children[n+1].style.backgroundColor="blue"; 
document.getElementById(i).children[n+1].style.backgroundColor="white";
 }
 
this.unRevers = function() {
chekRevers = false;
one = document.getElementById(i).children[n].style.backgroundColor="blue";
two = document.getElementById(i).children[n+1].style.backgroundColor="blue"; 
tree = document.getElementById(i+1).children[n+1].style.backgroundColor="blue";
document.getElementById(i+1).children[n].style.backgroundColor="white";
 }

this.left = function () {
if (n==0) {return}
if (chekRevers == true) {
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n+1].style.backgroundColor="white";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
document.getElementById(i+1).children[n-1].style.backgroundColor="blue";
n=n-1;
}

if (chekRevers == false) {
document.getElementById(i).children[n+1].style.backgroundColor="white";
document.getElementById(i+1).children[n+1].style.backgroundColor="white";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
document.getElementById(i+1).children[n].style.backgroundColor="blue";
n=n-1;
}

}


this.right = function () {

if (chekRevers == true) {if (n==12) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+1].style.backgroundColor="blue";
document.getElementById(i+1).children[n+2].style.backgroundColor="blue";
n=n+1;
}

if (chekRevers == false) {if (n==12) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n+1].style.backgroundColor="white";
document.getElementById(i).children[n+2].style.backgroundColor="blue";
document.getElementById(i+1).children[n+2].style.backgroundColor="blue";
n=n+1;
}

}

}

var lineThree = new lineThree();

function golineThree() {
i=i+1;
lineThree.start()
if (i==13 && chekRevers == false) {
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
 }
 
if (i==13 && chekRevers == true) { 
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
 }

if (chekRevers == true && document.getElementById(i+2).children[n].style.backgroundColor == 'blue') {
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

if (chekRevers == true && document.getElementById(i+2).children[n+1].style.backgroundColor == 'blue') {
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

if (chekRevers == false && document.getElementById(i+1).children[n].style.backgroundColor == 'blue') { 
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

if (chekRevers == false && document.getElementById(i+2).children[n+1].style.backgroundColor == 'blue') { 
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}
 
 }
 
 
 // -------------------------------------------------------------------|| -----------------------------------------------------------------------
 
 function lineThreeLine() {  // фигурка OOO


var one = document.getElementById(i).children[n]; // нахождение первого кубика
var two = document.getElementById(i).children[n+1]; // нахождение второго первого кубика
var tree = document.getElementById(i).children[n+2]; // нахождение второго первого кубика

this.start = function() { // если функция работает то красим первый и второй кубик синим

if (chekRevers == false) {
one = document.getElementById(i).children[n]; 
two = document.getElementById(i).children[n+1];
tree = document.getElementById(i).children[n+2];
document.getElementById(i-1).children[n].style.backgroundColor="white";
document.getElementById(i-1).children[n+1].style.backgroundColor="white";
document.getElementById(i-1).children[n+2].style.backgroundColor="white";
}
if (chekRevers == true) {
one = document.getElementById(i).children[n]; 
two = document.getElementById(i+1).children[n];
tree = document.getElementById(i+2).children[n];
document.getElementById(i-1).children[n].style.backgroundColor="white";

}

one.style.backgroundColor="blue"; 
two.style.backgroundColor="blue"; 
tree.style.backgroundColor="blue"; 

}

this.revers = function() {
if (n > 11) {return}
chekRevers = true;
one = document.getElementById(i).children[n].style.backgroundColor="blue";
two = document.getElementById(i+1).children[n].style.backgroundColor="blue"; 
tree = document.getElementById(i+2).children[n].style.backgroundColor="blue"; 
document.getElementById(i).children[n+1].style.backgroundColor="white";
document.getElementById(i).children[n+2].style.backgroundColor="white";

 }
 
this.unRevers = function() {
if (n > 11) {return}
chekRevers = false;

one = document.getElementById(i).children[n].style.backgroundColor="blue";
two = document.getElementById(i).children[n+1].style.backgroundColor="blue"; 
tree = document.getElementById(i).children[n+2].style.backgroundColor="blue";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i+2).children[n].style.backgroundColor="white";

 }

this.left = function () {
if (n==0) {return}
if (chekRevers == true) {
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i+2).children[n].style.backgroundColor="white";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
document.getElementById(i+1).children[n-1].style.backgroundColor="blue";
document.getElementById(i+2).children[n-1].style.backgroundColor="blue";
n=n-1;
}

if (chekRevers == false) {
document.getElementById(i).children[n+2].style.backgroundColor="white";
document.getElementById(i).children[n-1].style.backgroundColor="blue";
n=n-1;
}

}


this.right = function () {

if (chekRevers == true) {if (n==13) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i+1).children[n].style.backgroundColor="white";
document.getElementById(i+2).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+1].style.backgroundColor="blue";
document.getElementById(i+1).children[n+1].style.backgroundColor="blue";
document.getElementById(i+2).children[n+1].style.backgroundColor="blue";
n=n+1;
}

if (chekRevers == false) {if (n==11) {return}
document.getElementById(i).children[n].style.backgroundColor="white";
document.getElementById(i).children[n+3].style.backgroundColor="blue";
n=n+1;
}

}

}

var lineThreeLine = new lineThreeLine();

function golineThreeLine() {
i=i+1;
lineThreeLine.start()

if (i==14 && chekRevers == false) {
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
 }
 
if (i==12 && chekRevers == true) { 
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
 }

if (chekRevers == true && document.getElementById(i+3).children[n].style.backgroundColor == 'blue') {
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

if (chekRevers == false && (document.getElementById(i+1).children[n].style.backgroundColor == 'blue' || document.getElementById(i+1).children[n+1].style.backgroundColor == 'blue' || document.getElementById(i+1).children[n+2].style.backgroundColor == 'blue')) {
clearInterval(intervalId1);
i=0; n=5;
chekRevers = false;
randomFigur();
checkLine();
}

 
 }
 
 
 // ------------------------------------------------------------------- || -----------------------------------------------------------------------

function checkLine() {  // проверка на полную линию
var arr=[]; var arr1=[];var arr2=[];var arr3=[];var arr4=[];var arr5=[];var arr6=[];var arr7=[];var arr8=[];var arr9=[];var arr10=[];var arr11=[];var arr12=[];var arr13=[];var arrdelete=[];// новый массив для проверки
for(a=0; a<14;a++) { if (document.getElementById(14).children[a].style.backgroundColor == 'blue') {arr.push(a) }}
for(b=0; b<14;b++) { if (document.getElementById(13).children[b].style.backgroundColor == 'blue') {arr1.push(b)} }
for(c=0; c<14;c++) { if (document.getElementById(12).children[c].style.backgroundColor == 'blue') {arr2.push(c)} }
for(d=0; d<14;d++) { if (document.getElementById(11).children[d].style.backgroundColor == 'blue') {arr3.push(d)} }
for(q=0; q<14;q++) { if (document.getElementById(10).children[q].style.backgroundColor == 'blue') {arr4.push(q)} }
for(w=0; w<14;w++) { if (document.getElementById(9).children[w].style.backgroundColor == 'blue') {arr5.push(w)} }
for(e=0; e<14;e++) { if (document.getElementById(8).children[e].style.backgroundColor == 'blue') {arr6.push(e)} }
for(r=0; r<14;r++) { if (document.getElementById(7).children[r].style.backgroundColor == 'blue') {arr7.push(r)} }
for(t=0; t<14;t++) { if (document.getElementById(6).children[t].style.backgroundColor == 'blue') {arr8.push(t)} }
for(y=0; y<14;y++) { if (document.getElementById(5).children[y].style.backgroundColor == 'blue') {arr9.push(y)} }
for(u=0; u<14;u++) { if (document.getElementById(4).children[u].style.backgroundColor == 'blue') {arr10.push(u)} }
for(g=0; g<14;g++) { if (document.getElementById(3).children[g].style.backgroundColor == 'blue') {arr11.push(g)} }
for(o=0; o<14;o++) { if (document.getElementById(2).children[o].style.backgroundColor == 'blue') {arr12.push(o)} }
for(p=0; p<14;p++) { if (document.getElementById(1).children[p].style.backgroundColor == 'blue') {arr13.push(p)} }

if (arr.length == 14) {arrdelete.push(14);};
if (arr1.length == 14) {arrdelete.push(13)};
if (arr2.length == 14) {arrdelete.push(12)};
if (arr3.length == 14) {arrdelete.push(11)};
if (arr4.length == 14) {arrdelete.push(10)};
if (arr5.length == 14) {arrdelete.push(9)};
if (arr6.length == 14) {arrdelete.push(8)};
if (arr7.length == 14) {arrdelete.push(7)};
if (arr8.length == 14) {arrdelete.push(6)};
if (arr9.length == 14) {arrdelete.push(5)};
if (arr10.length == 14) {arrdelete.push(4)};
if (arr11.length == 14) {arrdelete.push(3)};
if (arr12.length == 14) {arrdelete.push(2)};
if (arr13.length == 14) {arrdelete.push(1)};

if (arrdelete.length > 0) {for (v=0; v<arrdelete.length; v++) {poin+=10;point.innerHTML = poin;document.getElementById(arrdelete[v]).remove(); var table = document.getElementById('table'); var row = table.insertRow(0); row.height="20px"; var cell1 = row.insertCell(0); cell1.height="20px";var cell2 = row.insertCell(1); cell2.height="20px";var cell3 = row.insertCell(2); cell3.height="20px";var cell4 = row.insertCell(3); cell4.height="20px";var cell5 = row.insertCell(4); cell5.height="20px";var cell6 = row.insertCell(5); cell6.height="20px";var cell7 = row.insertCell(6); cell7.height="20px";var cell8 = row.insertCell(7); cell8.height="20px";var cell9 = row.insertCell(8); cell9.height="20px";var cell10 = row.insertCell(9); cell10.height="20px";var cell11 = row.insertCell(10); cell11.height="20px";var cell12 = row.insertCell(11); cell12.height="20px";var cell13 = row.insertCell(12); cell13.height="20px";var cell14 = row.insertCell(13); cell14.height="20px";};
for(m=0; m<=14;m++) {table.rows[m].id= m};arrdelete=[];
}

if (i=1 && (document.getElementById(i+1).children[n].style.backgroundColor == 'blue' || document.getElementById(i+1).children[n+1].style.backgroundColor == 'blue' || document.getElementById(i+1).children[n-1].style.backgroundColor == 'blue')) {clearInterval(intervalId1);alert ('game over');return;}
}
var j = 3;var max = 3; // для рандома
function randomFigur() { // функция рандома



switch (j) {
  
  case 0:
    intervalId1 = setInterval(golineThree,time); // запускаем при условии J
	keyspaceup = function onclick(event) {intervalId1 = setInterval(golineThree,time)}
	document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false; // сбрасываем кнопку реверса на стандарт
	var but1 = document.getElementById('button2');
	but1.onclick = function onclick(event) {lineThree.revers();document.getElementById('button2').hidden=true;document.getElementById('button3').hidden=false;} // меняем кнопку реверса в зависимости от нажатия
	keyrevers = function onclick(event) {lineThree.revers();} // не забываем про клавиатуру на реверс
	var but2 = document.getElementById('button3');
	but2.onclick = function onclick(event) {lineThree.unRevers();document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;} // меняем кнопку реверса в зависимости от нажатия
	keyunRevers = function onclick(event) {lineThree.unRevers();} // не забываем про клавиатуру на анреверс
	var but3 = document.getElementById('button4');
	but3.onclick = function onclick(event) {lineThree.left();} // устанавливаем текущее ЛЕВО
	keyleft = function onclick(event) {lineThree.left();} // клавиатура ЛЕВО
	var but4 = document.getElementById('button5');
	but4.onclick = function onclick(event) {lineThree.right();} // устанавливаем текущее ПРАВО
	keyright = function onclick(event) {lineThree.right();} // клавиатура ПРАЛЕВО
    break;
 
 case 1:
    intervalId1 = setInterval(goLinetwo,time);
	keyspaceup = function onclick(event) {intervalId1 = setInterval(goLinetwo,time)}
	document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;
	var but1 = document.getElementById('button2');
	but1.onclick = function onclick(event) {linetwo.revers();document.getElementById('button2').hidden=true;document.getElementById('button3').hidden=false;}
	keyrevers = function onclick(event) {linetwo.revers();}
	var but2 = document.getElementById('button3');
	but2.onclick = function onclick(event) {linetwo.unRevers();document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;}
	keyunRevers = function onclick(event) {linetwo.unRevers();}
	var but3 = document.getElementById('button4');
	but3.onclick = function onclick(event) {linetwo.left();}
	keyleft = function onclick(event) {linetwo.left();}
	var but4 = document.getElementById('button5');
	but4.onclick = function onclick(event) {linetwo.right();}
	keyright = function onclick(event) {linetwo.right();}
	
    break;

  case 2:
  
    intervalId1 = setInterval(goCub,time);
	keyspaceup = function onclick(event) {intervalId1 = setInterval(goCub,time)}
	document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;
	var but1 = document.getElementById('button2');
	but1.onclick = function onclick(event) {document.getElementById('button2').hidden=true;document.getElementById('button3').hidden=false;}
	keyrevers = function onclick(event) {};
	var but2 = document.getElementById('button3');
	but2.onclick = function onclick(event) {document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;}
	keyunRevers = function onclick(event) {}
	var but3 = document.getElementById('button4');
	but3.onclick = function onclick(event) {cub.left();}
	keyleft = function onclick(event) {cub.left();}
	var but4 = document.getElementById('button5');
	but4.onclick = function onclick(event) {cub.right();}
    keyright = function onclick(event) {cub.right();}
    break;
	
  case 3:

    intervalId1 = setInterval(golineThreeLine,time);
	keyspaceup = function onclick(event) {intervalId1 = setInterval(golineThreeLine,time)}
	document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;
	var but1 = document.getElementById('button2');
	but1.onclick = function onclick(event) {lineThreeLine.revers();document.getElementById('button2').hidden=true;document.getElementById('button3').hidden=false;}
	keyrevers = function onclick(event) {lineThreeLine.revers();}
	var but2 = document.getElementById('button3');
	but2.onclick = function onclick(event) {lineThreeLine.unRevers();document.getElementById('button3').hidden=true;document.getElementById('button2').hidden=false;}
	keyunRevers = function onclick(event) {lineThreeLine.unRevers();}
	var but3 = document.getElementById('button4');
	but3.onclick = function onclick(event) {lineThreeLine.left();}
	keyleft = function onclick(event) {lineThreeLine.left();}
	var but4 = document.getElementById('button5');
	but4.onclick = function onclick(event) {lineThreeLine.right();}
	keyright = function onclick(event) {lineThreeLine.right();}
   
   break;


}
j = Math.round (Math.random() * max);
if (j==0) {var img0 = document.getElementById('button8'); // меняем следующий элемент на странцице в зависимости от j
	img0.src = 'three.png';
}

if (j==1) { var img1 = document.getElementById('button8');
	img1.src = 'two.png';
}

if (j==2) {	var img2 = document.getElementById('button8');
	img2.src = 'cube.png';
}

if (j==3) {	var img3 = document.getElementById('button8');
	img3.src = 'three_line.png';
}




}