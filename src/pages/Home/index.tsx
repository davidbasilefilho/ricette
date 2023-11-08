import { View, Text } from "react-native";
import { user } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles";

export function Home() {
    const nav = useNavigation();
    if (!user) {
        nav.navigate("SignIn");
    }
    return (
        <View style={styles.main}>
            <Text>Come as you are, come as you were</Text>
        </View>
    );
}
