import { Provider } from "react-redux";
import LeftContainer from "./component/LeftContainer";
import RightContainer from "./component/RightContainer";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <LeftContainer />
        <RightContainer />
      </div>
    </Provider>
  );
}

export default App;
