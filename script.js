document.getElementById("disp").style.display = "none";

const query = document.getElementsByName("query");
const A = 0, B = 1, C = 2, D = 3;

const cal = document.getElementById("cal");
cal.addEventListener("click", function(){
  let flag = false;
  let max = 0;
  const array = [
    {num: 0, type: '0'},
    {num: 0, type: '1'},
    {num: 0, type: '2'},
    {num: 0, type: '3'},
  ];
  for(let i = 0; i < query.length; i++){
    if(query[i].checked){
      flag = true;
      switch(i){
        case 0: array[A].num++; array[B].num++; break;
        case 1: array[A].num++; array[C].num++; break;
        case 2: array[A].num++; array[B].num++; break;
        case 3: array[A].num++; array[C].num++; break;
        case 4: array[B].num++; array[D].num++; break;
        case 5: array[C].num++; array[D].num++; break;
        case 6: array[B].num++; array[D].num++; break;
        case 7: array[C].num++; array[D].num++; break;
        default:break;
      }
    }
  }
  if(flag){
    for(let i = 0; i < array.length; i++){
      if(array[i].num > max){
        max = array[i].num;
      }
    }
    for(let i = 0; i < 4; i++){
      document.getElementById("type_" + i).style.display = "none";
    }
    document.getElementById("disp").style.display = "block";
    for(let i = 0; i < array.length; i++){
      if(max == array[i].num){
        document.getElementById("type_" + i).style.display = "block";  
      }
    }
  }
});

const set =document.getElementById("set");
set.addEventListener("click", function(){
  document.getElementById("disp").style.display = "none";
  for(let i = 0; i < query.length; i++){
    document.getElementById("cb_" + i).checked = false;
  }
});
