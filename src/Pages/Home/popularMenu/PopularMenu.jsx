import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../shared/menuItem/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu)
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category ==="popular");
            setMenu(popularItems)
        })
    }, []);
    return (
        <div className="mb-12">
            <section>
                <SectionTitle 
                    heading={"Popular Menu"}
                    subTitle={"From Our Menu"}
                />
            </section>
            <div className="grid md:grid-cols-2 gap-5">
            {
                menu.map(item=><MenuItems key={item._id} item={item}/>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;