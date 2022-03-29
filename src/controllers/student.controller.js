import { getConnection, sql, queries } from "../database";



export const getAllStudents = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getAllStudents);
  const list = result.recordset;
  res.render("student", { list: list })

};

export const getStudentById = async (req, res) => {
  const { id } = req.params
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.getStudentById);
  const student =  result.recordset[0]
  res.render("editstudent", { student: student });
};

export const createNewStudent = async (req, res) => {
  const reqbody = req.body
  const { name, surname, dni } = reqbody;
  let { address, address_n, email, phone } = reqbody;
  if (name == "" || dni == "" || surname == "") {
    return res.status(400).json({ msg: "Error" });
  }

  const pool = await getConnection();

  await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("surname", sql.VarChar, surname)
    .input("dni", sql.Int, dni)
    .input("address", sql.VarChar, address)
    .input("address_n", sql.VarChar, address_n)
    .input("email", sql.VarChar, email)
    .input("phone", sql.VarChar, phone)
    .query(queries.createNewStudent);

    res.redirect("/student");
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params
  const pool = await getConnection();
  await pool.request().input("id", id).query(queries.deleteStudnet);
  res.redirect("/student");

};

export const updateStudentById = async (req, res) => {
  const reqbody = req.body;
  const { id } = req.params;

  const pool = await getConnection();
  await pool
    .request()
    .input("id", id)
    .input("name", sql.VarChar, reqbody.name)
    .input("surname", sql.VarChar, reqbody.surname)
    .input("dni", sql.Int, reqbody.dni)
    .input("address", sql.VarChar, reqbody.address)
    .input("address_n", sql.VarChar, reqbody.address_n)
    .input("email", sql.VarChar, reqbody.email)
    .input("phone", sql.VarChar, reqbody.phone)
    .query(queries.updateStudent);
    
    res.redirect("/student");
};
