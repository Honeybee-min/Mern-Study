// Function this : global 을 가르킨다
function hello(){
    console.log(this);
    console.log(this === global);
}

hello();


// Class this : Class 자기 자신을 가르킨다
class A{
    constructor(num){
        this.num = num;
    }

    memberFunction(){
        console.log('------ class ------');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();

console.log('------ glbal scope ------');
console.log(this);
console.log(this === module.exports);