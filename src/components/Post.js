import React, { useState } from 'react';
import styled from 'styled-components';
import UserLogin from '../assets/img/mu.jpeg';

const Wrapper = styled.div`
    width: 100%;
`

function Post({ data }) {

    const [caption, setCaption] = useState(data.feeds);

    function addPost() {
        setCaption({
            username: "Mu",
            userCover: UserLogin,

        }
        )
    }

    return (
        <Wrapper>
            {/* <form> */}
            <h1>Caption</h1>
            {/* <input type="file" onChange={handleChange} /> */}
            <input
                placeholder="Write a caption..."
                value={caption}
                name=""
                onChange={e => setCaption(e.target.value)}
                type='text'
            />{caption}
            <button type="submit" onClick={() => addPost()}>Upload</button>
            {/* </form> */}
        </Wrapper>
    )
}

export default Post
