"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const teacherRouter_1 = __importDefault(require("./teacherRouter"));
const teamStatsRouter_1 = __importDefault(require("./teamStatsRouter"));
const studentRouter_1 = __importDefault(require("./studentRouter"));
const studentScoreRouter_1 = __importDefault(require("./studentScoreRouter"));
const teamScoreRouter_1 = __importDefault(require("./teamScoreRouter"));
const lobbyRouter_1 = __importDefault(require("./lobbyRouter"));
const teamRouter_1 = __importDefault(require("./teamRouter"));
const simRouter_1 = __importDefault(require("./simRouter"));
const matchRouter_1 = __importDefault(require("./matchRouter"));
const RoundRouter_1 = __importDefault(require("./RoundRouter"));
const StudentTeamRouter_1 = __importDefault(require("./StudentTeamRouter"));
const apiRouter = (0, express_1.Router)();
apiRouter.use("/auth", authRouter_1.default);
apiRouter.use("/teacher", teacherRouter_1.default);
apiRouter.use("/teamstats", teamStatsRouter_1.default);
apiRouter.use("/student", studentRouter_1.default);
apiRouter.use("/studentscores", studentScoreRouter_1.default);
apiRouter.use("/teamscores", teamScoreRouter_1.default);
apiRouter.use("/lobby", lobbyRouter_1.default);
apiRouter.use("/team", teamRouter_1.default);
apiRouter.use("/sim", simRouter_1.default);
apiRouter.use("/match", matchRouter_1.default);
apiRouter.use("/round", RoundRouter_1.default);
apiRouter.use("/st", StudentTeamRouter_1.default);
apiRouter.get("/", (req, res) => {
    res.send("Api Root");
});
exports.default = apiRouter;
