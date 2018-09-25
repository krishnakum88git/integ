import React from "react";
import { Consumer } from "../store/createContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { font } from "../styles/typography";

const ModalWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  height: 400px;
  width: 600px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  flex-direction: column;
  border: 1px solid #222222;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 64px;
    height: 64px;
    color: #F7B731;
  }
`;

const Title = styled.h1`
  ${font} font-size: 32px;
  color: #333;
  text-align: center;
  margin: 40px 0 0;
  font-weight: normal;
`;

const SubTitle = styled.h2`
  ${font} font-size: 16px;
  color: #000;
  text-align: center;
  margin: 10px 0 50px;
  font-weight: normal;
`;

const Button = styled.button`
  ${font} height: 64px;
  width: 100%;
  margin: 0 10px;
  background-color: #D1D8DF;
  border: none;
  border-radius: 32px;
  color: #495969;
  display: block;
  font-size: 16px;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #006EF5;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Modal = ({ onClose, children }) => (
  <ModalWrapper onClick={onClose}>
    <ModalContent onClick={e => e.stopPropagation()}>{children}</ModalContent>
  </ModalWrapper>
);

export default () => (
  <Consumer>
    {({ isExternalLinkModalOpen, closeExternalLinkModal, externalLinkURL }) => {
      return isExternalLinkModalOpen ? (
        <Modal onClose={closeExternalLinkModal}>
          <Icon icon="exclamation-triangle" />
          <Title>Leaving This Site</Title>
          <SubTitle>
            You are about to leave Integra Managed Care.
            <br />
            Press OK to continue or cancel to remain on the site.
          </SubTitle>
          <ButtonContainer>
            <PrimaryButton
              onClick={e => {
                e.stopPropagation();
                window.location.href = externalLinkURL;
              }}
            >
              OK
            </PrimaryButton>
            <Button onClick={closeExternalLinkModal}>Cancel</Button>
          </ButtonContainer>
        </Modal>
      ) : null
    }}
  </Consumer>
);
