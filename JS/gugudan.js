const num = prompt("몇단을 출력할까요 ? or 전체 ");

function gugudan(num){
    for(let i=1;i<=9;i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

function allgugudan(){
    for(let i=2;i<=9;i++){
        for(let j=1;j<=9;j++){
            console.log(`${i} X ${j} = ${i*j}`);
        }
    }
}

if(num === '전체'){
    allgugudan();
}else{
    gugudan(num);
}

