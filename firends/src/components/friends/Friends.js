import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './../../utils/axiosAuth';
import Friend from './Friend';
import { Grid, Button } from '../styled-components';
import Form from './Form';
import FlashMessage from './FlashMessage';

const BASE_URL = 'http://localhost:5000/api/friends';

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [defaultFormData, setDefaultFormData] = useState({});
    const [message, setMessage] = useState({});
    useEffect(() => {
        axiosWithAuth().get(BASE_URL)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err));
    }, []);
    const handleFriend = data => {
        if (defaultFormData.id) {
            axiosWithAuth().put(`${BASE_URL}/${defaultFormData.id}`, data)
            .then(res => {
                setFriends(res.data);
                setMessage({
                    type: "success",
                    text: `Friend with name: ${data.name} has been updated.`
                })
            })
            .catch(err => console.log(err));
        } else {
            axiosWithAuth().post(`${BASE_URL}`, data)
            .then(res => {
                setFriends(res.data);
                setMessage({
                    type: "success",
                    text: `Friend with name: ${data.name} has been created.`
                })
            })
            .catch(err => console.log(err));
        }
        setDefaultFormData({})
    }
    const onDelete = id => {
        axiosWithAuth().delete(`${BASE_URL}/${id}`)
            .then(res => {
                setFriends(res.data);
                setMessage({
                    type: "success",
                    text: `Friend with id: ${id} has been deleted.`
                })
            })
            .catch(err => console.log(err));
    }
    return(
        <Wrapper>
            {!friends.length && <h1 className="loading">Loanding...</h1>}
            {friends.length > 0 && 
                <>
                    <div className="header">
                        <h1>Friends</h1>
                        <Button __type="primary" onClick={() => setDefaultFormData({name: '', age: '', email: ''})}>Add Friends</Button>
                    </div>
                    <FlashMessage message={message} />
                    <Form onSubmit={handleFriend} data={defaultFormData} />
                    <Grid>
                        {friends.map(friend => <Friend onDelete={onDelete} key={friend.id} onEdit={setDefaultFormData} {...friend} />)}
                    </Grid>
                </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 30px 0;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .loading {
        padding: 200px 0;
        text-align: center;
        color: grey;
    }
`;

export default Friends;