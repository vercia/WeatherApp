//importowanie biblioteki react
import React from 'react';
//importowanie biblioteki react-dom,ktora odpowiada za renderowanie efektów w przeglądarce.
import ReactDOM from 'react-dom';
//importowanie komponentu SeasonDisplay
import SeasonDisplay from './SeasonDisplay';
//importowanie komponentu Spinner
import Spinner from './Spinner';

//tworzenie klasy App, ktora jest rozszerzona o komponenty Reacta
class App extends React.Component {
    //tworzenie stanu, ale tego za bardzo nie rozumiem
    state = { lat: null, errMessage: "" };
    //montowanie komponentu
    componentDidMount(){
        //tutaj nie wiem za bardzo
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errMessage: error.message})
        );
    }

    //renderowanie i sprawdzanie co uzytkownik zaznaczyl
    render() {
        //jezeli przy pytaniu o zezwolenie na lokalizacje odmowil to wyswietla blad
        if(this.state.errMessage && !this.state.lat) {
            return <div>Błąd: {this.state.errMessage}</div>;
        }
        //jesli zezwolil na pobranie lokalizacji to wyswietla komponent SeasonDisplay, ktory w znaleznosci od lokalizacji wyswietli inne tlo
        if(!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        //jesli nic nie zaznaczyl to bedzie ekran ladowanie strony(komponent Spinner) z prosba o zezwolenie na lokalizacje
        return <Spinner message="Prosze zezwolic na lokalizacje"/>
    }
};

//wiem, ze trzeba ta linie dodawac, ale nie za bardzo wiem co ona wykonuje,przeksztalcenie element React w glowny wezel DOM?
ReactDOM.render(<App />, document.querySelector('#root'));