module.exports = function check(str, bracketsConfig) {
  let regOne = /\(\]\)/igm,
  regTwo = /\(\[\)/igm,
  regThree = /\(\{\)/igm,
  regFour = /\(\}\)/igm,
  regFive = /\(\|\)/igm;

  if (str.match((regOne)) !== null || str.match((regTwo)) !== null || str.match((regThree)) !== null || str.match((regFour)) !== null || str.match((regFive)) !== null) {
    return false;
  }

  const configs = bracketsConfig.join('');
  const sep = str.split('').join('');
  let count = 0;
  
  if (configs.indexOf('(') !== -1 || configs.indexOf('[') !== -1) {
    for (let i = 0; i < sep.length; i++) {
      if (count === -1) {
        return false;
      }
      if (sep[i] === '(') {
        count += 1;
      } else if (sep[i] === ')') {
        count -= 1;
      } else if (sep[i] === '[') {
        count += 1;
      } else if (sep[i] === ']') {
        count -= 1;
      }
    }
    if (count === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (configs.indexOf('|') !== -1) {
    for (let i = 0; i < sep.length; i++) {
      if (sep[i] === '|') {
        count += 1;
      }
    }
    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (sep.indexOf('3') === -1 || sep.indexOf('4') === -1) {
    for (let i = 0; i < sep.length; i++) {
      // I need to think about eight some more.
      if (sep[0] === '8') {
        return false;
      }
      if (sep[i] === '1' || sep[i] === '2' || sep[i] === '3' || sep[i] === '4' || sep[i] === '5' || sep[i] === '6' || sep[i] === '7' || sep[i] === '8') {
        count += 1;
      }
    }
    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  

  if (sep.indexOf('3') !== -1 || sep.indexOf('7') !== -1 && sep.indexOf('8') !== -1) {
    let result = '';
    for (let i = 0; i < sep.length; i++) {
      if (sep[i] === '1') {
        result += '(';
      } else if (sep[i] === '2') {
        result += ')';
      } else if (sep[i] === '3') {
        result += '[';
      } else if (sep[i] === '4') {
        result += ']';
      } else if (sep[i] === '5') {
        result += '{';
      } else if (sep[i] === '6') {
        result += '}';
      } else if (sep[i] === '7') {
        result += '(';
      } else if (sep[i] === '8') {
        result += ')';
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (count === -1) {
        return false;
      }
      if (result[i] === '(') {
        count += 1;
      } else if (result[i] === ')') {
        count -= 1;
      } else if (result[i] === '[') {
        count += 1;
      } else if (result[i] === ']') {
        count -= 1;
      } else if (result[i] === '{') {
        count += 1;
      } else if (result[i] === '}') {
        count -= 1;
      }else if (result[i] === '|') {
        count += 1;
    }
    if (count === 0 || count % 2 === 0) {
      return true;
    } else {
      return false;
    }
    }
  }

  if (configs.indexOf('(') !== -1 && configs.indexOf('[') !== -1 && configs.indexOf('{') !== -1 && configs.indexOf('|') !== -1) {
    for (let i = 0; i < sep.length; i++) {
      if (sep[i] === '(') {
        count += 1;
      } else if (sep[i] === ')') {
        count -= 1;
      } else if (sep[i] === '[') {
        count += 1;
      } else if (sep[i] === ']') {
        count -= 1;
      } else if (sep[i] === '{') {
        count += 1;
      } else if (sep[i] === '}') {
        count -= 1;
      }else if (sep[i] === '|') {
        count += 1;
    }
    if (count === 0 || count % 2 === 0) {
      return true;
    } else {
      return false;
    }
    }
  }

  if (configs.indexOf('(') !== -1 && configs.indexOf('[') !== -1 && configs.indexOf('{') !== -1) {
    for (let i = 0; i < sep.length; i++) {
      if (sep[i] === '(') {
        count += 1;
      } else if (sep[i] === ')') {
        count -= 1;
      } else if (sep[i] === '[') {
        count += 1;
      } else if (sep[i] === ']') {
        count -= 1;
      } else if (sep[i] === '{') {
        count += 1;
      } else if (sep[i] === '}') {
        count -= 1;
      } else if (count === -1) {
        return false;
      }
    }
    if (count === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (configs.indexOf('(') !== -1 && configs.indexOf('|') !== -1) {
    for (let i = 0; i < sep.length; i++) {
      if (sep[i] === '(') {
        count += 1;
      } else if (sep[i] === ')') {
        count -= 1;
      } else if (sep[i] === '|') {
        count += 1;
      } 
    }
    if (count === 0 || count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

}
