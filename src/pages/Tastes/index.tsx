import { Pressable, Text, View } from "react-native";
import styles, { colors } from "../../styles";
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categorias } from "../../categoriasReceitas";

export function Tastes() {
    const [categoriaId, setCategoriaId] = useState<number>(0);
    const [categoriasLikes, setCategoriasLikes] = useState<string[]>([]);
    const [categoriasDislikes, setCategoriasDislikes] = useState<string[]>([]);
    const nav = useNavigation();

    const submit = () => {};

    const addLike = () => {
        setCategoriasLikes([...categoriasLikes, categorias[categoriaId].uuid]);

        if (categoriaId !== categorias.length - 1)
            setCategoriaId(categoriaId + 1);
        else submit();
    };

    const addDislike = () => {
        setCategoriasDislikes([
            ...categoriasDislikes,
            categorias[categoriaId].uuid,
        ]);

        if (categoriaId !== categorias.length - 1)
            setCategoriaId(categoriaId + 1);
        else submit;
    };

    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
                {categorias[categoriaId].title}
            </Text>
            <Image
                style={{ height: "60%", width: "100%", borderRadius: 12 }}
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
                ></Pressable>
                <View style={{ width: "100%" }}></View>
                <Pressable
                    style={{
                        padding: 32,
                        borderRadius: 12,
                        backgroundColor: colors.greens[3],
                    }}
                ></Pressable>
            </View>
        </View>
    );
}
