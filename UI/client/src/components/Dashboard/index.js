import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardNav from './DashboardNav'
import {  useRouteMatch, Switch, Route } from "react-router-dom";
import Overview from './Overview'
import Order from './Order'
import Reward from './Reward'
import Wallet from './Wallet'
import Wishlist from './Wishlist'
import Address from './Address'

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
                        <Route path={`${match.path}/order`}component={Order}></Route>
                        <Route path={`${match.path}/reward`}component={Reward}></Route>
                        <Route path={`${match.path}/wallet`}component={Wallet}></Route>
                        <Route path={`${match.path}/wishlist`}component={Wishlist}></Route>
                        <Route path={`${match.path}/address`}component={Address}></Route>
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
