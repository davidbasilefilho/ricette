import { TextInput, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../../firebase";
import styles, { colors } from "../../styles";
import { useEffect, useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [passConf, setPassConf] = useState<string>("");
    const [hide, setHide] = useState<boolean>(true);
    const [hideTxt, setHideTxt] = useState<string>("");

    const nav = useNavigation();

    const submit = () => {
        if (email && pass && passConf && pass === passConf) {
            signIn(email, pass);
            nav.navigate("Tastes");
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
                        value={passConf}
                        onChangeText={(e) => setPassConf(e)}
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
                <Pressable style={styles.submitBtn} onPress={submit}>
                    <Text style={[styles.whiteTxt, { textAlign: "center" }]}>
                        Criar conta
                    </Text>
                </Pressable>
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
