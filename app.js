function mutations(arr){
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();
  
    for(var i = 0; i < secondWord.length; i++) {
      if (firstWord.indexOf(secondWord[i]) === -1) return false;
    }
    return true
  }
  
  mutations(["hello", "hey"])



  function mutations(arr){
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();
  
    for (var letter of secondWord){
      if (firstWord.indexOf(letter) === -1) return false;
      }
  
    return true
  }
  
  mutations(["hello", "hey"])

//using .includes
  function mutations(arr){
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();
  
  for (var letter of secondWord){
    if (!firstWord.includes(letter)) return false;
  }
    return true
  }
  
  mutations(["hello", "hey"])
  
   