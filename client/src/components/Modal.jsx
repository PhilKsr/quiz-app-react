import styled from "styled-components";
import checked_circle from "../images/check_circle.svg";

function Modal({ onShowAnswer, children }) {
  return (
    <>
      <Background onClick={onShowAnswer}></Background>
      <StyledModal>
        <h2>Answer is {children}</h2>
      </StyledModal>
    </>
  );
}

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 350;
  padding: 10px;
  width: 50%;
  border-radius: 15px;
  background-color: var(--third-c);

  button {
    border: none;
    background: none;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 60%;
  background-color: grey;
`;
