const initialState = {
	token: {
		token: null,
		expiry: null,
	},
	user:{},
	access_level: null,
    loggedIn:false
}

const authReducer=(state=initialState,action)=>{
switch(action.type){
    case 'auth/Login':{
        let {token,user,access_level,loggedIn}=action.payload
        return {...state,token:token,user:user,access_level:access_level,loggedIn:loggedIn}
    }
    case 'auth/Logout':{
        return initialState
    }
    default:{
        return state
    }
}
}
export default authReducer