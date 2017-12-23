/**
 * Created by HP on 10-Dec-17.
 */
import { dishes } from '../data/data'

export default (filter, text) => {
    if (!!text){
        return dishes.filter(d => d.title.toLowerCase().includes(text));
    }
    return dishes.filter(d => d.category === filter);
}