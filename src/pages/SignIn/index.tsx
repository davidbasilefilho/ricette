import { TextInput, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../../firebase";
import styles from "../../styles";
import { useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [hide, setHide] = useState<boolean>(true);

    const nav = useNavigation();
    return (
        <View style={styles.main}>
            <TextInput
                value={email}
                onChangeText={(e) => setEmail(e)}
                style={styles.txtInput}
                placeholder="E-mail"
            />
            <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
                <TextInput
                    secureTextEntry={hide}
                    value={pass}
                    onChangeText={(e) => setPass(e)}
                    style={styles.txtInput}
                    placeholder="Senha"
                />
                <Pressable onPress={() => setHide(!hide)}></Pressable>
            </View>
            <Text>
                Quer logar? Aperte{" "}
                <Pressable onPress={() => nav.navigate("LogIn")}>
                    <Text style={{ color: "blue" }}>aqui</Text>
                </Pressable>
            </Text>
        </View>
    );
}
