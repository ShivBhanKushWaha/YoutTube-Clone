import { TailwindProvider } from "tailwindcss-react-native";
import StackNavigation from "./navigation/StackNavigation";

const App = () => {
  return (
    <>
      <TailwindProvider>
        <StackNavigation/>
      </TailwindProvider>
    </>
  );
}

export default App;

