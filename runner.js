const fs = require("fs");

function runner(className) {
  const connectorMethods = Object.getOwnPropertyNames(className.prototype);
  const manifest = JSON.parse(fs.readFileSync("./example-manifest.json", "utf-8"));

  manifest.schedules.forEach((schedule) => {
    if (connectorMethods.indexOf(schedule.method) === -1) {
      throw new Error(`Missing method: ${schedule.method}`);
    }
    console.log("registering a schedule handler for method", schedule.method);
  });

  manifest.subscriptions.forEach((subscription) => {
    if (connectorMethods.indexOf(subscription.method) === -1) {
      throw new Error(`Missing method: ${subscription.method}`);
    }
    console.log("registering a subscription handler for method", subscription.method);
  });

  manifest.incoming_webhooks.forEach((incomingWebhook) => {
    if (connectorMethods.indexOf(incomingWebhook.method) === -1) {
      throw new Error(`Missing method: ${incomingWebhook.method}`);
    }
    console.log("registering an incoming webhook handler for method", incomingWebhook.method);
  });

  manifest.actions.forEach((action) => {
    if (connectorMethods.indexOf(action.method) === -1) {
      throw new Error(`Missing method: ${action.method}`);
    }
    console.log("registering an action handler for method", action.method);
  });

  if (connectorMethods.indexOf(manifest.admin.method) === -1) {
    throw new Error(`Missing method: ${manifest.admin.method}`);
  }
  console.log("registering an admin handler for method", manifest.admin.method);
}

module.exports = runner;
