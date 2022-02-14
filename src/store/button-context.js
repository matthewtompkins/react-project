import { createContext, useState } from "react";

const ButtonContext = createContext({
    btnCount: 0,
    btns: [],
    btnClicked: () => {}
});

export function ButtonContextProvider(props) {

    const [btnActive, setBtnActive] = useState([]);
    const [isIncorrect, setIsIncorrect] = useState(false);

    function btnClickHandler(button) {
        if ( context.btns.length === 0 ) {
            context.btns.push(button.target);
            setActiveButtons(context.btns);
        } else if ( context.btns.length === 1 && context.btns[0] !== button.target ) {
            context.btns.push(button.target);
            checkAnswer(context.btns);
        }
    }

    function setActiveButtons(arr, check = true) {
        arr.forEach(cur => {
            if ( check ) {
                cur.classList.add('active');
            } else {
                cur.classList.add('incorrect');
            }
        });
    }

    function checkAnswer(arr) {
        if ( arr[0].getAttribute('answer') === arr[1].getAttribute('value') ) {
            removeButtons(arr);
        } else {
            setActiveButtons(arr, false);
        }
    }

    function removeButtons(arr) {
        arr.btns = [];
        arr.btnCount -= 2;
    }

    const context = {
        btns: [],
        btnClicked: btnClickHandler
    };

    return (
        <ButtonContext.Provider value={context}>
            {props.children}
        </ButtonContext.Provider>
    );
}

export default ButtonContext;