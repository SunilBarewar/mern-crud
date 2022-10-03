import axios from "axios"

export const addUser = (data) => async (dispatch) =>{
    try{
        const res = await axios.post("http://localhost:8050/user",data)
        dispatch({type : "ADD",data: res.data})
    }catch(error){
        console.log(error)
    }
}
export const getUsers = () => async (dispatch) =>{
    try{
        const res = await axios.get("http://localhost:8050/user")
        // console.log("getting users")
        dispatch({type : "ADD_USERS",data: res.data})
    }catch(error){
        console.log(error)
    }
}

export const deleteUser = (id)  => async (dispatch) =>{
    try{
        await axios.delete(`http://localhost:8050/user/${id}`)
        dispatch({type : "DELETE",data: id})
    }catch(error){
        console.log(error)
    }
}