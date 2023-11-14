function scanner(qrcode){
  
  let qr = ''
  let up = true
  
  function addBit(i,j){
    if(((i+j)%2)==0){
      qr += !reversedArray[j][i]
      qr += !!reversedArray[j][i+1]
    }
    else{
      qr += !!reversedArray[j][i]
      qr += !reversedArray[j][i+1]
    }
  }
  
  const reversedArray = qrcode.map(row => row.reverse()).reverse();
    for(let i = 0; i < 10; i+=2){
    if(up){
      for(let j = 0; j < 12; j++){
        addBit(i,j)
      }
    }
    else{
      for(let j = 11; j > -1; j--){
        addBit(i,j)
      }
    }
    up = !up
  }
      
  qr = qr.replace(/false/g, '0').replace(/true/g, '1')
  qr = qr.substring(4)
  let len = qr.substring(0, 8)
  qr = qr.substring(8)
  const wordLen = parseInt(len, 2)
  const binaryArray = qr.match(/.{1,8}/g);
  let word = ''
  for(let k = 0; k < binaryArray.length; k++){
    word += String.fromCharCode(parseInt(binaryArray[k], 2))
  }
  word = word.slice(0,wordLen)  
  
  return word
}
