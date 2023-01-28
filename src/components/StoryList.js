import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Story from './Story';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 170px;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #dbdddb;
    margin-top: 20px;
    display: flex;
    overflow: scroll;
`

function StoryList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://run.mocky.io/v3/f48649bf-2bfd-48db-9a64-5c8ad0646186')
            .then((response) => {
                console.log(response.data.story);
                setData(response.data.story);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Wrapper>
            {
                data.map((story, i) => (
                    <Story key={i} data={story} />
                ))
            }
        </Wrapper>
    )
}

export default StoryList
