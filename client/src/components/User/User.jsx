import React from 'react'
import styled from 'styled-components'

const User = ({ user,setId }) => {
  
    return (
        <List id={user._id}>
            <Container>{user.name}</Container>
            <Container>{user.email}</Container>
            <Container  style={{width: "100px", padding: "8px"}}>{user.age}</Container>
            <Container style={{width: "100px" , padding: "8px"}}>{user.gender}</Container>
            <Container >
                <Edit>Edit</Edit>
                <Delete onClick={() => setId(user._id)}>Delete</Delete>
            </Container>
        </List>
    )
}

const List = styled.li`
    width: 100%;
    /* border: 1px solid blueviolet; */
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 1rem; */
    margin-top: 2rem;
`

const Container = styled.div`
    width: 100%;
    align-items: center;
    /* max-width: fit-content; */
    font-size: 14px;
    text-align: center;
`

const Edit = styled.button`
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 12px;
    font-weight: 300;
    border-radius: 5px;
    background-color: dodgerblue;
    `

const Delete = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    background-color: #424242;
    margin: 2px;
`

export default User