import { ReactNode } from "react";
import { CssBaseline, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const MuiTheme = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#f5f5f5",
      },
      secondary: {
        main: "#424242",
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper>{children}</Paper>
      </ThemeProvider>
    </>
  );
};
