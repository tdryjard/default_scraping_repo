import { Response } from "express";
import { Message } from "types";

import MessageModel from "../../models/message";

exports.update = async (req: Message, res: Response) => {
  const { id } = req.params;
  const { subject, content } = req.body;

  if (!subject || !content || !id) {
    return res.status(422).json({
      message: "Element missing",
    });
  }

  const resUpdate = await MessageModel.updateOne(
    { _id: id },
    {
      $set: {
        subject,
        content,
      },
    },
  );


  return res.status(200).json({
    message: "Message successfuly updated",
  });
};
