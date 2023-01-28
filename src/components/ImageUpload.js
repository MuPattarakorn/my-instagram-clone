import React, { useState, useEffect } from 'react';
import UserLogin from '../assets/img/mu.jpeg';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 10px;
    width: 100%;
`

const BlogPost = styled.div`
    display: flex;
`

const AddCaption = styled.input`
    height: 56px;
    width: 100%;
    font-size: 16px;
    padding-left: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
`
const Username = styled.div`
    font-weight: bold;
    margin-left: 8px;
    margin-top: 15px;
`

const UserCaptionPic = styled.img`
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 8px;
    margin-top: 8px;
    object-fit: fill;
    border-radius: 50%;
    border: 2px solid #DF3968;
`

const Post = styled.button`
    color: #4db8ff;
    background: #ffffff;
    border: 0;
    margin-top: 10px;
    cursor: pointer;
`

function ImageUpload() {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const [caption, setCaption] = useState('');

    function addPost() {
        setPost({
            username: "Mu",
            userCover: UserLogin,
            image:
                { url: "", caption: caption },
            comments: []
        })
    }

    const userData = [{
        username: "Mu",
        userCover: UserLogin,
        image:
            { url: "", caption: caption },
        comments: []
    }];

    const [post, setPost] = useState(userData);


    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
        setCaption(caption);
        // const data = localStorage.getItem("userData"); 
        const data = JSON.parse(localStorage.getItem("userData"));
        console.log(data);
    }, [caption, userData]);

    return (
        <Wrapper>
            <h1>+ Add Post</h1>
            <input type="file" onChange={handleChange} />
            <BlogPost>
                <UserCaptionPic src={UserLogin} />
                <Username>Mu</Username>
            </BlogPost>
            <BlogPost>
                <AddCaption
                    placeholder="Write a caption..."
                    value={caption}
                    name=""
                    onChange={(e) => setCaption(e.target.value)}
                    type='text'
                />
                <Post onClick={() => addPost()} type="submit">Share</Post>
            </BlogPost>
        </Wrapper>
    )
}

export default ImageUpload