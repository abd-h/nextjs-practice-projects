import sql from "better-sqlite3";

const db = sql("accessories.db");

export const getAccessories = () => {
  // console.log(db.prepare("SELECT * FROM products").all());

  return db.prepare("SELECT * FROM products").all();
};

