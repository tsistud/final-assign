import "./index.css";

function Button(props){
    const {size = "md", variant = "primary", children, onClick, disabled, type = "button" } = props
    const className = `my-button my-button--${variant} my-button--${size} ${disabled ? "my-button--disabled" : ""}`;
    return (

        <button className = {className} onClick={onClick} disabled={disabled} type={type}>{children}</button>
    )
}

export default Button;


