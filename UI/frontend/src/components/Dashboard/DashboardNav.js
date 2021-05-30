import React from 'react'

function DashboardNav() {
    return (
        <div>
            <div className="left-side-tabs">
							<div className="dashboard-left-links">
								<a href="dashboard_overview.html" className="user-item active"><i className="uil uil-apps"></i>Overview</a>
								<a href="dashboard_my_orders.html" className="user-item"><i className="uil uil-box"></i>My Orders</a>
								<a href="dashboard_my_rewards.html" className="user-item"><i className="uil uil-gift"></i>My Rewards</a>
								<a href="dashboard_my_wallet.html" className="user-item"><i className="uil uil-wallet"></i>My Wallet</a>
								<a href="dashboard_my_wishlist.html" className="user-item"><i className="uil uil-heart"></i>Shopping Wishlist</a>
								<a href="dashboard_my_addresses.html" className="user-item"><i className="uil uil-location-point"></i>My Address</a>
								<a href="sign_in.html" className="user-item"><i className="uil uil-exit"></i>Logout</a>
							</div>
						</div>
        </div>
    )
}

export default DashboardNav
