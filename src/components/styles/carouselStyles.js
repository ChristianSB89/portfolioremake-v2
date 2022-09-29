import styled from "styled-components";

export const CarouselStyle = styled.div`
  overflow: hidden;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItemStyle = styled.div`
  padding: 1em 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(77, 132, 143, 0.1) 0%,
    rgba(77, 132, 143, 0.791667) 33.33%,
    #4d848f 66.67%,
    rgba(77, 132, 143, 0.1) 100%
  );
  border-radius: 0 0 1em 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(77, 132, 143, 0.3);
  color: #4d848f;
`;

export const IndicatorStyle = styled.div`
  padding: 2em 0;
  display: flex;
  justify-content: center;
`;

export const IndicatorBtn = styled.button`
  text-decoration: none;
  color: #0a323b;
  background: rgba(255, 255, 255, 0.2);
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  &:hover,
  &.active {
    color: #82c0cc;
    background: rgba(22, 47, 51, 0.27);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`;
