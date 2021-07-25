/**
😀 this : class 의 this 와 function 의 this 는 다르다
 */

// function this : global 을 가르킨다 
function hello(){
    console.log(this);
    console.log(this === global);
}

hello();


// Class this : Class 자기자신을 뜻한다 ! 
class A{
    constructor(num){
        this.num = num;
    }

    test(){
        console.log("== class ==");
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.test();
