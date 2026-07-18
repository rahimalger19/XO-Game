let title= document.querySelector('.title');
let turn ='x';
let squares=[];
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }

    if (squares[1] == squares[2] &&
        squares[2] == squares[3] &&
        squares[1] != "") {

        title.innerHTML = `${squares[1]} Winner`;
        document.getElementById("item1").style.backgroundColor = "green";
        document.getElementById("item2").style.backgroundColor = "green";
        document.getElementById("item3").style.backgroundColor = "green";
    }

  else if( squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
  {
  title.innerHTML= `${squares[4]} winner`;
    document.getElementById('item'+4).style.backgroundColor='green';
    document.getElementById('item'+5).style.backgroundColor='green';
    document.getElementById('item'+6).style.backgroundColor='green';
  }
  else if( squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '')
  {
title.innerHTML= `${squares[7]} winner`;
    document.getElementById('item'+7).style.backgroundColor='green';
    document.getElementById('item'+8).style.backgroundColor='green';
    document.getElementById('item'+9).style.backgroundColor='green';
  }
  else if( squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
  {
   title.innerHTML= `${squares[1]} winner`;
    document.getElementById('item1').style.backgroundColor='green';
    document.getElementById('item4').style.backgroundColor='green';
    document.getElementById('item7').style.backgroundColor='green';
  }
  else if( squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '')
  {
   title.innerHTML= `${squares[2]} winner`;
    document.getElementById('item2').style.backgroundColor='green';
    document.getElementById('item5').style.backgroundColor='green';
    document.getElementById('item8').style.backgroundColor='green';
  }
  else if( squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
  {
   title.innerHTML= `${squares[3]} winner`;
    document.getElementById('item3').style.backgroundColor='green';
    document.getElementById('item6').style.backgroundColor='green';
    document.getElementById('item9').style.backgroundColor='green';
  }
  else if( squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '')
  {
   title.innerHTML= `${squares[1]} winner`;
   document.getElementById('item1').style.backgroundColor='green';
   document.getElementById('item5').style.backgroundColor='green';
   document.getElementById('item9').style.backgroundColor='green';
  }
  else if( squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != '')
  {
  title.innerHTML= `${squares[3]} winner`;
    document.getElementById('item3').style.backgroundColor='green';
    document.getElementById('item5').style.backgroundColor='green';
    document.getElementById('item7').style.backgroundColor='green';
  }
}
function game(id) {
    let element = document.getElementById(id);

    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }

    winner();
}
document.getElementById("restartBtn").style.display = "block";