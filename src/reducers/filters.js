/**
 * Created by HP on 10-Dec-17.
 */

const filterReducerDefaultState = {
    text : '',
    filterBy : 'PIZZA'
};

export default (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            };
            break;
        case 'SET_FILTER_PIZZA':
            return {
                ...state,
                filterBy : action.filterBy
            };
            break;
        case 'SET_PASTA_FILTER':
            return {
                ...state,
                filterBy : action.filterBy
            };
            break;
        case 'SET_DESSERT_FILTER':
            return {
                ...state,
                filterBy : action.filterBy
            };
            break;
        default:
            return state;

    }
}