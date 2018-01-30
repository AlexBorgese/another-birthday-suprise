import React, { PureComponent } from 'react';
import moment from 'moment';

class DatePicker extends PureComponent {
    constructor(){
        super();
        this.state = {
            startDate: moment()
        }
    }
}

export default DatePicker;
