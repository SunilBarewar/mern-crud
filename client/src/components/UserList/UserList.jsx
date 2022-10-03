import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import User from '../User/User'
import axios from 'axios'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux' 
import { getUsers ,deleteUser} from '../../actions/action'
const UserList = () => {
  
  const socket = useRef()
  const dispatch = useDispatch();
  const [users, setUsers] = useState()
  const usersData = useSelector((state) => state.Reducer.usersData)
  const [id,setId] = useState(null)
  
  
  useEffect(() =>{
    dispatch(deleteUser(id))
    setId(null)
  },[id])
  console.log("re--render" , usersData)
  return (
    
    <Container>
      <h2>User List</h2>
      <Wrapper>
        {
          
          usersData.map(user => <User user={user} setId = {setId} />)
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