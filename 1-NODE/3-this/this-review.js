/**
π this : class μ this μ function μ this λ λ€λ₯΄λ€
 */

// function this : global μ κ°λ₯΄ν¨λ€ 
function hello(){
    console.log(this);
    console.log(this === global);
}

hello();


// Class this : Class μκΈ°μμ μ λ»νλ€ ! 
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
