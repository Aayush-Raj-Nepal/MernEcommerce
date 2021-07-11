import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { isAutheticated } from "../auth";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import swal from "sweetalert2";

function Sidebar(props) {
  return (
    <div
      style={{ minHeight: "600px" }}
      className="sb-sidenav accordion sb-sidenav-dark"
    >
      <ProSidebar className="sb-sidenav-menu" collapsed={props.collapsed}>
        <SidebarContent>
          {" "}
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-tachometer"></i>}>
              Dashboard <Link to="/"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            {/* <MenuItem icon={<i className="fa fa-paint-brush"></i>}>
              Dashboard <link to="/"></link>{" "}
            </MenuItem> */}
            <Menu iconShape="square">
              <SubMenu
                title="Orders"
                icon={<i className="fa fa-file-invoice"></i>}
              >
                <MenuItem>
                  All Orders <Link to="/orders/all"></Link>
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu iconShape="square">
              <SubMenu
                title="Product"
                icon={<i className="fa fa-envelope"></i>}
              >
                <MenuItem>
                  Create products <Link to="/product/create"></Link>
                </MenuItem>
                <MenuItem>
                  All products <Link to="/product/all"></Link>
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu iconShape="square">
              <SubMenu title="Offers" icon={<i className="fa fa-gift"></i>}>
                <MenuItem>
                  Create Offers <Link to="/offers/create"></Link>
                </MenuItem>
                <MenuItem>
                  All Offers <Link to="/offers/all"></Link>
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu iconShape="square">
              <SubMenu title="Category" icon={<i className="fa fa-list"></i>}>
                <MenuItem>
                  Create Category <Link to="/category/create"></Link>
                </MenuItem>
                <MenuItem>
                  All Category <Link to="/category/all"></Link>
                </MenuItem>
              </SubMenu>
            </Menu>
            {/* <Menu iconShape="square">
              <SubMenu
                title="Locations"
                icon={<i className="fa fa-map-marker-alt"></i>}
              >
                <MenuItem>
                  Add Location <Link to="/location/create"></Link>
                </MenuItem>
                <MenuItem>
                  All Locations <Link to="/location/all"></Link>
                </MenuItem>
              </SubMenu>
            </Menu> */}
            <SubMenu title="Users" icon={<i className="fa fa-user"></i>}>
              <MenuItem>
                All Users <Link to="/users/all"></Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Admins" icon={<i className="fa fa-users"></i>}>
              <MenuItem>
                Create Admin <Link to="/admins/create"></Link>
              </MenuItem>
              <MenuItem>
                All Admins <Link to="/admins/all"></Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <SubMenu title="Extras" icon={<i className="fa fa-circle"></i>}>
              <MenuItem>
                Contact Us<Link to="/contactus"></Link>
              </MenuItem>
              <MenuItem>
                About Us <Link to="/aboutus"></Link>
              </MenuItem>
              <MenuItem>
                Privacy Policy <Link to="/privacypolicy"></Link>
              </MenuItem>
              <MenuItem>
                Terms & Conditions <Link to="/terms"></Link>
              </MenuItem>
              <MenuItem>
                Refund & Return Policy <Link to="/refundpolicy"></Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-envelope"></i>}>
              Contact Messages <Link to="/contactmessage"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-question-circle"></i>}>
              FAQ <Link to="/faq"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-newspaper"></i>}>
              Newsletter Mails <Link to="/newsletter"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<i className="fa fa-bars"></i>}
              onClick={() => swal.fire("Coming soon")}
            >
              More
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
