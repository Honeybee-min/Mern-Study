const fs = require('fs');
const path = require('path');
const os = require('os');


const targetPath = process.argv[2];
const workDir = path.join(os.homedir(),'Pictures',targetPath);

const videoDir = path.join(workDir,'videos');
const captured = path.join(workDir,'captured');
const duplicated = path.join(workDir,'duplicated');

const items = [];

const makeFolder = (dir)=>{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

fs.readdir(workDir,(err,filelist)=>{
    filelist.forEach(file=>{
        let type = path.extname(file);
        switch(type){
            case 'mp4' || 'mov':
                fs.rename(workDir,'videos',()=>{
                    console.log("h");
                });

        }
    })
})


/**
const items = (workDir)=>{
    fs.readdir(workDir,(err,filelist)=>{
        filelist.forEach(file=>{

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