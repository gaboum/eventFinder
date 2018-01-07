/**
 * Created by HP on 08-Jan-18.
 */
import {findEventById } from '../../selectors/events';
import {events} from '../fixtures/events';

test('should return an existing on a given id', () => {
    const state = {events : {events: events, filteredEvents: events}};
    const event = findEventById(state, '25664286572');
    expect(event).toEqual([events[0]]);
});