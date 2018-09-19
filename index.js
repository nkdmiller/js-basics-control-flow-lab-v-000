function scuberGreetingForFeet(someValue) {
  if (someValue < 400){
    result = "This one is on me!"
  } else if (someValue > 400 && someValue < 2500){
    result = 'I will gladly take your thirty bucks.'
  } else {
    result = "No can do."
  }
  return result
}
function ternaryCheckCity(city){
  let result;
  city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  return result
}
function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'happy':
        response = 'Thank you so much.';
        break;
    case 'sad':
        response = "Thank you.";
        break;
    default:
        response = "Bye.";
}
}