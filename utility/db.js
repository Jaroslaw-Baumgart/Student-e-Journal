
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("schoolacl", "root", "", {
    host: "localhost",
    dialect: "mysql",
    decimalNumbers: true
});

sequelize.authenticate().then(() => {
    console.log("Connection has benn established to the database");
}).catch((error) => {
    console.error(error);
});

export {
    sequelize
};