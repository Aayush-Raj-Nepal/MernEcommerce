import React from 'react'

function DashboardHeader() {
    return (
        <div className="">
		<div className="gambo-Breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">User Dashboard</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="dashboard-group">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="user-dt">
							<div className="user-img">
								<img src="images/avatar/img-5.jpg" alt=""/>
								<div className="img-add">													
									<input type="file" id="file"/>
									<label for="file"><i className="uil uil-camera-plus"></i></label>
								</div>
							</div>
							<h4>Johe Doe</h4>
							<p>+91999999999<a href="#"><i className="uil uil-edit"></i></a></p>
							<div className="earn-points"><img src="images/Dollar.svg" alt=""/>Points : <span>20</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default DashboardHeader
