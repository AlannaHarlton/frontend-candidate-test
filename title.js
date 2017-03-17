/**
 * This is where you will build your solution. This function is called in the test file and the `state`
 * object will be passed through there. If you want to see exactly what is passed in each case, take
 * a look in `title-test.js`
 * @param {object} state - the query object representing a search
 */
function parseTitle (state) {
    var title = '';
    
    title = addField(state.query, '', '+', title);
    title = addField(state.brand, 'by', '-', title);
    title = addField(state.store, 'at', '-', title);

    return title;
}

// Adding a field to the title
//@param {string} field - the field to add to title
//@param {string} preposition - used before field - "by", "at", ''
//@param {string} separator - space between words in the field
//@param {string} title - the title
function addField (field, preposition, separator, title) {

	// Don't change the title if field is null
	if (field == null) {
		return title;
	}

	// Add the preposition if needed
	if (title != '') {
		title += ' ' + preposition + ' ';
	}

	// Get the index of the separator, if there is one
	var separatorIndex = field.indexOf(separator);

	// Capitalize the first letter in the string if there is no separator
	if (separatorIndex == -1) {
		return title + capitalizeFirstLetter(field);
	}

	// Capitalize the word before the separator and add it to the title
	var firstWord = field.substring(0, separatorIndex);
	title += capitalizeFirstLetter(firstWord);

	// Capitalize the second word and add it to the title with a space before
	var secondWord = field.slice(separatorIndex + 1);
	title += ' ' + capitalizeFirstLetter(secondWord);

	return title;

}

// Capitalize first letter of the word
//@param {string} word - the word
function capitalizeFirstLetter (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Thank you!