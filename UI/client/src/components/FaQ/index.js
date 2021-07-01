import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function index() {
    return (
        <div>
            <div className="wrapper">
		<div className="gambo-Breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Frequently Asked Questions</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="all-product-grid">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="default-title mt-4">
							<h2>Frequently Asked Questions</h2>
							<img src="images/line.svg" alt=""/>
						</div>
						<Accordion defaultActiveKey="0" className="panel-group accordion pt-1">
							<Card className="panel panel-default">
								<div className="panel-heading">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="0" className="collapsed">
											Registration
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="0" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
							<Card className="panel panel-default">
								<div className="panel-heading">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="1" className="collapsed" >
											Account Related
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="1" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>	
						    <Card className="panel panel-default">
								<div className="panel-heading">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="2" className="collapsed" >
											Payment
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="2" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>	
						    <Card className="panel panel-default">
								<div className="panel-heading">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="3" className="collapsed" >
											Delivery Related
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="3"  className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
							<Card className="panel panel-default">
								<div className="panel-heading">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="4" className="collapsed" >
											Product Related
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="4" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
							<Card className="panel panel-default">
								<div className="panel-heading">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="5" className="collapsed" >
											Customer Related
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="5" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
							<Card className="panel panel-default">
								<div className="panel-heading" >
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="6" className="collapsed" >
											Refund & Return
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="6" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
							<Card className="panel panel-default">
								<div className="panel-heading" id="headingTwo">
									<div className="panel-title">
										<Accordion.Toggle as={Card.Header} eventKey="7" className="collapsed" >
											How Does it Work
										</Accordion.Toggle>
									</div>
								</div>
								<Accordion.Collapse eventKey="7" className="panel-collapse collapse fw-bold">
									<div className="panel-body">
										<Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
						</Accordion>							
					</div>
				</div>
			</div>
		</div>	
	</div>
        </div>
    )
}

export default index

