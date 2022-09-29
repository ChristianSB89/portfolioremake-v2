import styled from "styled-components";

export const CarouselStyle = styled.div`
  overflow: hidden;
  margin: 0.5em 0;
  background: linear-gradient(
    180deg,
    rgba(77, 132, 143, 0) 0%,
    rgba(77, 132, 143, 0.791667) 33.33%,
    #4d848f 66.67%,
    rgba(77, 132, 143, 0) 100%
  );
  border-radius: 0 0 1em 1em;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: #4d848f;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItemStyle = styled.div`
  margin: 0.5em 0;
  padding: 1em 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;

export const IndicatorStyle = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PrevNextFlex = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const IndicatorBtn = styled.button`
  display: flex;
  text-decoration: none;
  color: #0a323b;
  background: rgba(255, 255, 255, 0);
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 16px;
  &:hover,
  &.active {
    color: #82c0cc;
    background: rgba(22, 47, 51, 0.27);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`;

export const ActiveBtns = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
