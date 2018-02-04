import data from './us-state-data';

/**
 * Return state abbrevation from name
 * @param {string} state to use to lookup abbreviation
 
 * @returns {string} abbreviation
 */

export default lookupStateAbbr(state) {
	const match = data.find(d => d.state.toLowerCase() === state.toLowerCase());
	return match ? match.abbr : null;
}

export default lookupStateAbbr
