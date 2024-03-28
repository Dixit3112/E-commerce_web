import "./head.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import flips from "../../assets/logo/flipkart-1.svg";
import BotHeader from "./bot-header";
import LoginModal from "../modal-pop/login/login/login-signup";

export default function Header() {
  return (
    <div className="mainHead">
      <div className="container">
        <div className="header">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img src={flips} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="All Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/mobiles">
                      Mobiles
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/computers">
                      Computers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/clothes">
                      Clothes
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/electronics">
                      Electronics
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">
                    <NavDropdown title="Child Fitness" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Children Clothe
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Fitness
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Hardware Tools
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Playing Equipments
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                  <Nav>
                    <LoginModal />
                  </Nav>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <BotHeader />
      </div>
    </div>
  );
}
