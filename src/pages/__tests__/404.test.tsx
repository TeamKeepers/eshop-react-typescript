import React from "react";
import { render, cleanup } from "@testing-library/react";
import Page404 from "../404";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles";

afterEach(cleanup);

it("<Page404 /> snapshot", () => {        
    const { container } = render(
        <ThemeProvider theme={theme}>
            <Page404 />
        </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
})