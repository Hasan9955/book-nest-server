import { Router } from "express";
import { memberControllers } from "./member.controller";


const router = Router();

router.get('/', memberControllers.getAllMembers)

router.get('/', memberControllers.getSingleMember)

router.post('/', memberControllers.createMember)

router.put('/', memberControllers.updateMember)

router.delete('/', memberControllers.deleteMember)


export const memberRoutes = router;