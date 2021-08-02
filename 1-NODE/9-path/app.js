const path = require('path');

// Mac , Linux : 'Users/temp/myfile.html'
// Windows : 'c:\temp\myfile.html'

// os 별로 path 에 표기법이 다르지만 os 무관하게 잘 동작하도록 만드는것이 중요  
console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자를 알려준다
console.log(path.delimiter); // 환경변수 구분자를 알려준다

// basename 
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

// dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

// parse  경로를 쪼개서 상세하게 알려준다 . 
const parsed = path.parse(__filename);
console.log(parsed);

//string화도 가능하다 
const str = path.format(parsed);
console.log(str);


