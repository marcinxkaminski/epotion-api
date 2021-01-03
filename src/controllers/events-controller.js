import Event from '../database/models/event.js';

export const create = async (request, response) => {
  const event = new Event({ ...request.body });

  const { _id: id, ...data } = await event.save();
  return response.status(201).send({ id, ...data });
};

export const findOne = async (request, response) => {
  const event = await Event.findById(request.params.eventId);
  return event ? response.status(200).send(event) : response.status(404).send();
};
