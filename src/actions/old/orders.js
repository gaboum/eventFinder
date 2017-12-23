/**
 * Created by HP on 10-Dec-17.
 */

/**
 * Adds an item to the items array
 * @param item
 */
export const addItem = (item) => ({
    type : 'ADD_ITEM',
    item,
});

/**
 * Increment counter of an item in order list
 * @param title
 */
export const incrementItem = (title) => ({
    type : 'INCREMENT_ITEM',
    title
});

/**
 * Removes an item from the items array
 * @param title
 */
export const removeItem = (title) => ({
    type : 'REMOVE_ITEM',
    title
});

/**
 * Removes all same items from order (4 same pizzas for example)
 * @param title
 */
export const removeAllSameItems = (title) => ({
    type : 'REMOVE_ALL_SAME_ITEMS',
    title
});

/**
 * Fills state with user's credentials
 * @param data
 */
export const fillCredentials = (data) => ({
    type : 'FILL_CREDENTIALS',
    data
});

/**
 * Sets pick up time for an order
 * @param time
 */
export const setPickupTime = (time) => ({
    type : 'SET_PICKUP_TIME',
    time
});

