import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardNav from './DashboardNav'
import {  useRouteMatch, Switch, Route } from "react-router-dom";
import Overview from './Overview'

function Index() {
    let match =  useRouteMatch()
    return (
        <div>
            <div className="wrapper">
            <DashboardHeader></DashboardHeader>
            <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-4">
				<DashboardNav></DashboardNav>
		    </div>
            <div className="col-lg-9 col-md-8">
                        <Switch>
                        {/* <Route path="overview" exact component={Overview}/> */}
                        <Route path={`${match.path}/overview`}component={Overview}></Route>
                        </Switch>
                        {/* <Switch>
                        <Route path={`${match.path}/overview`} ><h1>Hello</h1></Route>
                        </Switch> */}
					</div>
                    </div>
                    </div>
                </div>
				</div>	
    )
}

export default Index
