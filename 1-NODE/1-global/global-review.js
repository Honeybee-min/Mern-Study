/**
π Global : μ μ­ κ°μ²΄λ‘μ node νκ²½λ΄μ λͺ¨λ  νμΌμμ μ κ·Όμ΄ κ°λ₯νλ€ 
[ global μ μλ΅νκ³  νΈμΆ κ°λ₯νλ€ ! ]
 */

console.log(global);

global.hello = () => {
    global.console.log('hello');
}

global.hello();
hello();

