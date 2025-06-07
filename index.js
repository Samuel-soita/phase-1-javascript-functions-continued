function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun("bathe my dog!");

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer");
