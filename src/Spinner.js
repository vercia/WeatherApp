//importowanie biblioteki react
import React from 'react';

//funkcja Spinner, z propsem, ktorego nie rozumiem
const Spinner = (props) =>{
    //zwracanie ekranu ladowania przy uzyciu animacji z Semantic UI React oraz wyswietlenie wiadomosci
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    )
}

//tutaj funkcja ktora wlasnie przechowuje wiadomosc "Ladowanie strony"
Spinner.defaultProps = {
    message:"Ladowanie strony"
}

//eksportowanie domyslnie Spinnera
export default Spinner;