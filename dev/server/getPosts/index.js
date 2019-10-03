import preval from 'babel-plugin-preval/macro'

const posts = preval`
  module.exports = require('./getPosts')
`;

module.exports = posts;
