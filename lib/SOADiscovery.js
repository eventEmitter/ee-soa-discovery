!function(){

    var   Class             = require('ee-class')
        , DiscoveryResponse = require('ee-soa-discovery-response')
        , log               = require('ee-log')
        , EventEmitter      = require('ee-event-emitter');



    module.exports = new Class({
        inherits: EventEmitter

        , discover: function(application, service, callback) {
            callback(null, new DiscoveryResponse({
                  status: DiscoveryResponse.statuses.NotFound
            }));
        }


        , isDiscovery: function() {
            return true;
        }
    });
}();
