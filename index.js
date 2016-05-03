var hljs = require("highlight.js");



module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
      codeblock: {
        process: function(block) {
          return hljs.highlightBlock(block.body);
        }
      }
    },

    // Map of new filters
    filters: {}
};
