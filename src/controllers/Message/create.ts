import { Response } from "express";
import { Message } from "types";

import MessageModel from "../../models/message";

exports.create = async (req: Message, res: Response) => {
  const { subject, content } = req.body;

  if (!subject || !content) {
    return res.status(422).json({
      message: "Element missing",
    });
  }

  const newMessage = new MessageModel({ subject, content });

  await newMessage.save();
  return res.status(200).json({
    message: "Message successfuly create",
  });
};
