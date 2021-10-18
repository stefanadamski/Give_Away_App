import React from 'react';
import '../help.scss'

const PagesTemplate = ({title, description, elements}) => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='template_header'> {title} </h1>
                    <p className='template_text'> {description} </p>
                </div>
                <p className='template_elements'> {elements} </p>
            </div>
            <div>
                <div>
                    <h1 className='template_header'> {title} </h1>
                    <p className='template_text'> {description} </p>
                </div>
                <p className='template_elements'> {elements} </p>
            </div>
            <div>
                <div>
                    <h1 className='template_header'> {title} </h1>
                    <p className='template_text'> {description} </p>
                </div>
                <p className='template_elements'> {elements} </p>
            </div>
        </div>
    );
};

export default PagesTemplate;
