/**
 * DEFINE A THEM IS A PAIN IN THE ASS WITH EMOTION
 * SOMETIMES WORKING, SOMETIMES NOT
 */
import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            main: string,
            success: string,
            catchy: string,
            fade: string,
        },
        boxShadow: string,
        radius: string
    }
}

// export type ThemeType = {
//     colors: {
//         main: string,
//         success: string,
//         catchy: string,
//         fade: string,
//     },
//     boxShadow: string,
//     radius: string
// }

export const theme = {
    colors: {
        main: "#000",
        success: "#62c16c",
        catchy: "#d80027",
        fade: "rgba(0, 0, 0, .2)",
    },
    boxShadow: "5px 5px 0.2px 0.5px rgba(0, 0, 0, .2)",
    radius: "5px"
};