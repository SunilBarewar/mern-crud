import './App.css';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import {io} from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux' 
import { getUsers } from './actions/action'
function App() {
  // const socket = useRef()
  // socket.current = io("http://localhost:8050")
  
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getUsers());
},[])

  return (
    <Container>
      <Header />
      <Wrapper>
        <UserForm />
        <UserList />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 5rem;
  @media screen and (max-width: 768px) {
    height: fit-content;
    padding: 1rem;
  }
`

const Wrapper = styled.div`
  margin: 2rem;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 1rem;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 768px){
    flex-direction: column;
    height: fit-content;
  }
`

export default App;
