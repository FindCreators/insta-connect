/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_B0295868_Downloads_instagram_2_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/logout/route.ts */ \"(rsc)/./app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"/Users/B0295868/Downloads/instagram 2/app/api/auth/logout/route.ts\",\n    nextConfigOutput,\n    userland: _Users_B0295868_Downloads_instagram_2_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRkIwMjk1ODY4JTJGRG93bmxvYWRzJTJGaW5zdGFncmFtJTIwMiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZCMDI5NTg2OCUyRkRvd25sb2FkcyUyRmluc3RhZ3JhbSUyMDImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvQjAyOTU4NjgvRG93bmxvYWRzL2luc3RhZ3JhbSAyL2FwcC9hcGkvYXV0aC9sb2dvdXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dvdXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL0IwMjk1ODY4L0Rvd25sb2Fkcy9pbnN0YWdyYW0gMi9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/logout/route.ts":
/*!**************************************!*\
  !*** ./app/api/auth/logout/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function GET() {\n    await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.clearSession)();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/\", process.env.INSTAGRAM_REDIRECT_URI));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNEO0FBRWxDLGVBQWVFO0lBQ3BCLE1BQU1ELHVEQUFZQTtJQUNsQixPQUFPRCxxREFBWUEsQ0FBQ0csUUFBUSxDQUFDLElBQUlDLElBQUksS0FBS0MsUUFBUUMsR0FBRyxDQUFDQyxzQkFBc0I7QUFDOUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9CMDI5NTg2OC9Eb3dubG9hZHMvaW5zdGFncmFtIDIvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgY2xlYXJTZXNzaW9uIH0gZnJvbSBcIkAvbGliL2F1dGhcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBhd2FpdCBjbGVhclNlc3Npb24oKVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvXCIsIHByb2Nlc3MuZW52LklOU1RBR1JBTV9SRURJUkVDVF9VUkkhKSlcbn1cblxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNsZWFyU2Vzc2lvbiIsIkdFVCIsInJlZGlyZWN0IiwiVVJMIiwicHJvY2VzcyIsImVudiIsIklOU1RBR1JBTV9SRURJUkVDVF9VUkkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSession: () => (/* binding */ clearSession),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setSession: () => (/* binding */ setSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\nasync function getSession() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const accessToken = cookieStore.get(\"instagram_access_token\")?.value;\n    const userId = cookieStore.get(\"instagram_user_id\")?.value;\n    if (!accessToken || !userId) {\n        return null;\n    }\n    return {\n        accessToken,\n        userId\n    };\n}\nasync function setSession(session) {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    cookieStore.set(\"instagram_access_token\", session.accessToken, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        maxAge: 60 * 60 * 24 * 30,\n        path: \"/\"\n    });\n    cookieStore.set(\"instagram_user_id\", session.userId, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        maxAge: 60 * 60 * 24 * 30,\n        path: \"/\"\n    });\n}\nasync function clearSession() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    cookieStore.delete(\"instagram_access_token\");\n    cookieStore.delete(\"instagram_user_id\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBTy9CLGVBQWVDO0lBQ3BCLE1BQU1DLGNBQWNGLHFEQUFPQTtJQUMzQixNQUFNRyxjQUFjRCxZQUFZRSxHQUFHLENBQUMsMkJBQTJCQztJQUMvRCxNQUFNQyxTQUFTSixZQUFZRSxHQUFHLENBQUMsc0JBQXNCQztJQUVyRCxJQUFJLENBQUNGLGVBQWUsQ0FBQ0csUUFBUTtRQUMzQixPQUFPO0lBQ1Q7SUFFQSxPQUFPO1FBQ0xIO1FBQ0FHO0lBQ0Y7QUFDRjtBQUVPLGVBQWVDLFdBQVdDLE9BQWdCO0lBQy9DLE1BQU1OLGNBQWNGLHFEQUFPQTtJQUUzQkUsWUFBWU8sR0FBRyxDQUFDLDBCQUEwQkQsUUFBUUwsV0FBVyxFQUFFO1FBQzdETyxVQUFVO1FBQ1ZDLFFBQVFDLGtCQUF5QjtRQUNqQ0MsUUFBUSxLQUFLLEtBQUssS0FBSztRQUN2QkMsTUFBTTtJQUNSO0lBRUFaLFlBQVlPLEdBQUcsQ0FBQyxxQkFBcUJELFFBQVFGLE1BQU0sRUFBRTtRQUNuREksVUFBVTtRQUNWQyxRQUFRQyxrQkFBeUI7UUFDakNDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDdkJDLE1BQU07SUFDUjtBQUNGO0FBRU8sZUFBZUM7SUFDcEIsTUFBTWIsY0FBY0YscURBQU9BO0lBRTNCRSxZQUFZYyxNQUFNLENBQUM7SUFDbkJkLFlBQVljLE1BQU0sQ0FBQztBQUNyQiIsInNvdXJjZXMiOlsiL1VzZXJzL0IwMjk1ODY4L0Rvd25sb2Fkcy9pbnN0YWdyYW0gMi9saWIvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvbiB7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmdcbiAgdXNlcklkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKTogUHJvbWlzZTxTZXNzaW9uIHwgbnVsbD4ge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKVxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNvb2tpZVN0b3JlLmdldChcImluc3RhZ3JhbV9hY2Nlc3NfdG9rZW5cIik/LnZhbHVlXG4gIGNvbnN0IHVzZXJJZCA9IGNvb2tpZVN0b3JlLmdldChcImluc3RhZ3JhbV91c2VyX2lkXCIpPy52YWx1ZVxuXG4gIGlmICghYWNjZXNzVG9rZW4gfHwgIXVzZXJJZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFjY2Vzc1Rva2VuLFxuICAgIHVzZXJJZCxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0U2Vzc2lvbihzZXNzaW9uOiBTZXNzaW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpXG5cbiAgY29va2llU3RvcmUuc2V0KFwiaW5zdGFncmFtX2FjY2Vzc190b2tlblwiLCBzZXNzaW9uLmFjY2Vzc1Rva2VuLCB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xuICAgIHBhdGg6IFwiL1wiLFxuICB9KVxuXG4gIGNvb2tpZVN0b3JlLnNldChcImluc3RhZ3JhbV91c2VyX2lkXCIsIHNlc3Npb24udXNlcklkLCB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gMzAgZGF5c1xuICAgIHBhdGg6IFwiL1wiLFxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJTZXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKVxuXG4gIGNvb2tpZVN0b3JlLmRlbGV0ZShcImluc3RhZ3JhbV9hY2Nlc3NfdG9rZW5cIilcbiAgY29va2llU3RvcmUuZGVsZXRlKFwiaW5zdGFncmFtX3VzZXJfaWRcIilcbn1cblxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJnZXRTZXNzaW9uIiwiY29va2llU3RvcmUiLCJhY2Nlc3NUb2tlbiIsImdldCIsInZhbHVlIiwidXNlcklkIiwic2V0U2Vzc2lvbiIsInNlc3Npb24iLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIiwiY2xlYXJTZXNzaW9uIiwiZGVsZXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FB0295868%2FDownloads%2Finstagram%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();