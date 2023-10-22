import mongoose, { Document, Schema } from 'mongoose';
import { Message } from 'types';

export interface MessageDocument extends Message, Document {}

const MessageSchema: Schema = new Schema({
    subject: { type: String, required: true },
    content: { type: String, required: true },
});

const MessageModel = mongoose.model<MessageDocument>('Message', MessageSchema);

export default MessageModel;