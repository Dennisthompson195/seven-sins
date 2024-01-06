import dbConnect from 'lib/dbConnect'
import Messages from 'models/message'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const message = await Messages.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: message })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const message = await Messages.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: message })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}