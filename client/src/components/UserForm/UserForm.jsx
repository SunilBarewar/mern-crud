import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const UserForm = () => {

    // const [data, setData] = useState({})

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        age: 18,
        gender: ""
    })
    const handleAdd = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8050/user', userDetails)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    console.log(userDetails);
    return (
        <Form>
            <h2>User Form</h2>
            <Wrapper>
                <Input name='name'  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} type="text" placeholder='Name' />
                <Input name='email' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Email' />
                <Input name='age' onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })} type="number" placeholder='Age' />
                {/* <input type="radio" name="" id="" /> */}
                <Gender>
                    <label>Gender</label>
                    <GenderDiv>
                        <Input value='male' onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })} type="radio" name="gender" />
                        <label>Male</label>
                    </GenderDiv>
                    <GenderDiv>
                        <Input value='female' onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })} type="radio" name="gender" />
                        <label>Female</label>
                    </GenderDiv>
                    <GenderDiv>
                        <Input value='other' onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })} type="radio" name="gender" />
                        <label>Other</label>
                    </GenderDiv>
                </Gender>
                <Button onClick={(e) => handleAdd(e)} type='submit'>Add</Button>
            </Wrapper>
        </Form>
    )
}

const Form = styled.form`
    flex: 4;
    height: 100%;
    width: 100%;
    padding: 1px;
    padding: 1rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    padding: 2rem;
    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

const Input = styled.input`
    width: 100%;
    padding: 15px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #727272;
    font-size: 15px;
`

const Gender = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #727272;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`
const GenderDiv = styled.div`
    display: flex;
    gap: 5px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Button = styled.button`
    padding: 15px 30px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    color: whitesmoke;
    border-radius: 5px;
    background-color: dodgerblue;
    cursor: pointer;
`

export default UserForm