import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player'
import '../App.css';
import styled from 'styled-components';
import UserAvatar from '../assets/img/avatar.jpeg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Wrapper = styled.div`
    width: 100%;
`

const StoryUser = styled.div`
    min-width: 80px;
    min-height: 80px;
    margin-left: 8px;
    margin-right: 8px;
    
`

const Avatar = styled.img`
    display: block;
    width: 80px;
    height: 80px;
    margin-top: 60px;
    margin-bottom: 8px;
    object-fit: fill;
    border-radius: 50%;
    border: 3px solid #DF3968;
`

const StatusUsername = styled.div`
    font-size: 12px;
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    align: center;
`

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Stories = styled.div`
    width: auto;
    height: auto;
`

function Story({ data }) {
    const modalRoot = document.getElementById("modal-root");

    const Modal = props => {
        return ReactDOM.createPortal(
            <div className="overlay">{props.children}</div>,
            modalRoot
        )
    };

    const [openStory, setOpenStory] = useState(false);

    /* previous and next stoties */
    function Counter({ initialCount }) {
        const [count, setCount] = useState(initialCount);
        return (
            <>
                Count: {count}
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </>
        );
    }

    return (
        <Wrapper>
            {
                <StoryUser>
                    <Avatar onClick={() => setOpenStory(true)} src={data.userCover ? data.userCover : UserAvatar} alt={'avatar'} />
                    <center><StatusUsername>{data.username}</StatusUsername></center>
                </StoryUser>
            }
            {
                openStory && (

                    <ModalContainer onClick={() => setOpenStory(!openStory)}>{ }
                        <Modal onClick={() => setOpenStory(openStory)}>
                            <button
                                style={{ position: 'absolute', left: '33.33%', top: '50%', zIndex: '99999', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0 solid', borderRadius: '50%', padding: '5px' }}>
                                <FaArrowAltCircleLeft style={{ color: '#3366cc', fontSize: '30px', alignItems: 'center' }} />
                            </button>
                            <button
                                style={{ position: 'absolute', right: '33.33%', top: '50%', zIndex: '99999', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '0 solid', borderRadius: '50%', padding: '5px' }}>
                                <FaArrowAltCircleRight style={{ color: '#3366cc', fontSize: '30px', alignItems: 'center' }} />
                            </button>
                            <Stories>
                                <ReactPlayer
                                    url={data.storyUrl}
                                    className='react-player'
                                    playing='true'
                                    width='100%'
                                    height='100%' />
                            </Stories>
                        </Modal>
                    </ModalContainer>
                )
            }
        </Wrapper >
    )
}

export default Story
