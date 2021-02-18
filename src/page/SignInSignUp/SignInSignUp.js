
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import LogoMicroblog from "../../assets/png/logo.png";
import LogoWhiteMicroblog from "../../assets/png/logo-white.png";
//sass
import "./SignInSignUp.scss";
 
export default function SignInSignUp () {
    return (
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent />
            </Row>
        </Container>
    )
}
 
// Definimos un componente para la parte izquierda, que sólo se podrá usar en este archivo
function LeftComponent() {
    return (
        <Col className="signin-signup__left" xs={6}>
            <img src={LogoMicroblog} alt="Microblog" />
            <div>
                <h2>- Sigue lo que te interesa.</h2>
                <h2>- Entérate de qué está hablando la gente.</h2>
                <h2>- Únete a la conversación.</h2>
            </div>
        </Col>
    )
}
 
// Definimos otro componente para la parte derecha, que sólo se podrá usar en este archivo
function RightComponent() {
    return (
        <Col className="signin-signup__right" xs={6}>
            <h2>
                RightComponent...
            </h2>
        </Col>
    )
}
