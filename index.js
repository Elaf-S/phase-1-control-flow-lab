let ride;
let city;
let tip;
function scuberGreetingForFeet(ride){
    let charge; 
    
    if (ride<=400){
        charge='This one is on me!';
    }else if (ride>400 && ride<=2000){
        charge='That will be twenty bucks.';
    }else if (ride > 2000 && ride <2500){
        charge='I will gladly take your thirty bucks.';
    }else if (ride >2500){
       charge='No can do.';
    }
   return charge;
}

function ternaryCheckCity(city){
  let A;
  if (city==='NYC'){
      A= "Ok, sounds good.";
  }
  else{
      A='No go.';
  }
  return A;
}
let res;
function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous' :
    return 'Thank you so much.';
    case 'not as generous' :
    return 'Thank you.';
    break;
    default :
      return 'Bye.'
}
}
// if (tip='thanks for everything')

/*
 if (Tip='generous'){
     res='Thank you so much.'
   }
   else if (Tip='not as generous'){
     res='Thank you.';
   }
   else if (Tip='thanks for everything'){
    res='Bye.';
   }
   return res;*/