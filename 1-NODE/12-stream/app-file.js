const fs = require('fs');

// π₯

const beforeMem = process.memoryUsage().rss;        // νμ¬ μ¬μ©μ€μΈ λ©λͺ¨λ¦¬λ₯Ό μ½λλ€ 
fs.readFile('./file.txt',(error,data)=>{                // μ μ₯ν΄λ νμΌμ μ½λλ€ 
    fs.writeFile('./file2.txt',data,()=>{});        // μ½μ νμΌλ‘ μμ±νλ€ [ λͺ¨λ  νμΌμ λ€ μ½μ ν μμ±ν¨] => λͺ¨λ κ²μ λ€ μ½μ ν νλκ²μ λΉν¨μ¨μ 
    //calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem-beforeMem;
    const consumed = diff / 1024 / 1024 ;
    console.log(diff);
    console.log(`Memory : ${consumed}`);
});