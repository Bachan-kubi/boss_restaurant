

const SectionTitle = ({heading, subTitle}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 my-8">
            <p className="text-yellow-700 mb-2">---{subTitle}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;