import React from "react";
import { Consumer } from "../store/createContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { spaceSizes } from "../styles/typography";
import IntegraButton from "./Button";

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
  text-align: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spaceSizes.lg};
  width: 500px;
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

const Title = styled.h3`
  margin: 40px 0 0;
`;

const SubTitle = styled.p`
  margin: 10px 0 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CancelButton = styled(IntegraButton)`
  margin-left: 10px;
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
            You are about to leave Integra Plan’s website.
            <br />
            Press OK to continue or cancel to remain on the site.
          </SubTitle>
          <ButtonContainer>
            <IntegraButton
              isPrimary={true}
              fullWidth={true}
              onClick={e => {
                e.stopPropagation();
                window.location.href = externalLinkURL;
              }}
            >
              OK
            </IntegraButton>
            <CancelButton
              fullWidth={true}
              onClick={closeExternalLinkModal}
            >
              Cancel
            </CancelButton>
          </ButtonContainer>
        </Modal>
      ) : null
    }}
  </Consumer>
);
