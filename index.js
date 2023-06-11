function writeCards(names, eventName) {
    const messages = [];
  
    for (let count = 0; count < names.length; count++) {
      const message = `Thank you, ${names[count]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
}
function countDown(){
    if (count !==0)
    console.log(count);
}
