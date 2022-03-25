import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import "./MaiPage.css"

export const MainPage = (props) =>
    <div className="main-container">
        <Header totalACobrar={props.totalACobrar} totalAPagar={props.totalAPagar} setVistaACobrar={props.setVistaACobrar}/>
        <CardList deleteBill={props.deleteBill} eventsACobrar={props.eventsACobrar} eventsAPagar={props.eventsAPagar}
                  vistaACobrar={props.vistaACobrar} setVistaACobrar={props.setVistaACobrar}/>
        <Footer/>
    </div>