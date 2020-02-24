module.exports = function repeater(str, options) {
    let repeatStr = Array(options.repeatTimes);

    if (options.addition !== undefined){
         
        if (options.additionRepeatTimes){
            let addRepeateTimes = Array(options.additionRepeatTimes);
            addRepeateTimes.fill(String(options.addition));
  
            if (options.additionSeparator){
              str += addRepeateTimes.join(options.additionSeparator);
            }
            else {
              str += addRepeateTimes.join("|");
            };
        }
        else{
            str += options.addition
        }
    };
    
    repeatStr.fill(String(str));

    if (options.separator){
       return repeatStr.join(options.separator);
    }
    else {
      return repeatStr.join("+");
    };
};

  