// Code your solutions in this file
// Function to create thank you messages
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  // Function to count down and log numbers
  function countDown(start) {
    for (let i = start; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Exporting the functions for testing
  module.exports = {
    writeCards,
    countDown
  };
  