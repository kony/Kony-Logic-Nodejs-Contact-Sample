# Kony-Logic-Nodejs-Contact-Sample

This app is an example that depicts how Node.js packages work in the Kony MobileFabric ecosystem. In this case, we have created a simple Node.js package where we have built APIs to create, read, update and delete a contact object. These APIs are running on the MobileFabric hosted Node.js infrastructure. In addition to that, this package also depicts how Kony’s MobileFabric identity service now seamlessly works with Node.js APIs. By default, all of the APIs are public except for the delete API which has anonymous protection. These can then be changed from within the Logic tab in the MobileFabric console.

This or any Node.js package uploaded to the MobileFabric console will fetch the required npm modules dynamically based on the details in the package.json. These modules will be fetched as part of the part of the package publish process.

These APIs can be used by any MobileFabric app and then they can be invoked from Kony Visualizer like a standard MobileFabric service.

Therefore, any Kony application’s backend can now be entirely serviced by a Node.js package running within the Kony MobileFabric infrastructure.

