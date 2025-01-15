import React from "react";
import Card from "./Card";
import MenuData from "./MenuData";

const Menu = ({ selectedCategory }) => {
    const filteredData = MenuData.filter(item => item.cat === selectedCategory);

    return (
        <div className="bg-gray-100 py-10">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <Card key={index} {...item} />
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menu;