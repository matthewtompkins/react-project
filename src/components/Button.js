import './Button.css';

const Button = (props) => {
    const onClickHandler = (event) => {
        props.onSelect(event.target.value);
    };
    let buttonClass = 'country-button';
    if ( props.active ) {
        buttonClass += ' active';
    }
    return(
        <button className={buttonClass} onClick={onClickHandler} value={props.value} answer={props.answer}>{props.value}</button>
    );
}

export default Button;