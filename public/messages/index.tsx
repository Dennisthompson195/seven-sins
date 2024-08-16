import Messages from 'models/message'
import dbConnect from '../../lib/dbConnect'

const restricted = <h1>If you are seeing this message, it is because you do not have the proper permissions to view this resource. < br /> If you believe this message to an error, please contact our support team.</h1>
export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const message = await Messages.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: false})
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