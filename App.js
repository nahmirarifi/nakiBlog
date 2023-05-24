import AppContextProvider from "./src/hooks/Context";
import RootStack from "./src/navigation/RootStack";


export default function App() {
  return (
    <AppContextProvider>
      <RootStack />
    </AppContextProvider>
  );
}

