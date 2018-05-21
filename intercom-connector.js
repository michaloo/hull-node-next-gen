const HullConnectorNextGen = require("./hull-node-next-gen");

class IntercomConnector extends HullConnectorNextGen {

  constructor(ctx) {

  }

  /**
   * run on user update notifications and batch
   */
  handleUserUpdateMessages(ctx, messages, options = {}) {

    return Promise.resolve();
  }

  /**
   * run on account update notifications and batch
   */
  handleAccountUpdateMessages(ctx, messages, options) {

  }

  handleSegmentUpdateMessages(ctx) {

  }

  handleStatusScheduler(ctx) {

  }

  handleFetchScheduler(ctx) {

  }

  handleFetchLeadsScheduler(ctx) {

  }

  handleFetchSegmentsScheduler(ctx) {

  }

  handleIncomingWebhook(ctx) {

  }

  loadUserFields(ctx) {

  }

  handleAdmin(ctx) {

  }
}

module.exports = IntercomConnector;
