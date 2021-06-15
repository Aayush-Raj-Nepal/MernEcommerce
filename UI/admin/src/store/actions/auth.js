export const authenticate=(data)=>{
    localStorage.setItem("token", data.token)
    localStorage.setItem("access_level", data.access_level)
    localStorage.setItem('user',{name:data.user.name,email:data.user.email})
    let loggedIn=data.token && data.user?true:false
    localStorage.setItem('loggedIn',loggedIn)
    data.loggedIn=loggedIn
    return {
        type:'auth/Login',
        payload:data
    }
}
export const logout=()=>{
    localStorage.setItem("token", null)
    localStorage.setItem("access_level",null)
    localStorage.setItem('user',{})
    localStorage.setItem('loggedIn',false)
    return {
        type:'auth/Logout',
    }
}