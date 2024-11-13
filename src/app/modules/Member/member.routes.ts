import { Router } from "express";
import { memberControllers } from "./member.controller";
import validateRequest from "../../utils/validateRequest";
import { memberValidations } from "./member.validation";


const router = Router();

router.get('/', memberControllers.getAllMembers)

router.get('/:memberId', memberControllers.getSingleMember)

router.post('/', validateRequest(memberValidations.createMemberValidation), memberControllers.createMember)

router.put('/:memberId', validateRequest(memberValidations.updateMemberValidation), memberControllers.updateMember)

router.delete('/:memberId', memberControllers.deleteMember)


export const memberRoutes = router;