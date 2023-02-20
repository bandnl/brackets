module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let resultBool = true;
  let dontInclude;
  while (str.length > 0 && resultBool) {
    dontInclude = [];
    bracketsConfig.forEach((elem) => {
      const a = elem.join('');
      if (str.includes(a)) {
        str = str.slice(0, str.indexOf(a)) + str.slice(str.indexOf(a) + 2);
        dontInclude.push('false')
      } else {
        dontInclude.push('true')
      };
    })
    let count = 0;
    for (let val of dontInclude) {
        if (val === 'true') count++
    }
     resultBool = (count === dontInclude.length) ? false : true;
  }
  return resultBool;
}
