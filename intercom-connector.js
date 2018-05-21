const HullConnectorNextGen = require("./hull-node-next-gen");

class IntercomConnector extends HullConnectorNextGen {

  constructor(ctx) {

  }

  /**
   * run on user update notifications and batch
   */
  handleUserUpdateMessages(ctx, messages, options = {}) {

    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  /**
   * run on account update notifications and batch
   */
  handleAccountUpdateMessages(ctx, messages, options) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  handleSegmentUpdateMessages(ctx) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  handleStatusScheduler(ctx) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  handleFetchScheduler(ctx) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  handleFetchLeadsScheduler(ctx) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  handleFetchSegmentsScheduler(ctx) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  handleIncomingWebhook(ctx) {
    return Promise.resolve({
      logs: [],
      firehoseEvents: []
    });
  }

  loadUserFields(ctx) {
    return Promise.resolve(jsonResponse);
  }

  handleAdmin(ctx) {
    return Promise.resolve();
  }
}

module.exports = IntercomConnector;
