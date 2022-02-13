import styled from "styled-components";

export default function Modal({ onShowAnswer, children }) {
  return (
    <Modalwrapper>
      <Background onClick={onShowAnswer}></Background>
      <StyledModal>
        <h2>Answer is {children}!</h2>
        <button onClick={onShowAnswer}>okay!</button>
      </StyledModal>
    </Modalwrapper>
  );
}

const Modalwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  position: relative;
  z-index: 350;
  bottom: 0;
  left: 0;
  padding: 10px;
  margin-left: 2.5rem;
  margin-bottom: 15rem;
  width: 80%;
  border-radius: 15px;
  background-color: var(--third-c);
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
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 10%;
  background-color: grey;
`;
