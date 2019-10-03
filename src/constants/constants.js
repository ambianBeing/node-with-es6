"use strict";
const SERVER_PORT = 5000;

const CORS_OPTIONS = {
  methods: ["GET", "POST", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-type", "Authorization"],
  maxAge: 600 //to cache options check request
};

const MORGAN_OPTIONS = {
  apacheCommon: "common",
  apacheCombined: "combined",
  customOption: function(tokens, req, res) {
    return [
      "REQ:" + tokens.method(req, res),
      "URL:" + tokens.url(req, res),
      "STATUS:" + tokens.status(req, res),
      "SIZE:" + tokens.res(req, res, "content-length"),
      "TIME:" + tokens["response-time"](req, res) + "ms"
    ].join(" ");
  }
};

const DEFAULT_ENCODING = "utf-8";

export { SERVER_PORT, CORS_OPTIONS, MORGAN_OPTIONS, DEFAULT_ENCODING };
