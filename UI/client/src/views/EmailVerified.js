import React from 'react'
import Swal from 'sweetalert2'
import {useHistory} from "react-router-dom"
function EmailNotVerified({location}) {
    console.log(location)
    function getQueryVariable(variable) {
        var query = location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }
    let history=useHistory()
    Swal.fire({
        title:getQueryVariable('message'),icon:getQueryVariable('icon')
    }).then(r=>{
        history.push("/signin")
    })
    return (
        <div>
            {/* <SignIn></SignIn> */}
        </div>
    )
}

export default EmailNotVerified
