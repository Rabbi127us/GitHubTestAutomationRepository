const fs = require('fs-extra');
const path = require('path');
 
var directories = [
  'cypress/cucumber-json', //Feature results
  'cypress/reports/features', //Feature report pages
  'cypress/screenshots', //Screenshots
  'cypress/downloads' //Downloads
];

directories.forEach(directory => {
  fs.emptyDir(path.join(__dirname, directory), err => {
    if (err) {
      console.error('Error cleaning directory:', err);
    } else {
      console.log('Successfully cleaned directory:', directory);
    }
  });
});