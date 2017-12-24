/**
 * Created by HP on 25-Dec-17.
 */
import {SET_USER_LOCATION} from './types';

/**
 * Sets user's location available for all connected components
 * @param location
 */
export const setUserLocation = location => ({
    type : SET_USER_LOCATION,
    location
});