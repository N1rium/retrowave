import styled from "styled-components";
import { space, SpaceProps, ColorProps } from "styled-system";
import Image from "next/image";
import { HTMLAttributes, useState } from "react";

interface Props
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    SpaceProps,
    ColorProps {
  size: string;
  src: string;
}

interface StyledProps extends HTMLAttributes<HTMLElement>, SpaceProps {
  size: string;
}

const Wrapper = styled.div<StyledProps>`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  overflow: hidden;
  ${space};
`;

const Avatar: React.FC<Props> = ({
  size = "base",
  src = "/avatar.jpeg",
  ...props
}) => {
  const [sizes] = useState({
    sm: "32px",
    base: "64px",
    large: "128px",
    xl: "256px",
  });

  return (
    <Wrapper size={sizes[size]} {...props}>
      <Image src={src} layout="fill" objectFit="cover" />
    </Wrapper>
  );
};

export default Avatar;
