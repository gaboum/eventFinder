/**
 * Created by HP on 10-Dec-17.
 */

/**
 * Sets filtering of dishes by text entered
 */
export const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});

/**
 * Set filtering of dishes only to show pizzas
 */
export const setPizzaFilter = () => ({
    type : 'SET_FILTER_PIZZA',
    filterBy : 'PIZZA'
});

/**
 * Set filtering of dishes only to show pastas
 */
export const setPastaFilter = () => ({
    type : 'SET_PASTA_FILTER',
    filterBy : 'PASTA'
});

/**
 * Set filtering of dishes only to show desserts
 */
export const setDessertFilter = () => ({
    type : 'SET_DESSERT_FILTER',
    filterBy : 'DESSERTS'
});

