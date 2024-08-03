const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build', 'static', 'js');
const librariesFile = path.join(__dirname, '..', 'listing_page.libraries.yml');

// Read the contents of the build directory
fs.readdir(buildDir, (err, files) => {
  if (err) {
    console.error('Error reading build directory:', err);
    return;
  }

  // Find the main.*.js file
  const mainFile = files.find(file => file.startsWith('main.') && file.endsWith('.js'));

  if (mainFile) {
    // Read the contents of the libraries file
    fs.readFile(librariesFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading libraries file:', err);
        return;
      }

      // Replace the main.*.js filename in the libraries file
      const updatedData = data.replace(/main\.\w+\.js/, mainFile);

      // Write the updated contents back to the libraries file
      fs.writeFile(librariesFile, updatedData, 'utf8', (err) => {
        if (err) {
          console.error('Error writing libraries file:', err);
          return;
        }

        console.log('Libraries file updated successfully.');
      });
    });
  } else {
    console.warn('No main.*.js file found in the build directory.');
  }
});