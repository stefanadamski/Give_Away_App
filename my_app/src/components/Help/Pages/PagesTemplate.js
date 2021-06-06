import React from 'react';

const PagesTemplate = ({title, description, elements}) => {
    return (
        <div>
            <div>
                <div>
                    <h1> {title} </h1>
                    <p> {description}</p>
                </div>
                <p> {elements}</p>
            </div>
            <div>
                <div>
                    <h1> {title} </h1>
                    <p> {description}</p>
                </div>
                <p> {elements}</p>
            </div>
            <div>
                <div>
                    <h1> {title} </h1>
                    <p> {description}</p>
                </div>
                <p> {elements}</p>
            </div>
        </div>
    );
};

export default PagesTemplate;