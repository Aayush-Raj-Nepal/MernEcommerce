const initialState={
        name:'',
        email:''
}
 const userReducer=(state=initialState,action)=>{
    switch(action.Type){
        case 'user/AddUser':{
            return {...state,user:action.payload}
        }
        default:{
            return state
        }
    }
}
export default userReducer