import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

//helper function
let average = (data) => {
    //Calculate the average: lodash round and sum
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={150} width={180} data={props.data}>
                <SparklinesLine color={props.color} style={{fill:'none', strokeWidth: 1.5}}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
    )
}
