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
  city === "NYC" ? (result = "OK sounds good.") : (isAdult = "No go.");
  return result
}