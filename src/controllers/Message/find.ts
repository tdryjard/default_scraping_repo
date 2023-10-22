import { Response } from "express";

import MessageModel from "../../models/message";

exports.find = async (req: any, res: Response) => {
  const messages = await MessageModel.find({});

  if (messages) {
    return res.status(200).json({
      message: "Message successfuly find",
      data: messages
    });
  } else {
    return res.status(422).json({
      message: "Problem, messages not founds",
    });
  }
};
