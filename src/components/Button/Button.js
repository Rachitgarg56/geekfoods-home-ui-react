
import './Button.css';

const Button = (props) => {
    return (
        <button style={{backgroundColor:props.bgColor, color:props.color}}>{props.name}</button>
    )
}

export default Button;
