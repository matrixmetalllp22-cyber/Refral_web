import Contact from '../models/contactModel.js';

// @desc    Create new contact
// @route   POST /api/contacts
// @access  Public
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    } else {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
};

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Public
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

// // @desc    Get single contact
// // @route   GET /api/contacts/:id
// // @access  Public
// export const getContact = async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: 'Contact not found'
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: contact
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// // @desc    Update contact
// // @route   PUT /api/contacts/:id
// // @access  Public
// export const updateContact = async (req, res) => {
//   try {
//     const contact = await Contact.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true
//       }
//     );
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: 'Contact not found'
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: contact
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Public
// export const deleteContact = async (req, res) => {
//   try {
//     const contact = await Contact.findByIdAndDelete(req.params.id);
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: 'Contact not found'
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: 'Contact deleted successfully'
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// };
