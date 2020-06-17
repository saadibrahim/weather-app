const ENVIRONMENT = process.env.NODE_ENV;

const IS_PRODUCTION = ENVIRONMENT === "production";

const IS_DEVELOPMENT = ENVIRONMENT === "development";

export default {
  ENVIRONMENT,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
};
