# epotion-api

![Continous Integration ♾](https://github.com/marcinxkaminski/epotion-api/workflows/Continous%20Integration%20%E2%99%BE/badge.svg)

API used by [Epotion](https://github.com/marcinxkaminski/epotion) for saving events and providing statistics for it.

## Endpoints 🪢

### Create event 🧑🏻‍🎨

```
POST https://epotion-api.herokuapp.com/events
{
    country: { type: String },
    city: { type: String },
    ip: { type: String },
    url: { type: String },
    emotion: { type: String },
    age: { type: Number },
    gender: { type: String },
}
```

**Returns:** ID of created event.

### Get event ☁️

```
GET https://epotion-api.herokuapp.com/events/{eventId}
```

**Returns:** the event

### Events statistics 📈

```
GET https://epotion-api.herokuapp.com/statistics/?eventsIds={eventId1},{eventId2}...
```

**Returns:** statistics for the events

### Page statistics 📊

```
GET https://epotion-api.herokuapp.com/statistics/?url={pageUrl}
```

**Returns:** statistics for the page

### Notes

- Statistics could be combined. You can get both page and events statistics using one request, e.g. `https://epotion-api.herokuapp.com/statistics/?url=somePageUrl.com&eventsIds=someEventId1,someEventId2`

## Future Work 🔮

- [ ] Tests
- [ ] Improve doc about epotion and collected data

## Development 👷🏼‍♂️

```
git clone https://github.com/marcinxkaminski/epotion-api.git
cd epotion-api
npm ci
npm run start
```

## Contribution

Feel free to contribute - every help is welcome 🙏🏻
