import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import { Home } from "./src/pages/Home/index";

const Menu = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Página principal",
                        headerStyle: {
                            backgroundColor: "#333",
                        },
                        headerTintColor: "#fff",
                    }}
                />
                <Menu.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        title: "Sobre ::: a empresa",
                    }}
                />
            </Menu.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
