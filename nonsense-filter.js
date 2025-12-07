const fs = require('fs');

function filterMessagesByLength(inputFile, outputFile, minLength = 0, maxLength = Infinity) {
  const data = fs.readFileSync(inputFile, 'utf8');
  
  const messages = data.split('\n');
  const filteredMessages = messages.filter(msg => {
    const length = msg.length;
    return length >= minLength && length <= maxLength;
  });
  
  fs.writeFileSync(outputFile, filteredMessages.join('\n'));
  console.log(`Filtered ${messages.length} messages down to ${filteredMessages.length} messages`);
}

filterMessagesByLength('nonsense.txt', 'output.txt', 80);