import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Services from "../../Components/Services/Services";
import Stat from "../../Components/Stat/Stat";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Stat></Stat>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;