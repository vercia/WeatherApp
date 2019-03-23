//importowanie styli z SeasonDisplay.css
import './SeasonDisplay.css';
//importowanie biblioteki react
import React from 'react';

//funkcja, ktora zawiera dane jak tekst czy ikone, zalezne od pory roku
const seasonConfig = {
    summer: {
        text: "Lecimy na plaze",
        iconName: "sun"
    },
    winter: {
        text: "Diabelnie zimno",
        iconName: "snowflake"
    }
}

//funkcja, ktora sprawdza jaki jest miesiac i polozenie i....
const getSeason = (lat,month) =>{
    //... jesli miesiac jest wiekszy od 2 i mniejszy od 9 to wtedy zwroc 'summer'=czyli ikone slonca oraz tekst "Lecimy na plaze",
    // jak w funkcji powyzej, w przeciwym wypadku zime (nie wiem za bardzo po co jest to "lat>0")
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }
    // tutaj na odwrot czyli jesli miesiac jest mniejszy od 2 i wiekszy od 9 to wtedy zwroc 'zime'=czyli ikone sniegu oraz tekst "Diabelnie zimno",
    // jak w funkcji powyzej, w przeciwym wypadku lato
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

//funkcja SeasonDisplay, nie za bardzo jeszcze rozumiem co to jest 'props'
const SeasonDisplay = props => {
    //tworzymy zmienna season, ktora wywoluje funkcje, ktora przechowuje dwa argumenty(lokalizacja oraz aktualna data(jest to akurat wbudowana metoda))
    const season = getSeason(props.lat, new Date().getMonth());
    //tworzymy dwie zmienne jednoczesnie (text oraz iconName), ktora wywoluje funkcje seasonConfig, ktora w zaleznosci od tego jaka jest pora roku(funkcja getSeason) to wyswietli odpowiednia ikone oraz tekst
    const { text, iconName } = seasonConfig[season]
    //zwracanie
    return (
        //kontener z klasa ktora przechowuje zmienna season
        //linijka nizej wyswietla ikone,potem text, na koncu znowu ikona
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}  />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )    
}

//eksportowanie domyslnego eksportu
export default SeasonDisplay;