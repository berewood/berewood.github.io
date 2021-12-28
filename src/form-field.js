import {wrapEntry} from "./utils";

class FormField {
    constructor(id, accessor, suffix) {
        this.id = id;
        this.accessor = accessor;
        this.suffix = suffix
    }

    process(state) {
        return [wrapEntry(this.id, this.suffix), this.accessor(state)];
    }
}

export default FormField;
