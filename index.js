function writeCards(names,eventName){
  const message = []
  for (let i=0;i<names.length; i++){
    message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return message;
}

function countDown(number) {
  if (number < 1) {
    console.log("Please provide a positive integer.");
    return;
  }

  while (number >= 0) {
    console.log(number);
    number--;
  }
}


