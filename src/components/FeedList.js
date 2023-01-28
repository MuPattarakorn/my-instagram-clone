import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from './Feed';
import ImageUpload from './ImageUpload';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`

function FeedList() {

  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    axios.get('https://run.mocky.io/v3/a210a8f1-530c-42f1-b46f-25bd65d558fa')
      .then((res) => {
        const data = res.data.feeds;
        setFeeds(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <ImageUpload data={feeds} />
      {
        feeds.map((feed, i) => (
          <Feed key={i} data={feed} />

        ))
      }
    </Wrapper>
  )

}

export default FeedList