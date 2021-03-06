/**
ð os  : os ì ìì²´ì ì¸ ì ì´ ëªë ¹ì´ë¤ ì¬ì©ê°ë¥íë¤ 
 */

const os = require('os');

// EOL : osë§ë¤ ìë¡ ì¤ë°ê¿ íë ë¬¸ìì´ì´ ë¤ë¥¸ ê²½ì°ê° ìë¤ í´ë¹íëê±¸ ë°íí´ì¤ë¤
// [ ex) windows : \r\n     mac : \n]
console.log(os.EOL === '\n'); 
console.log(os.EOL === '\r\n');

// ìë²ê° ëìì¤ì¸ OS íê²½ ì ë³´ë¥¼ ì»ê³  ì¶ìë os module ì ì¬ì©íë¤ !
console.log(os.totalmem());     // os ì ì ì²´ ë©ëª¨ë¦¬ 
console.log(os.type());         
console.log(os.cpus());
console.log(os.userInfo());

