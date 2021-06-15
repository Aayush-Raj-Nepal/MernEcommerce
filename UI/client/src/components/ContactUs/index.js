import React from 'react'
import Form from './Form.js';
import Location from './Location.js';

function ContactUs() {
    return (
        <div> <div className="wrapper">
		<div className="gambo-Breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="all-product-grid">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<Location></Location>
					</div>
					<div className="col-lg-6 col-md-6">
                        <Form></Form>
				</div>
			</div>
		</div>	
	</div>
           </div> 
        </div>
    )
}

export default ContactUs
