/**
 * Created by HP on 26-Dec-17.
 */


export default class FieldsValidator {

    isRequired (value) {
        if (value === '' || value === undefined || !value){
            return false;
        }
        return true;
    }
}