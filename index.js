const fs = require('fs');

function base64ToImage(base64String, path) {
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
  const buffer = new Buffer.from(base64Data, 'base64');
  
  fs.writeFile(path, buffer, (error) => {
    if (error) throw error;
    console.log('The file has been saved!');
  });
}

const base64String = `XXX`
const path = 'image.png';
base64ToImage(base64String, path);