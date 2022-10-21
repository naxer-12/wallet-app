import Welcome from "./screens/Welcome";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  let [fontLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <Welcome />;
}
