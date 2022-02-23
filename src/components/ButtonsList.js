import './ButtonsList.css';
import { useState } from 'react';
import Button from './Button';
import ButtonsVictory from "./ButtonsVictory";

const ButtonsList = (props) => {

    const [items, setItems] = useState(props.items);
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    
    const onSelectHandler = value => {
        items.forEach( cur => {
            if ( value === cur.value ) {
                cur.isActive = true;
                setAnswer(cur.answer);
            }
        });
        if ( !answer ) {
            if ( error === 'error' ) {
                setError('');
                items.forEach(cur=> {
                    cur.isActive = false;
                    
                })
            }
            const newItems = [...items];
            setItems(newItems);
        } else {
            if ( value == answer ) {
                const filterItems = items.filter( item => {
                    if ( item.value == answer || item.answer == answer ) {
                        return false;
                    } else {
                        return item;
                    }
                } );
                setItems(filterItems);
                setAnswer('');
            } else {
                console.log('incorrect :(');
                setError('error');
                setAnswer('');
            }
        }
    };
    

    if ( items.length > 0 ) {
        return (
            <ul className={error}>
                {items.map( (item, index) => {
                    return (<li key={index}>
                            <Button onSelect={onSelectHandler} value={item.value} answer={item.answer} active={item.isActive} />
                        </li>);
                } )}
            </ul>
        );
    } else {
        return <ButtonsVictory />
    }
    
}

export default ButtonsList;