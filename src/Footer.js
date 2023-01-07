import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  text-align: right;
  background-color: white;
  padding: 7px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.005px;
`

export const Footer = () => {
    return (
      <FooterStyle>
        2023 SunnyDay-AgoraStates
      </FooterStyle>
    );
  };

export default Footer;