import { Response } from "express";
import { Message } from "types";

import MessageModel from "../../models/message";

exports.delete = async (req: Message, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(422).json({
      message: "ID missing",
    });
  }

  try {
    const result = await MessageModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    return res.status(200).json({
      message: "Message successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error,
    });
  }
};