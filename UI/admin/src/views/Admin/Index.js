import React from 'react'
import {  useRouteMatch, Switch, Route } from "react-router-dom";
import AllAdmin from "./AllAdmins"
import CreateAdmin from "./Create"

// Components here
import Base from "../../Components/Base"
function Index() {
    let match =  useRouteMatch()

    return (
        <div>
            <Base>     <Switch>
                        <Route path={`${match.path}/all`}component={AllAdmin}></Route>
                        <Route path={`${match.path}/create`}component={CreateAdmin}></Route>
                        <Route path='/'   component={()=>(
                        <h1>Admin Index Page</h1>
                        )}></Route>
                        </Switch>
                        </Base>
        </div>
    )
}

export default Index
