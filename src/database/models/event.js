import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    country: { type: String },
    city: { type: String },
    url: { type: String },
    emotion: { type: String },
    age: { type: Number },
    gender: { type: String },
    custom: { type: Map, of: String },
  },
  {
    versionKey: false,
    timestamps: {
      updatedAt: true,
      createdAt: false,
    },
  },
);

const Event = mongoose.model('events', EventSchema);

export default Event;
