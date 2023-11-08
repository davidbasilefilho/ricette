import { StyleSheet } from "react-native";

export const colors: ColorScheme = {
    whites: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1"],
    blues: ["#93c5fd", "#60a5fa", "#3b82f6", "#2563eb"],
    reds: ["#fca5a5", "#f87171", "#ef4444", "#dc2626"],
    greens: ["#86efac", "#4ade80", "#22c55e", "#16a34a"],
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.whites[0],
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 16,
    },
    txtInput: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.whites[1],
        borderColor: colors.whites[3],
        borderWidth: 1,
        height: 32,
        maxWidth: "100%",
    },
    hidePassBtn: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.whites[2],
        borderColor: colors.whites[3],
        borderWidth: 1,
        height: 32,
    },
    submitBtn: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.blues[2],
        borderColor: colors.blues[3],
        borderWidth: 1,
        height: 32,
        width: "100%",
    },
    whiteTxt: {
        color: colors.whites[0],
    },
});

export default styles;
export type ColorScheme = {
    whites: string[];
    blues: string[];
    reds: string[];
    greens: string[];
};
