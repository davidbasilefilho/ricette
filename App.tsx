import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import { Home } from "./src/pages/Home/index";
import { SignIn } from "./src/pages/SignIn/index";

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
                        headerTintColor: "#fff",
                    }}
                />
            </Menu.Navigator>
            <Menu.Navigator>
                <Menu.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: "Criar conta",
                        headerTintColor: "#fff",
                    }}
                />
            </Menu.Navigator>
        </NavigationContainer>
    );
}
