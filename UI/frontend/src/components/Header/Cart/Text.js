import React from "react";
import Sidebar from "react-sidebar";
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
        <div className="header_cart order-1">
        <a onClick={() => this.onSetSidebarOpen(true)} className="cart__btn hover-btn pull-bs-canvas-left" title="Cart"><i className="fa fa-shopping-cart"></i>Cart<ins></ins><i className="uil uil-angle-down"></i></a>
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
      </div>
    );
  }
}
 
export default App;