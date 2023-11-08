import { Pressable, Text, View } from "react-native";
import styles, { colors } from "../../styles";
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categorias } from "../../categoriasReceitas";
import { getUserData, setOrCreateUserDocument, user } from "../../firebase";

export function Tastes() {
    const [categoriaId, setCategoriaId] = useState<number>(0);
    const [categoriasLikes, setCategoriasLikes] = useState<string[]>([]);
    const [categoriasDislikes, setCategoriasDislikes] = useState<string[]>([]);
    const nav = useNavigation();

    const submit = () => {
        setOrCreateUserDocument(user, {
            name: "",
            saved: [],
            likes: categoriasLikes,
            dislikes: categoriasDislikes,
        });
    };

    const addLike = () => {
        setCategoriasLikes([...categoriasLikes, categorias[categoriaId].uuid]);

        if (categoriaId < categorias.length - 1) {
            setCategoriaId(categoriaId + 1);
        }

        if (categoriaId >= categorias.length) {
            submit();
        }
    };

    const addDislike = async () => {
        const userData = await getUserData(user);
        if (!userData?.likes.includes(categorias[categoriaId].uuid)) {
            setCategoriasDislikes([
                ...categoriasDislikes,
                categorias[categoriaId].uuid,
            ]);
        }

        if (categoriaId < categorias.length - 1) {
            setCategoriaId(categoriaId + 1);
        }

        if (categoriaId >= categorias.length) {
            submit();
        }
    };

    return (
        <View style={styles.main}>
            <>
                <Text style={{ fontSize: 24, textAlign: "center" }}>
                    Você gosta de{"\n"}
                    {categorias[categoriaId].title}?
                </Text>
                <Image
                    style={{
                        height: "55%",
                        width: "100%",
                        borderRadius: 12,
                    }}
                    source={{ uri: categorias[categoriaId].imageUrl }}
                />
                <Text style={{ textAlign: "center" }}>
                    {categorias[categoriaId].descricao}
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Pressable
                        style={{
                            padding: 32,
                            borderRadius: 12,
                            backgroundColor: colors.reds[3],
                        }}
                        onPress={() => addDislike()}
                    ></Pressable>
                    <View style={{ width: "100%" }}></View>
                    <Pressable
                        style={{
                            padding: 32,
                            borderRadius: 12,
                            backgroundColor: colors.greens[3],
                        }}
                        onPress={() => addLike()}
                    ></Pressable>
                </View>
            </>
            <Pressable
                style={styles.submitBtn}
                onPress={() => nav.navigate("Beginning")}
            >
                <Text style={[styles.whiteTxt, { textAlign: "center" }]}>
                    Continuar
                </Text>
            </Pressable>
        </View>
    );
}
