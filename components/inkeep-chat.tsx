'use client'

import React, { useEffect, useState, JSX } from "react";
import type { InkeepChatButtonProps } from "@inkeep/cxkit-react";
import { baseSettings, aiChatSettings, searchSettings, modalSettings } from "../config/inkeep";
export default function InkeepChatButton() {
    const [ChatButton, setChatButton] =
        useState<(e: InkeepChatButtonProps) => JSX.Element>();

    useEffect(() => {
        const loadChatButton = async () => {
            try {
                const { InkeepChatButton } = await import("@inkeep/cxkit-react");
                setChatButton(() => InkeepChatButton);
            } catch (error) {
                console.error("Failed to load ChatButton:", error);
            }
        };

        loadChatButton();
    }, []);

    const chatButtonProps: InkeepChatButtonProps = {
        baseSettings,
        aiChatSettings,
        searchSettings,
        modalSettings,
    };

    return ChatButton && <ChatButton {...chatButtonProps} />;
}