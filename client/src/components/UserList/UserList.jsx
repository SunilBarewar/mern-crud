import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import User from '../User/User'
import axios from 'axios'
import io from 'socket.io-client'

const UserList = () => {

  const socket = useRef()

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8050/user')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    socket.current = io("http://localhost:8051")
  }, [users])

  return (
    <Container>
      <h2>User List</h2>
      <Wrapper>
        {
          users.map(user => <User user={user} />)
        }
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    flex: 6;
    height: 100%;
    width: 100%;
    padding: 1rem;

    @media screen and (max-width: 768px) {
      padding: 10px;
    }
`

const Wrapper = styled.ul`
`

export default UserList