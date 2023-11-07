import { View, Text } from "react-native";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const nav = useNavigation();
    if (!auth.currentUser) {
        nav.navigate("SignIn");
    }
    return (
        <View>
            <Text>Come as you are, come as you were</Text>
        </View>
    );
}
