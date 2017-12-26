/**
 * Created by HP on 26-Dec-17.
 */


export default class FieldsValidator {

    static validate (state) {
        const newState = {...state};
        for(let key in newState) {
            if(newState[key].value === ''){
                newState[key].error = 'This field is required'
            }
        }
        return newState;
    }
}