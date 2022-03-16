import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";

export const MainPage = (props) =>
    <div>
        <Header/>
        <CardList records={props.records}/>
        <Footer/>
    </div>