import { MuiTheme } from "src/theme";
import { Pages } from "src/app/pages";
import { Provider } from "react-redux";
import { Store } from "src/services";

export const App = () => {
  return (
    <Provider store={Store}>
      <MuiTheme>
        <Pages.Main />
      </MuiTheme>
    </Provider>
  );
};
