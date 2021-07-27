const fs = require('fs');
const path = require('path');
const os = require('os');


const targetPath = process.argv[2];
const workDir = path.join(os.homedir(),'Pictures',targetPath);

const videoDir = path.join(workDir,'videos');
const captured = path.join(workDir,'captured');
const duplicated = path.join(workDir,'duplicated');

const makeFolder = (dir)=>{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

const items = fs.readdir(workDir,(err,filelist)=>{
    //items.push(filelist);
})

console.log(`video dir : ${videoDir}`);
console.log(`items : ${items}`);


/**
makeFolder(videoDir);
makeFolder(captured);
makeFolder(duplicated);
 */



//fs.mkdirSync(videoDir);
/**
fs.readdir(workDir,(error,filelist)=>{
    console.log(filelist);
})
 */





/**
fs.writeFile('./test/videos','파일에 들어갈 내용',(err)=>{
    if(err === null){
        console.log('move videos success !')
    }else{
        console.log('fail');
    }
});
 */