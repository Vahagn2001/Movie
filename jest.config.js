
export default {
    transform: {
        "\\.[jt]sx?$": "babel-jest",
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest-setup.js"],
};
