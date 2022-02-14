import { useState, useContext } from "react";
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
    
    if ( btnContext.allBtns.length > 0 ) {
        return(
            <section className={classes.wrap}>
                <ul className={classes.list}>
                    {btnContext.allBtns.map((cur,ind) => {
                        if ( btnContext.activeBtns ) {
                            if ( btnContext.activeBtns.includes(cur) ) {
                                return <CountryButton key={ind} active={true} title={cur[0]} answer={cur[1]} />
                            } else {
                                return <CountryButton key={ind} title={cur[0]} answer={cur[1]} />
                            }
                        } else {
                            return <CountryButton key={ind} title={cur[0]} answer={cur[1]} />
                        }
                    })}
                </ul>
            </section>
        )
    } else {
        return(
            <section className={classes.wrap}>
                <h1>Congratulations!</h1>
            </section>
        );
    }
}

export default CountryButtonGame;