/**
 * Created by HP on 23-Dec-17.
 */

/**
 * This file holds authentication data for requests to eventbrite API
 * As well as data for requests to google's API
 * You can obtain it by registering an app here: https://www.eventbrite.com/myaccount/apps/
 * */
const ENV = {
    eventbriteAPI : {
        OAuthToken : 'Bearer ESEQ74FBDHKEOYMZCR7G',
        clientSecret : 'WTQ2SVTAGAUSOWK4B5THT345XCSFAGBFV2VVO2LSKYXF2UYM2I',
        rootURL : 'https://www.eventbriteapi.com/v3',
    },
    googleAPI : {
        rootURL : 'https://maps.googleapis.com/maps/api/geocode/json',
        keyAPI  : 'AIzaSyDw5fwsSljNsyfchlULrBM4g984oGq8onY',
    },
    backendServer : {
        rootUrl : 'http://localhost:3030'
    }
};

export default ENV;