'use client'

import React, { useEffect, useState, JSX } from "react";
import type { InkeepSearchBarProps } from "@inkeep/cxkit-react";
import { baseSettings, aiChatSettings, searchSettings, modalSettings } from "../config/inkeep";

export default function InkeepSearchBar() {
    const [SearchBar, setSearchBar] =
        useState<(e: InkeepSearchBarProps) => JSX.Element>();

    useEffect(() => {
        const loadSearchBar = async () => {
            try {
                const { InkeepSearchBar } = await import("@inkeep/cxkit-react");
                setSearchBar(() => InkeepSearchBar);
            } catch (error) {
                console.error("Failed to load SearchBar:", error);
            }
        };

        loadSearchBar();
    }, []);

    const searchBarProps: InkeepSearchBarProps = {
        baseSettings,
        aiChatSettings,
        searchSettings,
        modalSettings,
    };

    return SearchBar && <SearchBar {...searchBarProps} />;
}