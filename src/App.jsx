import './App.css';
import './modules/mainPage/navBar/navBar'
import NavBar from "./modules/mainPage/navBar/navBar";
import IntroElement from './modules/mainPage/introElement/introElement'
import BrandsShowUp from "./modules/mainPage/brandsShowUp/brandsShowUp";
import NewProducts from './modules/mainPage/newProducts/newProducts';
import UserPromoEmail from "./modules/mainPage/userPromoEmail/userPromoEmail";
import SuggestionForYoung from "./modules/mainPage/suggestionForYoung/suggestionForYoung";

// import TableElement from './modules/home/table/index'

function App() {
    return (
        <div className="App">
            {/*<TableElement />*/}
            <NavBar />
            <section>
                <IntroElement />
                <BrandsShowUp />
                <NewProducts />
                <UserPromoEmail />
                <SuggestionForYoung />
            </section>
        </div>
    );
}

export default App;
