import { useContext } from "react";
import classes from './CountryButton.module.css';
import ButtonContext from "../store/button-context";

function CountryButton(props) {

    const btnContext = useContext(ButtonContext);

    return(
        <li className={classes.item}>
            <button className={classes.button} onClick={btnContext.btnClicked} value={props.title} answer={props.answer}>{props.title}</button>
        </li>
    );
}

export default CountryButton;