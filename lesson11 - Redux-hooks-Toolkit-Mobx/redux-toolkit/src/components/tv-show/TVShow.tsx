import React from 'react'
import { TVShowData } from '../../data/TVShowData';
// import { LinkProps } from 'react-router-dom';


export const TVShow: React.FC = (props: any) => {
    const data: TVShowData = props.location.state.data;
    console.log('TVShow', data);
    return (
        <div>
            <h3>{data.title}</h3>
            {
                data.genres.map((item: string) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            <img src={data.imageOriginal} alt={data.title} />
            <p dangerouslySetInnerHTML={{__html:data.summary}}></p>
        </div>
    )
}

