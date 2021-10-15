import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, 
        DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithubSquare, faKaggle} from '@fortawesome/free-brands-svg-icons';



const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

   ;
    return (
      <div  >
        <Navbar light expand="md" style={{backgroundColor:"#B4F1FD"}}>
          <NavbarBrand  href="/" style={{paddingLeft:"5rem"}}>Ahmet Bolat </NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-auto" />
          <Collapse isOpen={isOpen} style={{justifyContent:"flex-end", paddingRight:"5rem" , textShadow: "0 0 black"}} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink  href="/"><FontAwesomeIcon icon={faHome} style={{marginRight:"0.25em"}}/>Home</NavLink>
              </NavItem>
             
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Link className="text-decoration-underline" to="/aboutMe"> About Me </Link>
              </DropdownToggle>
              <DropdownMenu right style={{backgroundColor:"#B4F1FD"}}>
                
                <DropdownItem>
                <NavLink href="https://www.linkedin.com/in/ahmet-bolat-01196183/"> 
                <FontAwesomeIcon icon={faLinkedin} style={{marginRight:"0.25em"}}/>
                  LinkedIn Profile 
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://github.com/bolatah"> 
                <FontAwesomeIcon icon={faGithubSquare} style={{marginRight:"0.25em"}}/>
                GitHub Profile </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://www.kaggle.com/kurban81"> 
                <FontAwesomeIcon icon={faKaggle} style={{marginRight:"0.25em"}}/>
                kaggle Profile </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://www.credly.com/users/ahmet-bolat/badges"> 
                Credly Profile </NavLink>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>

              <NavItem>
                  <NavLink href="/interests">Interests</NavLink>
              </NavItem>

            <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Achievements
                  </DropdownToggle>
                  <DropdownMenu right style={{backgroundColor:"#B4F1FD"}}>
                    <DropdownItem>
                    <NavLink href="/masterthesis"> Master Thesis </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
            </UncontrolledDropdown>
            
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                 <Link className="text-decoration-underline" to="/aboutMe#contact"> Contact </Link>
                </DropdownToggle>
                <DropdownMenu right style={{backgroundColor:"#B4F1FD"}} >
                  <DropdownItem>
                   <NavLink href="/contactMe"> Contact Me</NavLink>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
           
              </Nav>
           
          </Collapse>
        </Navbar>
    </div>
    );
} 
export default Header;
