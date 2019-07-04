/**
 * CORE-js
 * https://github.com/Wong-Innovations/CORE-js
 *
 * Copyright (c) 2014 Dylan Wong
 * Licensed under the MIT license.
 */

import request from 'request';
let API_KEY = "";

exports.init = function(key) { API_KEY = key }

/**
 * @description Gets CORE article using /articles/search/{query} GET request.
 * @param {String} q.query Search query string.
 * @param {Integer} q.page Which page of the search results should be retrieved. Can be any number betwen 1 and 100, default is 1 (first page).
 * @param {Integer} q.pageSize The number of results to return per page. Can be any number between 10 and 100, default is 10.
 * @param {Bool} q.metadata Whether to retrieve the full article metadata or only the ID. The default value is true.
 * @param {Bool} q.fulltext Whether to retrieve full text of the article. The default value is false.
 * @param {Bool} q.citations Whether to retrieve citations found in the article. The default value is false.
 * @param {Bool} q.similar Whether to retrieve a list of similar articles. The default value is false. Because the similar articles are calculated on demand, setting this parameter to true might slightly slow down the response time.
 * @param {Bool} q.duplicate Whether to retrieve a list of CORE IDs of different versions of the article. The default value is false.
 * @param {Bool} q.urls Whether to retrieve a list of URLs from which the article can be downloaded. This can include links to PDFs as well as HTML pages. The default value is false.
 * @param {Bool} q.faithfulMetadata Returns the records raw XML metadata from the original repository. The default value is false.
 * @param {Function({Object})} callback Callback to be called when data is received from CORE.
 * @return {Array} An array of article data objects.
 */

exports.getArticles = function(q) {
	if (API_KEY === "") throw new Error('No API_KEY configured. First use CORE.init("your API key") or visit the documentation for help.');
	if (!q.page) q.page = 1;
	if (!q.pageSize) q.pageSize = 10;
	if (!q.metadata) q.metadata = true;
	if (!q.fulltext) q.fulltext = false;
	if (!q.citations) q.citations = false;
	if (!q.similar) q.similar = false;
	if (!q.duplicate) q.duplicate = false;
	if (!q.urls) q.urls = false;
	if (!q.faithfulMetadata) q.faithfulMetadata = false;

	request(`https://core.ac.uk:443/api-v2/articles/search/${q.query.replace(' ', '%20')}?page=${q.page}&pageSize=${q.pageSize}&metadata=${q.metadata}&fulltext=${q.fulltext}&citations=${q.citations}&similar=${q.citations}&duplicate=${q.duplicate}&urls=${q.urls}&faithfulMetadata=${faithfulMetadata}&apiKey=${API_KEY}`,
		function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			return body.data;
		}
	);
}
