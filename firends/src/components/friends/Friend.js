import React from 'react';
import styled from 'styled-components';

const Friend = ({name, age, email, id, onEdit, onDelete}) => {
    return(
        <Wrapper>
            <div className="avatar">
                <i className="fa fa-user"></i>
            </div>
            <div className="firend-details">
                <div className="text">
                    <h2>{name}</h2>
                    <p>Email: {email}</p>
                    <p>Age: {age}</p>
                </div>
                <div className="action">
                    <button onClick={() => onEdit({name, age, email, id})} className="btn-primary edit">Edit</button>
                    <button onClick={() =>  onDelete(id)} className="btn-danger">Delete</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    padding: 15px;

    .avatar {
        width: 50px;
        height: 50px;
        background-color: #dddddd;
        margin-right: 15px;
        border-radius: 50px;
        padding: 12px 0px;
        text-align: center;
        font-size: 1.5rem;
    }
    h2 {
        font-size: 1.2rem;
        padding: 0 0 5px;
    }
    .action {
        margin-top: 10px;
        .edit {
            margin-right: 10px;
        }
    }
`;

export default Friend;