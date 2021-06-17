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

function Sidebar(props) {
  return (
    <div style={{ height: "600px" }}>
      <ProSidebar collapsed={props.collapsed}>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-paint-brush"></i>}>
              Dashboard <link to="/"></link>{" "}
            </MenuItem>
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
            <SubMenu title="Category" icon={<i className="fa fa-list"></i>}>
              <MenuItem>
                Create Category <Link to="/category/create"></Link>
              </MenuItem>
              <MenuItem>
                All Category <Link to="/category/all"></Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <SubMenu title="Product" icon={<i className="fa fa-envelope"></i>}>
              <MenuItem>
                Create products <Link to="/product/create"></Link>
              </MenuItem>
              <MenuItem>
                All products <Link to="/product/all"></Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-user"></i>}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<i className="fa fa-heart"></i>}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-user"></i>}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<i className="fa fa-heart"></i>}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<i className="fa fa-user"></i>}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<i className="fa fa-heart"></i>}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>Developed By AsoftNepal</SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
