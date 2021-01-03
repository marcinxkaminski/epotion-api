export const PORT = process.env.PORT || 9999;

export const CORS = {
  origin: '*',
  methods: ['POST', 'GET'],
};

export const { MONGODB_URI } = process.env;
