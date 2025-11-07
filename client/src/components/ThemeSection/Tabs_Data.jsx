'use client'

// This file used to contain a separate copy of `tabData` which caused
// duplicated sources and confusion during development. Re-export the
// canonical `tabData` from the `Tracks_new` module so both ThemeSection
// and Tracks_new use the same data at runtime.

export { tabData, __source } from "../Tracks_new/data";
