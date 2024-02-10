var uniqueInOrder=function(iterable){
    if (typeof iterable === 'string') {
      filtered = iterable.replace(/[^\w\s]|(.)(?=\1)/g, '')
      return filtered.split('')
    }
    else if (typeof iterable !== 'string') {
      newStr = iterable.toString('')
      filtered2 = newStr.replaceAll(',', '')
      filtered3 = filtered2.replace(/[^\w\s]|(.)(?=\1)/g, '')
      filtered4 = filtered3.split('')
      return isNaN(filtered4[0]) === false ? filtered4.map(Number) : filtered4
    }
  }


console.log(uniqueInOrder("AAAABBBCCDAABBB"))
console.log(uniqueInOrder(["a", "b", "b", "a"]))
console.log(uniqueInOrder("ABBCcA"))
console.log(uniqueInOrder([1, 2, 3, 3, -1]))
