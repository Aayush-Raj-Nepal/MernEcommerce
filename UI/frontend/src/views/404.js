import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
function PageNotFound() {
    return (
        <div>
            <Header></Header>
            	<div className="wrapper" >
		<div className="default-dt">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="default_tabs">
							<nav>
								<div className="nav nav-tabs tab_default  justify-content-center">
									<Link className="nav-item nav-link active" to="/">Return to Home</Link>
								
								</div>
							</nav>						
						</div>
						<div className="title129">
                            <h2 className="text-light">404</h2 >	
							<h2>Sorry! the page you are looking for doesn't exist</h2>
						</div>
					</div>
				</div>
			</div>
			
		</div>
        </div>
		<Footer></Footer>
        </div>
    )
}

export default PageNotFound
