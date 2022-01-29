import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import IconButton from './IconButton';

const Wrapper = styled.div`
  padding: 1em 0;
  position: relative;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  & > * {
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    height: 100%;
    &:not(:first-child) {
      margin-left: 1em;
    }
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  user-select: none;
  top: 0;
  height: 100%;
  z-index: 1;
  &.right {
    right: 0;
    transform: translateX(50%);
  }

  &.left {
    left: 0;
    transform: translateX(-50%);
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 128px;
  pointer-events: none;
  transition: opacity 0.1s ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.visible ? '1' : '0')};
`;

const LeftGradient = styled(Gradient)`
  left: 0;
  background: linear-gradient(to right, #121212, rgba(255, 255, 255, 0));
`;

const RightGradient = styled(Gradient)`
  right: 0;
  background: linear-gradient(to left, #121212, rgba(255, 255, 255, 0));
`;

export default function HorizontalScroller({ children, ...rest }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const ref = useRef(null);

  const scroll = (e) => calc(e.target);

  const calc = (el) => {
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    if (ref && ref.current) {
      calc(ref.current);
    }
  }, [ref]);

  return (
    <Wrapper {...rest}>
      <InnerContainer>
        <LeftGradient visible={canScrollLeft} />
        <RightGradient visible={canScrollRight} />

        {canScrollLeft && (
          <ArrowContainer
            className="left"
            onClick={() => {
              ref.current.scrollTo({ left: ref.current.scrollLeft - ref.current.clientWidth, behavior: 'smooth' });
            }}
          >
            <IconButton rounded className="fas fa-chevron-left" />
          </ArrowContainer>
        )}
        {canScrollRight && (
          <ArrowContainer
            className="right"
            onClick={() => {
              ref.current.scrollTo({ left: ref.current.scrollLeft + ref.current.clientWidth, behavior: 'smooth' });
            }}
          >
            <IconButton rounded className="fas fa-chevron-right" />
          </ArrowContainer>
        )}
      </InnerContainer>
      <ScrollContainer ref={ref} onScroll={scroll}>
        {children}
      </ScrollContainer>
    </Wrapper>
  );
}
