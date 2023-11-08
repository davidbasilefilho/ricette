import { TextInput, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logIn, user } from "../../firebase";
import styles, { colors } from "../../styles";
import { useEffect, useState } from "react";

export function LogIn() {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [hide, setHide] = useState<boolean>(true);
    const [hideTxt, setHideTxt] = useState<string>("");

    const nav = useNavigation();

    const [res, setRes] = useState<string>("");
    const submit = () => {
        if (email && pass) {
            setRes(logIn(email, pass));
            if (user) nav.navigate("Tastes");
        }
    };

    useEffect(() => {
        setHideTxt(hide ? "Mostrar senha" : "Esconder senha");
    }, [hide]);

    return (
        <View style={styles.main}>
            <View
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                }}
            >
                <TextInput
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    style={[styles.txtInput, { width: "100%" }]}
                    placeholder="E-mail"
                />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                    }}
                >
                    <TextInput
                        secureTextEntry={hide}
                        value={pass}
                        onChangeText={(e) => setPass(e)}
                        style={styles.txtInput}
                        placeholder="Senha"
                        placeholderTextColor={colors.whites[4]}
                    />
                    <Pressable
                        style={styles.hidePassBtn}
                        onPress={() => setHide(!hide)}
                    >
                        <Text>{hideTxt}</Text>
                    </Pressable>
                </View>
                {res && (
                    <View style={[styles.blueCard, { width: "100%" }]}>
                        <Text>{res}</Text>
                    </View>
                )}

                <Pressable style={styles.submitBtn} onPress={submit}>
                    <Text style={[styles.whiteTxt, { textAlign: "center" }]}>
                        Entrar
                    </Text>
                </Pressable>
            </View>
            <Text>
                Quer criar uma conta? Aperte{" "}
                <Pressable onPress={() => nav.navigate("SignIn")}>
                    <Text style={{ color: "blue" }}>aqui</Text>
                </Pressable>
            </Text>
        </View>
    );
}
