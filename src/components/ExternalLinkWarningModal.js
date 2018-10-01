import React, { Component } from "react";
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
  z-index: 999;
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
    color: #f7b731;
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

class ExternalLinkWarningModal extends Component {
  constructor(props) {
    super(props);
    this.acceptButtonRef = React.createRef();
  }
  componentDidMount() {
    if (this.acceptButtonRef.current) {
      this.acceptButtonRef.current.focus();
    }
  }
  render() {
    return (
      <Modal onClose={this.props.closeExternalLinkModal}>
        <Icon icon="exclamation-triangle" />
        <Title>Leaving This Site</Title>
        <SubTitle>
          You are about to leave Integra Plan’s website.
          <br />
          Press OK to continue or cancel to remain on the site.
        </SubTitle>
        <ButtonContainer>
          <IntegraButton
            innerRef={this.acceptButtonRef}
            isPrimary={true}
            fullWidth={true}
            onClick={e => {
              e.stopPropagation();
              window.location.href = this.props.externalLinkURL;
            }}
          >
            OK
          </IntegraButton>
          <CancelButton fullWidth={true} onClick={this.props.closeExternalLinkModal}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </Modal>
    );
  }
}

const WrappedModal = () => (
  <Consumer>
    {({ isExternalLinkModalOpen, closeExternalLinkModal, externalLinkURL }) =>
      isExternalLinkModalOpen ? (
        <ExternalLinkWarningModal
          closeExternalLinkModal={closeExternalLinkModal}
          externalLinkURL={externalLinkURL}
        />
      ) : null
    }
  </Consumer>
);


export default WrappedModal;
