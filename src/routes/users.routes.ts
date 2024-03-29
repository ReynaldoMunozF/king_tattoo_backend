import express from "express";
import { UserController } from "../controllers/UserController";
import { AppointmentController } from "../controllers/AppointmentController";
import { auth } from "../middleware/auth";
import { authArtist } from "../middleware/authArtist";
import { isSuperAdmin } from "../middleware/isSuperAdmin";

// -----------------------------------------------------------------------------

const router = express.Router();
const userController = new UserController();
const appointmentController = new AppointmentController();

router.get("/",  userController.getAll);
router.get("/:id", auth, userController.getById);
router.patch("/:id",auth, userController.update);
router.delete("/:id", authArtist,isSuperAdmin, userController.delete);

router.get("/:id/appointments", auth, appointmentController.getById);

export default router;
