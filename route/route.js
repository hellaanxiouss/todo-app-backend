import express from "express";
import {
  createTask,
  editTask,
  getAllTasks,
  getTaskById,
  taskDelete,
  taskSoftDelete,
} from "../controller/task-controller.js";
import {
  getAllLists,
  createList,
  listSoftDelete,
} from "../controller/list-controller.js";
import {
  createTag,
  getAllTags,
  tagSoftDelete,
} from "../controller/tag-controller.js";
import {
  getAllUsers,
  createUser,
  authenticate,
} from "../controller/user-controller.js";
import {
  createNote,
  getAllNotes,
  noteSoftDelete,
} from "../controller/sticky-notes-controller.js";

const router = express.Router();

router.post("/create-task", createTask);
router.get("/get-task", getAllTasks);
router.get("/get-task/:id", getTaskById);
router.put("/update-task/:id", editTask);
router.put("/soft-delete-task/:id", taskSoftDelete);
router.post("/delete-task/:id", taskDelete);
router.get("/get-list", getAllLists);
router.post("/create-list", createList);
router.put("/soft-delete-list/:id", listSoftDelete);
router.get("/get-tag", getAllTags);
router.post("/create-tag", createTag);
router.put("/soft-delete-tag/:id", tagSoftDelete);
router.get("/get-user", getAllUsers);
router.post("/create-user", createUser);
router.post("/authenticate", authenticate);
router.get("/get-sticky-notes", getAllNotes);
router.post("/create-sticky-note", createNote);
router.put("/soft-delete-sticky-note/:id", noteSoftDelete);

export default router;
