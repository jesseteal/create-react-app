var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../relaySchema.json');

module.exports = getbabelRelayPlugin(schema.data);
