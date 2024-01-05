import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'please provide a valid email']
  },
  subject: {
    /* The species of your pet */

    type: String,
    required: [false, 'Please provide a subject.'],
    maxlength: [30, 'Subject cannot be more than 30 characters'],
  },
  message: {
    /* The species of your pet */

    type: String,
    required: [false, 'Please provide your message before sending.'],
    maxlength: [100, 'message cannot be more than 100 characters'],
  },
  
})

export default mongoose.models.Messages || mongoose.model('Messages', MessageSchema)
