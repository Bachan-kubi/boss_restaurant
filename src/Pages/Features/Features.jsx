import SectionTitle from "../../components/sectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import '../Features/Featured.css';



const Features = () => {
    return (
        <div className="featured-items bg-fixed pt-5 my-20">
            <SectionTitle heading="Featured Items" subTitle="Check it Out"/>
            <div className="bg-slate-400 bg-opacity-30 md:flex gap-5 justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <h2 className="text-2xl">August 20, 2024.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam numquam non dolores, quasi fuga eaque dolorem eveniet adipisci libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque blanditiis quidem porro ducimus at? Deserunt ipsam quo obcaecati, quasi quaerat omnis dicta at autem perferendis ducimus quod, quibusdam ab.</p>
                    <button className="btn btn-outline text-white mt-2 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;