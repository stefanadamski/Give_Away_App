import React from 'react';
import './three_columns.scss';

const ThreeColumns = () => {
    return (
        <div className="three_columns">
            <div className="column">
                <h1> 10 </h1>
                <h2> ODDANYCH WORKÓW </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <h1> 5 </h1>
                <h2> WSPARTYCH ORGANIZACJI </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <h1> 7 </h1>
                <h2> ZORGANIZOWANYCH ZBIÓREK </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>
        </div>
    );
};

export default ThreeColumns;
