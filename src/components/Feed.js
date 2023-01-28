import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiSend } from 'react-icons/fi';
import styled from 'styled-components';
import UserAvatar from '../assets/img/avatar.jpeg';
import UserLogin from '../assets/img/mu.jpeg';

const Wrapper = styled.div`
    width: 100%;
`

const Container = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid #dbdddb; */
    background-color: #ffffff;
    margin-bottom: 20px;
`

const Header = styled.div`
    height: 60px;
    margin-top: 10px;
    border-bottom: 1px solid #dbdddb;
    display: flex;
`

const Avatar = styled.img`
    display: block;
    width: 50px;
    height: 50px;
    margin-left: 8px;
    margin-bottom: 8px;
    object-fit: fill;
    border-radius: 50%;
    border: 3px solid #DF3968;
`

const Username = styled.div`
    font-weight: bold;
    margin-top: 15px;
    margin-left: 8px;
`

const Image = styled.img`
    width: 100%;
    min-width: 30px;
    min-height: 30px;
    object-fit: fill;
`

const ReactImage = styled.div`
    margin-left: 8px;
    display: flex;
`

const Comment = styled.div`
    margin: 10px;
    display: flex;
`

const Comments = styled.div`
    height: auto;
    margin-top: 10px;
    display: flex;
    margin-left: 8px;
`

const View = styled.span`
    margin-left: 18px;
    color: #808080;
    cursor: pointer;
`

const UsernameComment = styled.div`
    font-weight: bold;
    margin-left: 8px;
`

const OtherComment = styled.div`
    margin-left: 8px;
`

const UserCommentPic = styled.img`
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 8px;
    margin-bottom: 8px;
    object-fit: fill;
    border-radius: 50%;
    border: 2px solid #DF3968;
`

const Caption = styled.div`
    margin-left: 8px;
`

const BlogComment = styled.div`
    display: flex;
`

const AddComment = styled.input`
    height: 56px;
    width: 100%;
    font-size: 16px;
    padding-left: 18px;
    margin-top: 10px;
    border: 1px solid #ccc;
`

const Post = styled.button`
    color: #4db8ff;
    background: #ffffff;
    border: 0;
    margin-top: 10px;
    cursor: pointer;
`

const CommentBox = styled.div`
    width: 100%;
    display: contents;
`

function Feed({ data }) {
    const [inputText, setInputText] = useState("");
    const [comments, setComments] = useState(data.comments);
    const [show, setShow] = useState(false);

    function addComment() {
        setComments([
            ...comments, {
                username: "Mu",
                userCover: UserLogin,
                commentText: inputText
            }
        ])
        setInputText("")
    }
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Avatar src={data.userCover} alt={'avatar'} />
                    <Username>{data.username}</Username>
                </Header>
                <Image src={data.image.url} alt={'img'}></Image>
                <ReactImage>
                    <FiHeart style={{ color: 'black', fontSize: '20px', margin: '8px' }} />
                    <FiMessageCircle style={{ color: 'black', fontSize: '20px', margin: '8px' }} />
                    <FiSend style={{ color: 'black', fontSize: '20px', margin: '8px' }} />
                </ReactImage>
                <Comment>
                    <UsernameComment>{data.username}</UsernameComment>
                    <Caption>{data.image.caption}</Caption>
                </Comment>
                <View onClick={() => setShow(!show)}>{comments.length > 0 ? 'View all ' + comments.length + ' comments' : comments}</View>

                {comments.map((comment, index) => (
                    <Wrapper>
                        {show ? <Comments>
                            <UserCommentPic src={comment.userCover ? comment.userCover : UserAvatar}></UserCommentPic>
                            <UsernameComment>{comment.username}</UsernameComment>
                            <OtherComment>{comment.commentText}</OtherComment>
                        </Comments> : null}
                    </Wrapper>
                ))
                }

                <BlogComment>
                    <CommentBox>
                        <AddComment type="text"
                            placeholder="Add a comment..."
                            value={inputText}
                            name=""
                            id=""
                            onChange={(e) => setInputText(e.target.value)} />
                        <Post type="submit" onClick={() => addComment()}>Post</Post>
                    </CommentBox>
                </BlogComment>
            </Container>
        </Wrapper>
    )

}
export default Feed
