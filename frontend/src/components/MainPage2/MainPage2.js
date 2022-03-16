import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import CardList2 from "../CardList2/CardList2";


export const MainPage2 = (props) =>
    <div>
        <Header/>
        <CardList2 records={props.records}/>
        <Footer/>
    </div>