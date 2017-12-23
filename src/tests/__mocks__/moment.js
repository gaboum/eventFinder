/**
 * Created by HP on 15-Dec-17.
 */
const moment = require.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
}