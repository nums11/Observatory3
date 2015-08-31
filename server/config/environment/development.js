'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/observatory3-dev'
  },

  // Server Address
  addr: "http://localhost:9000",

  // For testing verification
  // attendanceVerificationRatio: 1,

  seedDB: false
};
