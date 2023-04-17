

/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

(function() {

    // PART ONE: CREATE ART OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create an art object using object literal syntax
    var art = {
        name: 'Rose',
        artRate: 125,                // Amount in dollars
        discount: 20,                 // Percentage discount
        offerPrice: function() {
            var offerRate = this.artRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // Write out the art name, standard rate, and the special rate
    var artName, artRate, specialRate;
    // Declare variables

    artName = document.getElementById('artName');
    // Get elements
    artRate = document.getElementById('artRate');
    specialRate = document.getElementById('specialRate');

    artName.textContent = art.name;
    // Write art name
    artRate.textContent = '$' + art.artRate.toFixed(2);
    // Write art rate
    specialRate.textContent = '$' + art.offerPrice();
    // Write offer price

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var expiryMsg;
    // Message displayed to users
    var today;
    // Today's date
    var elEnds;
    // The element that shows the message about the offer ending

    function offerExpires(today) {
        // Declare variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // Create arrays to hold the names of days / months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    // Put today's date in variable
    elEnds = document.getElementById('offerEnds');
    // Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);
    // Add the expiry message

    // Finish the immediately invoked function expression
}());
