const UnlaunchFactory = require("unlaunch-node-sdk")
var unlaunch = require('./common');

export default function () {
    const SDK_KEY = 'prod-server-43099454-dce2-4def-82e0-09bbe4d65156';

    // EDIT ME!  Set FEATURE_FLAG_KEY to your feature flag key to evaluate
    const FEATURE_FLAG_KEY = "crate-products";


    // Create Unlaunch client object by using SDK_KEY and finetune configuration if needed by passing it as argument          
    var factory = UnlaunchFactory({
        core: {
            sdkKey: SDK_KEY
        },
        intervals: {
            // fetch feature updates each 30 sec
            pollingInterval: 30,
            // publish metrics each 120 sec
            metricsFlushInterval: 15,
            // flush events every 60 seconds after the first flush
            eventsFlushInterval: 15,
            // http connection timeout 
            httpConnectionTimeout: 30
        },
        mode: {
            offlineMode: false
        }
    });
    
    const client =  factory.client();
    unlaunch.client = client
}
