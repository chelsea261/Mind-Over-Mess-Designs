var art = ['Rose', 'Storm', 'Beach'];      // Array of art
var arrayLength = art.length;              // Items in array
var artNumber = 0;                         // Current art
var msg = '';                              // Message

// Loop through the items in the array
for (var i = 0; i < arrayLength; i++) {

  // Arrays are zero based (so 0 is art 1)
  // Add 1 to the current art
  artNumber = (i + 1);

  // Write the current art to message
  msg += 'Art ' + artNumber + ': ';

  // Get the art from the art array
  msg += art[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;