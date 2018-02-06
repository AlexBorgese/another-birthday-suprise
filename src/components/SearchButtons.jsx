import React from 'react';

import { trivagoUrl } from '../utils/travelSiteHelpers';

const trivago = (startDate, endDate) => {
    window.open(trivagoUrl(startDate, endDate));
}

export default ({ startDate, endDate}) => (
    <div>
        <button><a onClick={ (startDate, endDate) => trivago(startDate, endDate) } target="_blank">TRIVAGO</a></button>
        <button><a href="http://google.com" target="_blank">Some more Text</a></button>
        <button><a href="http://google.com" target="_blank">Some  even more Text</a></button>
    </div>
);
