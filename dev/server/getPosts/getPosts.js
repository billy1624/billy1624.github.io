//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const fileName = [];

//joining path of directory 
const directoryPath = path.join(__dirname, '../../blogs');

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        console.log('Unable to scan directory: ' + err);
        return;
    } 
    //listing all files using forEach
    files = files.filter(file => file.endsWith(".md") || file.endsWith(".mdx"));
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        fileName.push({
            name: file.replace('.md', ''),
        });
    });
});

module.exports = fileName;
