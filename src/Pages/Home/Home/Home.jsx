import Features from "../../Features/Features";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
<h2>This is Home</h2>;
