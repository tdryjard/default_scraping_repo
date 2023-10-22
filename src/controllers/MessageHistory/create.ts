import { Response } from "express";
import { MessageHistory } from "types";

import MessageHistoryModel from "../../models/message_history";

exports.create = async (req: MessageHistory, res: Response) => {
  const { subject, content, candidateId, sender } = req.body;

  if (!subject || !content) {
    return res.status(422).json({
      message: "Element missing",
    });
  }

  const newMessage = new MessageHistoryModel({ subject, content, candidateId, sender, date: new Date() });

  await newMessage.save();
  return res.status(200).json({
    message: "Message history successfuly create",
  });
};
