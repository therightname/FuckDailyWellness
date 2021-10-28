// ==FuckDailyWellness==
// @name         FuckDailyWellness
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Get into the gym without a covid test
// @author       therightname
// @match        https://services.northeastern.edu/wellness?id=health_verification_confirmation
// @icon         https://www.google.com/s2/favicons?domain=northeastern.edu
// ==/FuckDailyWellness==

(function() {
    'use strict';

    setInterval(function() {
    if (document.querySelectorAll('font').length) {
        //Make the letter correct
        var letterC = document.querySelectorAll('font');
        letterC[0].style.color = '#008800'; //0th element in the node list
        letterC[0].textContent = 'C';

        //make a new date to repalce the test date
        const daysSinceTest = 3;
        var curentDate = new Date();
        var newDate = " " + String(curentDate.getUTCMonth() + 1) + "/" + String(curentDate.getUTCDate() - daysSinceTest) + "/" + String(curentDate.getUTCFullYear());
        //grab the innter html of the div message content
        var messageContentDiv = document.querySelector('div.message-content').innerHTML;
        var dateIndex = messageContentDiv.search('<b>Last Test Date:</b>') + ('<b>Last Test Date:</b>').length;
        var dateEndingIndex = messageContentDiv.search('<br><br><br><b>You may come to campus today,</b>');
        //replace the message with the new and improved div
        var newMessageContentDiv = messageContentDiv.substr(0, dateIndex) + newDate + messageContentDiv.substr(dateEndingIndex);
        document.querySelector('div.message-content').innerHTML = newMessageContentDiv;
        clearInterval();
    }}, 0);

})();
