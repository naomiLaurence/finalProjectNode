import { Schema } from "mongoose";
import { IMessage } from "../../@types/@types";

const MessageSchema = new Schema<IMessage>({
  fullName: { type: String, required: true, minlength: 2, maxlength: 256 },
  email: { type: String, required: true, minlength: 2, maxlength: 256 },
  message: { type: String, required: true, minlength: 2, maxlength: 256 },
  createdAt: { type: Date, default: Date.now },
  
  });

export default MessageSchema;