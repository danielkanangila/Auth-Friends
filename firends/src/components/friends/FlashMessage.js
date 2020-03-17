import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FlashMessage = ({message}) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true);
        let count = 0;
        const intervale = setInterval(() => {
            count++ 
            if(count === 5) {
                setShow(false);
                return clearInterval(intervale);
            }
        }, 1000);
    }, [message])
    
    return(
        <>
            {message.text &&
                <Wrapper className={show ? "animated fadeIn" : "animated fadeOut"} type={message.type}>
                    <p>{message.text}</p>
                </Wrapper>
            }
        </>
    )
}

const Wrapper = styled.div`
    background-color: ${props => props.type === 'success' ? '#2e7d32' : '#b71c1c'};
    color: #fff;
    padding: 15px;
    margin: 35px 0 0px;
    transition: .5s;
    &.fadeOut {
        display: none;
    }
`

export default FlashMessage;