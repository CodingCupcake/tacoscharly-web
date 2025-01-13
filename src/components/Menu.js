import React from "react";
import Card from "./Card";

const MenuData = [
    {
        id:1,
        cat:1,
        name: "Quesataco",
        desc: "el pepe",
        precio: "$3.75",
        urlImg: "",
    },
    {
        id:2,
        cat:1,
        name: "Quesabirria 3Pz",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.99",
        urlImg: "https://res.cloudinary.com/do5dkuplw/image/upload/v1736797511/imagen_2025-01-13_124509039_brs9qq.png",
    },
    {
        id:3,
        cat:1,
        name: "Asada fries",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$12.99",
        urlImg: "",
    },
    {
        id:4,
        cat:1,
        name: "Nachos",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$12.99",
        urlImg: "",
    },
    {
        id:5,
        cat:1,
        name: "Gorditas",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$4.99",
        urlImg: "",
    },
    {
        id:5,
        cat:1,
        name: "Sopes",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$4.99",
        urlImg: "",
    },
    {
        id:7,
        cat:1,
        name: "Tacos dorados",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$1.99",
        urlImg: "",
    },
    {
        id:8,
        cat:1,
        name: "Quesadilla",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.99",
        urlImg: "",
    },
    {
        id:9,
        cat:1,
        name: "Sopa ramen con birria",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$12.99",
        urlImg: "",
    },
    {
        id:10,
        cat:1,
        name: "Mulitas",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$4.00",
        urlImg: "",
    },
    {
        id:11,
        cat:1,
        name: "Burrito Regular",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.99",
        urlImg: "",
    },
    {
        id:12,
        cat:1,
        name: "Burrito Supreme",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$11.99",
        urlImg: "",
    },
    {
        id:13,
        cat:1,
        name: "Burrito California",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$12.99",
        urlImg: "",
    },
    {
        id:14,
        cat:1,
        name: "Monster Chetos Burrito",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.99",
        urlImg: "",
    },
    {
        id:15,
        cat:1,
        name: "Breakfast Burrito",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.99",
        urlImg: "",
    },
    {
        id:16,
        cat:1,
        name: "Wet Burrito",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$11.99",
        urlImg: "",
    },
    {
        id:17,
        cat:1,
        name: "Torta regular",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.00",
        urlImg: "",
    },
    {
        id:18,
        cat:1,
        name: "Torta Especial",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$10.50",
        urlImg: "https://res.cloudinary.com/do5dkuplw/image/upload/v1736797532/imagen_2025-01-13_124529184_b86gtd.png",
    },
    {
        id:19,
        cat:1,
        name: "Torta Cubana",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel odio et mi lacinia scelerisque.",
        precio: "$11.50",
        urlImg: "",
    },
]

const Menu = () => {
    return(
        <div className="bg-gray-100 py-10">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {MenuData.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;