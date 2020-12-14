
let select = document.getElementById('selectbtn');
let again = document.getElementById('again');
let result = document.getElementById('result');
let input = document.getElementById('input');
let startbtn = document.getElementById('start');
let mainbtn = document.getElementById('main');
let welcome = document.getElementById('welcome');
let copyRight= document.getElementById('copyRight');

let playerOne = document.getElementById('player_name');
let computer = document.getElementById('computer');

let name = '';
let player = '';
let playertwo= '';

let player_rock= document.getElementById('player_img_rock');
let player_paper= document.getElementById('player_img_paper');
let player_scissors= document.getElementById('player_img_scissors');

let computer_rock= document.getElementById('computer_img_rock');
let computer_paper= document.getElementById('computer_img_paper');
let computer_scissors= document.getElementById('computer_img_scissors');


let start= () => {
	input.style.display= 'none';
	startbtn.style.display= 'none';
	playerOne.style.display= 'inherit';
	select.style.display= 'inherit';
	welcome.style.display= 'none';
	copyRight.style.display= 'none';

	if(input.value === '') { 
		playerOne.innerHTML='You'
	} else {
		playerOne.innerHTML=input.value;
	};
}



let play = () => {
	

	if (select.options[select.selectedIndex].innerHTML === 'Rock') {
		player = 'rock'
	} else if (select.options[select.selectedIndex].innerHTML === 'Paper') {
		player = 'paper'
	} else if (select.options[select.selectedIndex].innerHTML === 'Scissors') {
		player = 'scissors'
	};




	playertwo = Math.floor(Math.random() * 3 + 1);

	switch (playertwo) {
		case 1:
			playertwo = 'rock';
			break;
		case 2:
			playertwo = 'paper';
			break;
		case 3:
			playertwo = 'scissors';
			break;
	}




function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
	}

name = playerOne.innerHTML;

	if (playertwo === 'rock' && player === 'scissors') {
		result.innerHTML='Player Two win.';
		result.style.display= 'inherit';
		player_scissors.style.display='inherit';
		computer.style.display= 'inherit';
		computer_rock.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'rock' && player === 'paper') {
		result.innerHTML= name + ' win.';
		result.style.display= 'inherit';
		player_paper.style.display='inherit';
		computer.style.display= 'inherit';
		computer_rock.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'paper' && player === 'scissors') {
		result.innerHTML= name + ' win.';
		result.style.display= 'inherit';
		player_scissors.style.display='inherit';
		computer.style.display= 'inherit';
		computer_paper.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'paper' && player === 'rock') {
		result.innerHTML='Player Two win.';
		result.style.display= 'inherit';
		player_rock.style.display='inherit';
		computer.style.display= 'inherit';computer_paper.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'scissors' && player === 'rock') {
		result.innerHTML= name + ' win.';
		result.style.display= 'inherit';
		player_rock.style.display='inherit';
		computer.style.display= 'inherit';
		computer_scissors.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'scissors' && player === 'paper') {
		result.innerHTML='Player Two win.'
		result.style.display= 'inherit';
		player_paper.style.display='inherit';
		computer.style.display= 'inherit';
		computer_scissors.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'scissors' && player === 'scissors') {
		result.innerHTML='Draw';
		result.style.display= 'inherit';
		player_scissors.style.display='inherit';
		computer.style.display= 'inherit';
		computer_scissors.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit'
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'paper' && player === 'paper') {
		result.innerHTML='Draw';
		result.style.display= 'inherit';
		player_paper.style.display='inherit';
		computer.style.display= 'inherit';
		computer_paper.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	} else if (playertwo === 'rock' && player === 'rock') {
		result.innerHTML='Draw';
		result.style.display= 'inherit';
		player_rock.style.display='inherit';
		computer.style.display= 'inherit';
		computer_rock.style.display='inherit';
		setSelectedValue(select, 'Select Your Choose');
		again.style.display= 'inherit';
		main.style.display= 'inherit';
		select.style.display= 'none';
	}

	setSelectedValue(select, 'default');
	select.style.display= 'none'
		
}

let mainFunc = () => {
	input.style.display= 'inherit';
	input.value= '';
	startbtn.style.display= 'inherit';
	welcome.style.display= 'inherit';
	select.style.display= 'none';
	result.style.display= 'none';
	player_name.style.display='none';
	player_rock.style.display='none';
	player_paper.style.display='none';
	player_scissors.style.display='none';
	computer.style.display= 'none';
	computer.style.display= 'none';
	computer_rock.style.display='none';
	computer_paper.style.display='none';
	computer_scissors.style.display='none';
	again.style.display= 'none';
	mainbtn.style.display= 'none';
	copyRight.style.display= 'inherit';
}


let againFunc = () => {
	player_rock.style.display= 'none';
	player_paper.style.display= 'none';
	player_scissors.style.display= 'none';
	result.style.display= 'none';
	computer.style.display= 'none';
	computer_rock.style.display= 'none';
	computer_paper.style.display= 'none';
	computer_scissors.style.display= 'none';
	again.style.display= 'none';
	select.style.display= 'inherit';
	main.style.display= 'none';
}


select.addEventListener("change", play);
again.addEventListener("click", againFunc);
startbtn.addEventListener("click", start);
mainbtn.addEventListener("click", mainFunc);