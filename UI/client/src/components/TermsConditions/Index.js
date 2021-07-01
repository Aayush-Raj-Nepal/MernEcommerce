import React, { useEffect, useState } from "react";
import * as fb from "../../api/firebase";
import renderHTML from "react-render-html";

function TermsConditions() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchExtras = () => {
      fb.emailCollection
        .orderBy("createdOn", "desc")
        .onSnapshot((snapshot) => {
          let extrasArray = [];
          snapshot.forEach((doc) => {
            let post = doc.data();
            post.id = doc.id;
            extrasArray.push(post);
          });
          let contact = extrasArray.filter((e) => e.type == "TermsConditions")[0];
          setContent(contact ? contact.content : "");
        });
    };

    fetchExtras();
  }, []);

    return (
        <div>
            {""}
            <div className="wrapper">
		<div className="gambo-Breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
						<div className="job-main-dt">
                        {renderHTML(content)}
						</div>
						{/* <div className="job-des-dt142 policy-des-dt">
							<h4>Personal Information</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum turpis vitae facilisis tempus. Donec in blandit risus, eget pretium mauris. Aliquam nec venenatis massa. Ut vel nulla id velit dictum rutrum nec vel ex. Phasellus sit amet faucibus massa, in feugiat augue. Maecenas eget dapibus turpis, a finibus justo. Suspendisse pretium lorem non lorem faucibus, non sagittis nisi finibus. Sed efficitur massa ac nibh condimentum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus, ex ut congue interdum, nibh turpis malesuada orci, vel vulputate arcu velit condimentum orci. Ut sed dictum lacus.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>What information is, or may be, collected form you?</h4>
							<p>Donec maximus lorem vitae risus molestie sollicitudin. Ut sem lorem, consequat et tortor sit amet, viverra porttitor erat. Suspendisse aliquet arcu vel auctor maximus. Nunc in euismod purus. Aliquam non varius quam. Sed eros magna, tempus ullamcorper auctor vitae, pretium eu elit. Integer sagittis eu purus eget venenatis. Ut rhoncus tempor velit vitae consequat. Quisque consequat, enim eu cursus eleifend, velit mi viverra arcu, sed elementum dolor odio eget neque.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>How do we Collect the Information ?</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum turpis vitae facilisis tempus. Donec in blandit risus, eget pretium mauris. Aliquam nec venenatis massa. Ut vel nulla id velit dictum rutrum nec vel ex. Phasellus sit amet faucibus massa, in feugiat augue. Maecenas eget dapibus turpis, a finibus justo. Suspendisse pretium lorem non lorem faucibus, non sagittis nisi finibus. Sed efficitur massa ac nibh condimentum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus, ex ut congue interdum, nibh turpis malesuada orci, vel vulputate arcu velit condimentum orci. Ut sed dictum lacus.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>How is information used ?</h4>
							<p>Donec maximus lorem vitae risus molestie sollicitudin. Ut sem lorem, consequat et tortor sit amet, viverra porttitor erat. Suspendisse aliquet arcu vel auctor maximus. Nunc in euismod purus. Aliquam non varius quam. Sed eros magna, tempus ullamcorper auctor vitae, pretium eu elit. Integer sagittis eu purus eget venenatis. Ut rhoncus tempor velit vitae consequat. Quisque consequat, enim eu cursus eleifend, velit mi viverra arcu, sed elementum dolor odio eget neque.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>With whom your information will be shared</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum turpis vitae facilisis tempus. Donec in blandit risus, eget pretium mauris. Aliquam nec venenatis massa. Ut vel nulla id velit dictum rutrum nec vel ex. Phasellus sit amet faucibus massa, in feugiat augue. Maecenas eget dapibus turpis, a finibus justo. Suspendisse pretium lorem non lorem faucibus, non sagittis nisi finibus. Sed efficitur massa ac nibh condimentum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus, ex ut congue interdum, nibh turpis malesuada orci, vel vulputate arcu velit condimentum orci. Ut sed dictum lacus.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>What Choice are available to you regarding collection, use and distribution of your information ?</h4>
							<p>Donec maximus lorem vitae risus molestie sollicitudin. Ut sem lorem, consequat et tortor sit amet, viverra porttitor erat. Suspendisse aliquet arcu vel auctor maximus. Nunc in euismod purus. Aliquam non varius quam. Sed eros magna, tempus ullamcorper auctor vitae, pretium eu elit. Integer sagittis eu purus eget venenatis. Ut rhoncus tempor velit vitae consequat. Quisque consequat, enim eu cursus eleifend, velit mi viverra arcu, sed elementum dolor odio eget neque.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>How can you correct inaccuracies in the information?</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum turpis vitae facilisis tempus. Donec in blandit risus, eget pretium mauris. Aliquam nec venenatis massa. Ut vel nulla id velit dictum rutrum nec vel ex. Phasellus sit amet faucibus massa, in feugiat augue. Maecenas eget dapibus turpis, a finibus justo. Suspendisse pretium lorem non lorem faucibus, non sagittis nisi finibus. Sed efficitur massa ac nibh condimentum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus, ex ut congue interdum, nibh turpis malesuada orci, vel vulputate arcu velit condimentum orci. Ut sed dictum lacus.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>Policy updates</h4>
							<p>Donec maximus lorem vitae risus molestie sollicitudin. Ut sem lorem, consequat et tortor sit amet, viverra porttitor erat. Suspendisse aliquet arcu vel auctor maximus. Nunc in euismod purus. Aliquam non varius quam. Sed eros magna, tempus ullamcorper auctor vitae.</p>
						</div>
						<div className="job-des-dt142 policy-des-dt">
							<h4>Contact Information</h4>
							<p>	
								Innovative Retail Concepts Pvt Ltd,<br>
								1st Floor, Sua Road, Ludhiana,<br>
								Near Pakhowal Road, Punjab-141001 INDIA<br>
								Tel.: +91 8437176189<br>
								Email id: customerservice@gambosupermarket.com<br>
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</div>	
	</div>
        </div>
    );
}

export default TermsConditions;