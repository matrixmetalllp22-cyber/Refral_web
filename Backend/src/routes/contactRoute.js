import express from 'express';
import {
  createContact,
  getContacts
} from '../controller/contact.js';

const router = express.Router();

router.route('/')
  .post(createContact)
  .get(getContacts);

// router.route('/:id')
//   .get(getContact)
//   .put(updateContact)
//   .delete(deleteContact);

export default router;
