import React from 'react';

const List = (props) => {
    return(
    <div className='list'>
        <p>{props.item}</p>
    </div>
    );
}

export default List;