import { Box } from "@mui/material";
import MainLayout from "./components/ui/sidebar/Layouts/MainLayout";
import Customers from "./pages/Customers";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (<Provider store={store}>
    <Box width="100%" height="100vh">
      <MainLayout>
        <Customers />
      </MainLayout>
    </Box>
  </Provider>)
};

export default App;