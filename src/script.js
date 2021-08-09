function telephoneCheck(str) {
  var validNum = /^(1\s|1)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
  
  if (validNum) {
    return true;
  }
  return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("123**&!!asdf#"));