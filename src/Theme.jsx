import { EditorView } from "@codemirror/view";
import { HighlightStyle, tags as t } from "@codemirror/highlight";

const tooltipBackground = "#282a36",
    selection = "#54555e",
    white = "#eff0eb",
    black = "#282a36",
    cursor = "#97979b",
    red = "#ff5c57",
    green = "#5af78e",
    yellow = "#f3f99d",
    blue = "#57c7ff",
    magenta = "#ff6ac1",
    cyan = "#9aedfe",
    gray = "#616263";

/// The editor theme styles for One Dark.
export const snazzyTheme = EditorView.theme(
    {
        "&": {
            color: white,
            backgroundColor: black,
        },

        ".cm-content": {
            caretColor: cursor,
        },

        ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
        "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
            { backgroundColor: selection },

        ".cm-panels": { backgroundColor: black, color: white },
        ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
        ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

        ".cm-searchMatch": {
            backgroundColor: "#72a1ff59",
            outline: "1px solid #457dff",
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
            backgroundColor: "#6199ff2f",
        },

        ".cm-activeLine": { backgroundColor: gray },
        ".cm-selectionMatch": { backgroundColor: "#aafe661a" },

        "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":
            {
                backgroundColor: "#bad0f847",
                outline: "1px solid #515a6b",
            },

        ".cm-gutters": {
            backgroundColor: black,
            color: gray,
            border: "none",
        },

        ".cm-activeLineGutter": {
            backgroundColor: gray,
        },

        ".cm-foldPlaceholder": {
            backgroundColor: "transparent",
            border: "none",
            color: "#ddd",
        },

        ".cm-tooltip": {
            border: "none",
            backgroundColor: tooltipBackground,
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
            borderTopColor: tooltipBackground,
            borderBottomColor: tooltipBackground,
        },
        ".cm-tooltip-autocomplete": {
            "& > ul > li[aria-selected]": {
                backgroundColor: gray,
                color: white,
            },
        },
    },
    { dark: true }
);

/// The highlighting style for code in the One Dark theme.
export const snazzyHighlightStyle = HighlightStyle.define([
    { tag: t.keyword, color: magenta },
    {
        tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
        color: yellow,
    },
    { tag: [t.function(t.variableName), t.labelName], color: yellow },
    { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: green },
    { tag: [t.definition(t.name), t.separator], color: white },
    {
        tag: [
            t.typeName,
            t.className,
            t.number,
            t.changed,
            t.annotation,
            t.modifier,
            t.self,
            t.namespace,
        ],
        color: magenta,
    },
    {
        tag: [
            t.operator,
            t.operatorKeyword,
            t.url,
            t.escape,
            t.regexp,
            t.link,
            t.special(t.string),
        ],
        color: cyan,
    },
    { tag: [t.meta, t.comment], color: gray },
    { tag: t.strong, fontWeight: "bold" },
    { tag: t.emphasis, fontStyle: "italic" },
    { tag: t.strikethrough, textDecoration: "line-through" },
    { tag: t.link, color: blue, textDecoration: "underline" },
    { tag: t.heading, fontWeight: "bold", color: yellow },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: white },
    { tag: [t.processingInstruction, t.string, t.inserted], color: green },
    { tag: t.invalid, color: red },
]);

export const snazzy = [snazzyTheme, snazzyHighlightStyle];
