import { Router } from "express";
import {
  getAllStudents,
  createNewStudent,
  deleteStudent,
  updateStudentById,
  getStudentById,
} from "../controllers/student.controller";

const router = Router();

router.get("/student", getAllStudents);

router.post("/student", createNewStudent);

router.get("/student/:id", deleteStudent);

router.get("/editstudent/:id", getStudentById);

router.post("/editstudent/:id", updateStudentById);

export default router;
