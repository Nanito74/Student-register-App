//Declarar paquetes/librerias y usarlas para iniciar la aplicacion//
import express from "express";
import {create} from "express-handlebars";
import config from "./config";
import indexRoutes from "./routes/index.routes";
import studentRoutes from "./routes/student.routes"
import path from "path";
import morgan from 'morgan'

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs"
  }).engine
);
app.set("view engine", ".hbs");

app.use(morgan('dev'))

//settings
app.set("port", config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(studentRoutes);
app.use(indexRoutes);

export default app;
