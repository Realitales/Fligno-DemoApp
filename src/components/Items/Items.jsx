import React from "react";
import StyledItems from "./StyledItems";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Items() {
  const sampleItems = [
    {
      itemname: "minecraft ps4 ed.",
      img: "https://cdn.discordapp.com/attachments/741183059776372750/957997112048644236/minecraft_ps4.png",
      price: 1_500,
      itemId: "1",
    },
    {
      itemname: "Uncharted 4",
      img: "https://cdn.discordapp.com/attachments/741183059776372750/957999898383503390/uncharted4_ps4.png",
      price: 1200,
      itemId: "2",
    },
    {
      itemname: "spiderman ps4",
      img: "https://cdn.discordapp.com/attachments/741183059776372750/958000530708369488/spiderman_ps4.png",
      price: 2600,
      itemId: "3",
    },
    {
      itemname: "God of War 4",
      img: "https://media.discordapp.net/attachments/741183059776372750/958002684521250816/godofwar4_ps4.png?width=419&height=523",
      price: 1200,
      itemId: "4",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledItems id="styled-items-container">
        <h1>Games Available</h1>
        <hr />
        <div className="items">
          {sampleItems.map((item) => (
            <div className="item" key={item.itemId}>
              <Link
                to="/item"
                state={{
                  productinfo: {
                    itemname: item.itemname,
                    itemimg: item.img,
                    itemprice: item.price,
                    itemid: item.itemId,
                  },
                }}
              >
                <img src={item.img} alt="" />
                <p>{item.itemname}</p>
                <span>Php {item.price},00</span>
              </Link>
            </div>
          ))}
        </div>
      </StyledItems>
    </motion.div>
  );
}
