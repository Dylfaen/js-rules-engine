const executeEngine = (facts, rules, functions) => {
  console.log("rules", rules)
 let result
 Object.entries(rules).find(([index, value]) => {
   if(typeof functions[index] !== 'function') {
     throw new Error("rules must be declared in functions object")
    }
    let test = functions[index](facts);
    //test function return true
    if(test) {
      //if value is object, it's a rule to explore
      if(typeof value === 'object' && value !== null) {
        result = executeEngine(facts, value, functions)
      //else value is function name to execute
      } else {
        if(typeof functions[value] !== 'function') {
          throw new Error("rules must be declared in functions object")
        }
        result = functions[value](facts)
      }
      return true
    } else {
      return false
    }
  })
 
 return result
}

module.exports = executeEngine;