# Next Gen

A more declarative approach to connectors.

`node run-example.js`

The idea is that we expose one class: [intercom-connector.js](./intercom-connector.js).

Then in manifest.json we explicitly say which method handles which route: [manifest.json](./example-manifest.json#L8).

Then we have one runner script which performs the binding between express app and the class.
