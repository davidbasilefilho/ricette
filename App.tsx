import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/pages/Home/index";
import { SignIn } from "./src/pages/SignIn/index";
import { Tastes } from "./src/pages/Tastes/index";

const Menu = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Página inicial",
                    }}
                />
                <Menu.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: "Criar conta",
                    }}
                />
                <Menu.Screen
                    name="Tastes"
                    component={Tastes}
                    options={{
                        title: "Criar conta",
                    }}
                />
            </Menu.Navigator>
        </NavigationContainer>
    );
}
