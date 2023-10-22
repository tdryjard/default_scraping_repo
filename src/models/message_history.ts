import mongoose, { Document, Schema } from 'mongoose';
import { MessageHistory } from 'types';

export interface MessageHistoryDocument extends MessageHistory, Document {}

const MessageHistorySchema: Schema = new Schema({
    subject: { type: String, required: true },
    content: { type: String, required: true },
    candidateId: { type: String, required: true },
    sender: { type: String, required: true },
    date: { type: Date, required: true },
});

const MessageHistoryModel = mongoose.model<MessageHistoryDocument>('MessageHistory', MessageHistorySchema);

export default MessageHistoryModel;