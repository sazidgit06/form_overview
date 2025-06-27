import React from 'react';
import Special from '../Special/Special';
import Friend from '../Friend/Friend';

const Cousin = ({name}) => {
    return (
        <div>
            <h4>cousin</h4>
            <p>{name}</p>
            <section>
                {
                    name === 'rownok' && <Special></Special>
                }
                {
                    name === 'rejwan' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;