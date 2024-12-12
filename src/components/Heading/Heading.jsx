import "./Heading.css";

function Heading(props) {
  const { level = 1, className = "", children } = props;

  const Tag = `h${level}`; 
  const classNames = `heading heading--${level} ${className}`.trim();

  return <Tag className={classNames}>{children}</Tag>;
}

export default Heading;
