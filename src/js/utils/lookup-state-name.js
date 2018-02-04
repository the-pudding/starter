import data from './us-state-data';

/**
 * Return state name from abbreviation
 * @param {string} abbr to use to lookup state name
 
 * @returns {string} state name
 */

function lookupStateName(abbr) {
	const match = data.find(d => d.abbr.toLowerCase() === abbr.toLowerCase());
	return match ? match.state : null;
}

export default lookupStateName;
