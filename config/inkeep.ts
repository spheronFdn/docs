import type {
    InkeepAIChatSettings,
    InkeepSearchSettings,
    InkeepBaseSettings,
    InkeepModalSettings,
} from "@inkeep/cxkit-react";

const inkeepApiKey = process.env.NEXT_PUBLIC_INKEEP_API_KEY;

const baseSettings: InkeepBaseSettings = {
    apiKey: inkeepApiKey,
    primaryBrandColor: "#000000", // your brand color, widget color scheme is derived from this
    organizationDisplayName: "Spheron",
    // ...optional settings
};

const modalSettings: InkeepModalSettings = {
    // optional settings
};

const searchSettings: InkeepSearchSettings = {
    // optional settings
};

const aiChatSettings: InkeepAIChatSettings = {
    // optional settings
    aiAssistantAvatar: "/spheron-logo.svg", // use your own ai assistant avatar
    exampleQuestions: [
        "How to deploy an app on Spheron Protocol?",
        "how to register a Fizz Node?",
        "Provider Mode vs Fizz Mode?",
    ],
};


export { baseSettings, modalSettings, searchSettings, aiChatSettings, inkeepApiKey };