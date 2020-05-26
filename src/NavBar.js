import React, { Component } from 'react';
import { MDBNavbar, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, NavbarBrand }
  from 'mdbreact';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseID: ''
    }
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  clickLogo = () => {
    this.props.newUser();
    this.setState({ collapseID: '' })
  }

  render() {
    return (
      <div>
        <main>
          <MDBNavbar className="navBarCustom" color="light-blue lighten-3" light fixed="top">
            <NavbarBrand className="nav-size" href="/" onClick={this.clickLogo}>
              <img className="logo-tender" src={"https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574074799/ffffffheart_fhfafu.png"} style={{ width: 50 }} alt="Tender Logo" />
              <span className="app-name">Tender</span></NavbarBrand>
            <div className="navbar-ic">
              <MDBNavbarToggler className="navbar-icon" onClick={this.toggleCollapse('navbarCollapse1')} />
            </div>
            <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} exact to="/"> <span className="link-menu">Home</span></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} exact to="/settings"><span className="link-menu">Settings</span></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} exact to="/messages"><span className="link-menu">Messages</span></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} exact to="/chat"><span className="link-menu">Chat</span></MDBNavLink>
                </MDBNavItem>
              </NavbarNav>
            </MDBCollapse>

          </MDBNavbar>
        </main>
      </div>

    );
  }
}





export default NavBar; 