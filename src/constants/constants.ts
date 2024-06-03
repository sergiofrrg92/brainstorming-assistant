const { JWT_SECRET, NODE_ENV } = process.env;

export const jwtConstants = {
  secret: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret-key',
};
