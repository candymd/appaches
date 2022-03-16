import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";

export const MainPage = (props) =>
    <div>
        <Header setVistaACobrar={props.setVistaACobrar}/>
        <CardList registrosACobrar={props.registrosACobrar} registrosAPagar={props.registrosAPagar}
                  vistaACobrar={props.vistaACobrar} setVistaACobrar={props.setVistaACobrar}/>
        <Footer/>
    </div>