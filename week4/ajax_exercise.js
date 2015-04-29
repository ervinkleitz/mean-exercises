var request = require('request');
var messageArray, contactsArray, newID;
var contacts = [];

request( 'http://mean.codingcamp.us:8000/contacts', useContacts );
request( 'http://mean.codingcamp.us:8000/messages', useMessages );
// Consumes data for Contacts
function useContacts (error, response, body) {
	contactsArray = JSON.parse(body);
	if (messageArray) processData();
}
// Consumes data for Messages
function useMessages (error, response, body) {
	messageArray = JSON.parse(body);
	if (contactsArray) processData();

}

function processData() {
// Prints data in chat-like format
  for ( j = 0; j < messageArray.length; j++ ) {
    newID = messageArray[j]['user_id'] - 1;
    console.log( contactsArray[newID]['name'] + ': ' + messageArray[j]['text']);
  }
}
