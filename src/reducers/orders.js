/**
 * Created by HP on 10-Dec-17.
 */

const orderDefaultReducerState = {
    items : [],
    time : undefined,
    name : '',
    phone : ''
};

export default (state = orderDefaultReducerState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items : incrementSameItem(state.items, action.item)
            };
            break;
        case 'REMOVE_ITEM':
            const newState = {...state};
            newState.items.forEach((item,index,array) => {
                if (item.title === action.title) {
                    item.amount--
                }
                if (item.amount === 0) {
                    array.splice(index, 1);
                }
            });
            return newState;
            break;
        case 'INCREMENT_ITEM':
            const newStater = {...state};
            newStater.items.forEach((item,index,array) => {
                if (item.title === action.title) {
                    item.amount ? item.amount++ : item.amount = 1;
                }
            });
            return newStater;
            break;
        case 'REMOVE_ALL_SAME_ITEMS':
            return {
                ...state,
                items : state.items.filter(item => item.title !== action.title)
            };
            break;
        case 'FILL_CREDENTIALS':
            return {
                ...state,
                name : action.data.name,
                phone : action.data.phone
            };
            break;
        case 'SET_PICKUP_TIME':
            return {
                ...state,
                time : action.time,
            };
            break;
        default:
            return state;
    }
}

export const incrementSameItem = (initialItems, additionalItem) => {
    const amount = {amount : 1};
    if(initialItems.length !== 0) {
        let exist = false;
        initialItems.forEach(i => {
            if (i.title === additionalItem.title) {
                i.amount ? i.amount++ : Object.assign(i, amount);
                exist = true;
            }
        });
        return exist ? initialItems : [...initialItems, Object.assign(additionalItem, amount)];
    }
    return [Object.assign(additionalItem, amount)];
};