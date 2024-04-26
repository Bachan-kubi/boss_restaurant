

const MenuItems = ({item}) => {
    const {name, image, price, recipe} = item;
    
    return (
        <div>
            <div className="flex space-x-2">
                <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[110px]" src={image} alt="" />
                <h2 className="uppercase">{name}</h2>
                <p>Recipe: {recipe}</p>
            </div>
            <div>
                <h4 className="text-yellow-500">Price: {price}</h4>
            </div>
        </div>
    );
};

export default MenuItems;