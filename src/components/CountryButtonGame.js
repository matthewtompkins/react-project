import ButtonsList from "./ButtonsList";

const data = {
    Germany: 'Berlin',
    England: 'London',

};

let buttons = [];

for ( const [key,value] of Object.entries(data) ) {
    buttons.push({value:key,answer:value,isActive:false},{value:value,answer:key,isActive:false});
}

buttons = buttons.sort( () => Math.random() - 0.5 );

function CountryButtonGame() {

    return <ButtonsList items={buttons} />;
}

export default CountryButtonGame;