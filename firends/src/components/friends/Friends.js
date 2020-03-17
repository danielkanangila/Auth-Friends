import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './../../utils/axiosAuth';
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err));
    }, [])
    return(
        <Wrapper>
            {!friends.length && <h1 className="loading">Loanding...</h1>}
            {friends.length > 0 && 
                <>
                    <h1>Friends</h1>
                    <div className="grid">
                        {friends.map(friend => <Friend key={friend.id} {...friend} />)}
                    </div>
                </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 30px 0;
    .loading {
        padding: 200px 0;
        text-align: center;
        color: grey;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        padding: 40px 0
    }
`;

export default Friends;