const first_num = prompt('첫번째 숫자를 입력하세요 : ');
const second_num = prompt("두번째 숫자를 입력하세요 : ");
const sign = prompt("계산 기호를 입력하세요 : ")


if(sign === '+'){
    add(first_num,second_num);
}else if(sign === '-'){
    sub(first_num,second_num);
}else if(sign === 'x' || sign === 'X' || sign === "*"){
    mul(first_num,second_num);
}else if(sign === '/' || sign === '%'){
    divi(first_num,second_num);
}

function add(first_num,second_num){
    console.log(first_num + second_num);
}

function sub(first_num,second_num){
    console.log(first_num - second_num);
}

function mul(first_num,second_num){
    console.log(first_num * second_num);
}

function divi(first_num,second_num){
    console.log(first_num / second_num);
}

