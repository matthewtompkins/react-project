import { useState, useContext } from "react";
import { ButtonContextProvider } from "../store/button-context";
import ButtonContext from "../store/button-context";
import CountryButton from './CountryButton';
import classes from './CountryButtonGame.module.css';

const data = {
    Germany: 'Berlin',
    England: 'London'
};

function CountryButtonGame() {

    const btnContext = useContext(ButtonContext);

    let buttons = [];
    
    for ( const [key,value] of Object.entries(data) ) {
        const btn1 = [key, value];
        const btn2 = [value, key];
        buttons.push(btn1,btn2);
    }

    buttons = buttons.sort(() => Math.random() - 0.5);
    
    btnContext.allBtns = buttons;

    return(
        <ButtonContextProvider>
            <section className={classes.wrap}>
                <ul className={classes.list}>
                    {buttons.map((cur,ind) => {
                        return <CountryButton key={ind} title={cur[0]} answer={cur[1]} />
                    })}
                </ul>
            </section>
        </ButtonContextProvider>
    );
}

export default CountryButtonGame;