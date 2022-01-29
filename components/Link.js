export default function Link({ children, target = '_blank', ...rest }) {
  return (
    <a target={target} {...rest}>
      {children}
    </a>
  );
}
