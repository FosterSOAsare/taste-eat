function getServerBaseUrl(req) {
	return `${req.protocol}://${req.headers.host}`;
}

module.exports = getServerBaseUrl;
