const initialState = {
    usersData : []
}

const Reducer =   (state =initialState , action) => {
        switch(action.type){
            case 'ADD':
                return {...state ,usersData : [action.data,...state.usersData]}
            case 'ADD_USERS':
                
                return {...state, usersData : [...action.data]}
           case 'DELETE':
                const newData = state.usersData.filter(user => user._id !== action.data)
                return {...state,usersData:[...newData]}
            default:
            return state
        }
    }


    export default Reducer