import styled from "styled-components";

export const StyledStepperHeaderItem = styled.div`
  position: relative;
  display: block;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    background: #2D5358;
    color:#222222;
    font-size:24px;
    font-weight:700;
    margin-bottom: 6px;
  }

  &::after {
    position: absolute;
    content: "";
    border-bottom: 1px solid #2D5358;
    width: calc(100% - 40px);
    top: 19px;
    left: 40px;
    z-index: 2;
  }

  &.completed {
    .step-counter {
      background-color: #1FC7D4;
      color:#222222;
      font-size:24px;
      font-weight:700
    }
    &::before {
      position: absolute;
      content: "";
      border-bottom: 2px solid #1FC7D4;
      width: 100%;
      top: 19px;
      left: -100%;
      z-index: 3;
    }
  }
 
  &.currentform{
    display:block !important;
  }

  &:first-child {
    &::before {
      content: none;
    }
  }

  &:last-child {
    &::after {
      content: none;
    }
  }
 
  .form-up{
    color: #1FC7D4;
  }
  
  @media (min-width: 750px) {
    font-size: 16px;
  }
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

export const StyledStepperHeader = styled.div`
  margin-top: auto;
  display: flex;
  padding: 24px 24px;
  justify-content: space-between;
  margin-bottom: 20px;
  background: radial-gradient(
    175.43% 81.25% at 50.18% 100%,
    rgba(22, 25, 28, 0.8) 0%,
    rgba(27, 29, 31, 1) 100%
  )

 
`;
