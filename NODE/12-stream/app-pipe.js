const fs = require('fs');
const zlib = require('zlib');

// 읽어온 데이터를 그대로 연결해서 쓴다 
const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip ');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish',()=>{
    console.log('done!');
})

// zlib 을 통해서 읽은 데이터를 압축해서 쓰는것도 pipe 를 통해 가능
