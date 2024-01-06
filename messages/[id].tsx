import dbConnect from 'lib/dbConnect'
import Messages from 'models/message'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const messages = await Messages.findById(id)
        if (!messages) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: messages })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const messages = await Messages.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!messages) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: messages })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedMessages = await Messages.deleteOne({ _id: id })
        if (!deletedMessages) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}