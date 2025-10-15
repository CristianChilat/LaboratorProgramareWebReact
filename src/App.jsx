import './App.css';
import './modules/mainPage/navBar/navBar'
import NavBar from "./modules/mainPage/navBar/navBar";
import IntroElement from './modules/mainPage/introElement/introElement'
import BrandsShowUp from "./modules/mainPage/brandsShowUp/brandsShowUp";
import NewProducts from './modules/mainPage/newProducts/newProducts';

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
            </section>
        </div>
    );
}

export default App;
