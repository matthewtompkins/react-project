import { createContext, useState } from "react";

const ButtonContext = createContext({
    allBtns: [],
    activeBtns: [],
    btnClicked: () => {}
});

export function ButtonContextProvider(props) {

    const [btnActive, setBtnActive] = useState([]);
    const [isIncorrect, setIsIncorrect] = useState(false);

    function btnClickHandler(button) {
        console.log(ButtonContext, context);
        if ( context.activeBtns.length === 0 ) {
            setBtnActive(context.activeBtns);
            context.activeBtns.push([button.target.getAttribute('value'),button.target.getAttribute('answer')]);
        } else {
            
        }
    }

    function removeButtons() {
        for ( let i = 0; i < context.allBtns.length; i++ ) {
            if ( context.allBtns[i] === context.activeBtns[0] || context.allBtns[i] === context.activeBtns[1] ) {
                context.allBtns.splice(i,0);
            }
        }
    }

    const context = {
        allBtns: [],
        activeBtns: [],
        btnClicked: btnClickHandler
    };

    return (
        <ButtonContext.Provider value={context}>
            {props.children}
        </ButtonContext.Provider>
    );
}

export default ButtonContext;