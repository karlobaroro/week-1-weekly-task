import React from 'react';

const HOC = (Prospect) => (props) => {

    const color = ['#B9F3E4','#A7727D','#698269','#F1DBBF'];
    const randomColor = color[Math.floor(Math.random() * color.length)]

    return <div style={{backgroundColor:randomColor,width:"100%",height:"100%"}}>
            <Prospect />
        </div>;
};

export default HOC;