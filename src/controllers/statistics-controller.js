import Event from '../database/models/event.js';
import { getMostCommonValue } from '../utils/array.js';

const getStatisticsForEvents = (events) => {
  const country = getMostCommonValue(events.map((event) => event.country));
  const age = getMostCommonValue(events.map((event) => event.age));
  const gender = getMostCommonValue(events.map((event) => event.gender));
  const city = getMostCommonValue(events.map((event) => event.city));
  const emotion = getMostCommonValue(events.map((event) => event.emotion));
  return { country, age, gender, city, emotion };
};

export const getStatistics = async (request, response) => {
  const result = {};
  const { url, eventsIds: queryEventsIds } = request.query;
  const eventsIds = queryEventsIds?.split(',');

  if (url) {
    const eventsWithUrl = await Event.find({ url });
    result.forUrl = {
      url,
      ...getStatisticsForEvents(eventsWithUrl),
    };
  }

  if (eventsIds?.length) {
    const events = await Promise.all(eventsIds.map((id) => Event.findById(id)));

    result.forEvents = {
      eventsIds,
      ...getStatisticsForEvents(events),
    };
  }

  return response.status(200).send(result);
};
