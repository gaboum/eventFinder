/**
 * Created by HP on 23-Dec-17.
 */
import moment from 'moment';

import {
    GET_CATEGORIES,
    SET_CATEGORY,
    SET_LOCATION,
    SET_PRICE,
    SET_TYPE,
    SET_TEXT,
    SET_TODAY,
    SET_TOMORROW,
    SET_THIS_FRIDAY,
    SET_THIS_WEEK,
    SET_THIS_WEEKEND,
    SET_NEXT_WEEK,
    SET_THIS_MONTH
} from '../actions/types';

const filtersReducerDefaultState = {
    allCategories : [],
    location      : '',
    category      : '',
    type          : '',
    price         : '',
    textFilter    : '',
    startRange    : moment(),
    endRange      : moment().add(14, 'days'),
};

/**
 * Particular dates for setting event filters on front-end
 */
const today = moment().format('YYYY-MM-DD HH:mm:ss');
const tomorrow = moment().add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss');
const friday   = moment().day(5).format('YYYY-MM-DD HH:mm:ss');
const thisWeekendStart = moment().endOf('isoWeek').subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss');
const thisWeekendEnd = moment().endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const nextWeekStart = moment().add(1, 'week').startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const nextWeekEnd = moment().add(1, 'week').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
const thisMonthEnd = moment().endOf('month').format('YYYY-MM-DD HH:mm:ss');


export default (state=filtersReducerDefaultState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, allCategories : action.categories};
            break;
        case SET_LOCATION:
            return {...state, location: action.location};
            break;
        case SET_CATEGORY:
            return {...state, category : action.category};
            break;
        case SET_TYPE:
            return {...state, typeOfE : action.category};
            break;
        case SET_PRICE:
            return {...state, price : action.price};
            break;
        case SET_TEXT:
            return {...state, textFilter  : action.text};
        case SET_TODAY:
            return {
                ...state,
                startRange : today,
                endRange   : today
            };
            break;
        case SET_TOMORROW:
            return {
                ...state,
                startRange : tomorrow,
                endRange   : tomorrow
            };
            break;
        case SET_THIS_WEEK:
            return {
                ...state,
                startRange : today,
                endRange   : thisWeekendEnd
            };
            break;
        case SET_THIS_FRIDAY:
            return {
                ...state,
                startRange : friday,
                endRange   : friday
            };
        case SET_THIS_WEEKEND:
            return {
                ...state,
                startRange : thisWeekendStart,
                endRange   : thisWeekendEnd
            };
            break;
        case SET_NEXT_WEEK:
            return {
                ...state,
                startRange : nextWeekStart,
                endRange   : nextWeekEnd
            };
            break;
        case SET_THIS_MONTH:
            return {
                ...state,
                startRange : today,
                endRange   : thisMonthEnd
            };
            break;
        default:
            return state;

    }
}