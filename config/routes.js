/*******************************************************************************
 * Routes.js
 *******************************************************************************
 *
 * The controllers are in the directory:
 * 1. /app/api/
 * 2. /app/common/
 *
 * There are two type of routing:
 * 1. For API
 * 2. For Website
 *
 * The endpoint you mention will be as follows:
 *
 * "METHOD URL" : "Controller_Name.Function_Name"
 *
 * here METHOD will be: {"GET", "POST", "PUT", "DELETE"}
 * and so on as mentioned in express.js documentation for routing methods.
 *
 * The URL will automatically be prepended by the type of routing. For example:
 * api: {
 *     "GET /home/books": "Home.index"
 * }
 * above will be converted to url: /api/home/books
 ******************************************************************************/

"use strict";

module.exports = {
    api: {
        // all api routes
        "GET /": "Home.index",
        "GET /403": "Home.error_403",
        "GET /404": "Home.error_404",
        "GET /500": "Home.error_500",
        "POST /login": "Home.login",
        "POST /logout": "Home.logout",
        "POST /create-user": "Home.signup",
        "GET /profile": "Home.profile"
    },
    web: {
        // all website routes
        "GET /": "Home.index",
        "GET /403": "Home.error_403",
        "GET /404": "Home.error_404",
        "GET /500": "Home.error_500",
        "GET /login-page": "Home.login_page",
        "GET /logout": "Home.logout",
        "GET /dashboard": "Home.dashboard",
        "GET /create-user": "Home.signup",
        "GET /profile": "Home.profile"
    }
};
