import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import coverImg from '../../assets/menu/banner3.jpg';
import PopularMenu from '../Home/popularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Boss | Menu</title>
            </Helmet>
            <Cover coverImg={coverImg} title={"Our Menu"}/>
            <PopularMenu />
            <Cover coverImg={coverImg} title={"Our Menu"}/>
            <PopularMenu />
            <Cover coverImg={coverImg} title={"Our Menu"}/>
            <PopularMenu />
        </div>
    );
};

export default Menu;