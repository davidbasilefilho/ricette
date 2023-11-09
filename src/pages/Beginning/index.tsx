import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import {
    user,
    getUserData,
    UserData,
    getUserDocumentById,
    setUserDocument,
} from "../../firebase";
import styles, { colors } from "../../styles";
import { receitas } from "../../categoriasReceitas";
import { useState } from "react";
import { Receita } from "../../types/types";

export function Beginning(): JSX.Element {
    const [id, setId] = useState<number>(0);
    let filtered: Receita[] = [];
    function getFiltered(): Receita[] {
        const userData = getUserDocumentById(user.uid);
        filtered = receitas.filter((item) => {
            return !userData?.dislikes.includes(item.categoriaId);
        });
        return filtered;
    }

    getFiltered();

    return (
        <View style={styles.main2}>
            <Text style={{ textAlign: "center", fontSize: 24 }}>
                {filtered[id].title}
            </Text>
            <Image
                style={{
                    height: "35%",
                    width: "100%",
                    borderRadius: 12,
                }}
                source={{ uri: filtered[id].imageUrl }}
            />
            {filtered[id].ingredients.map((v: string, index: number) => (
                <Text style={{ margin: 0, textAlign: "left" }} key={index}>
                    -{v}
                </Text>
            ))}

            {filtered[id].tutorial.map((v: string, index: number) => (
                <Text style={{ margin: 0, textAlign: "left" }} key={index}>
                    {index}. {v}
                </Text>
            ))}

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
                    onPress={() => setId(id + 1)}
                ></Pressable>
                <View style={{ width: "60%" }}></View>
                <Pressable
                    style={{
                        padding: 32,
                        borderRadius: 12,
                        backgroundColor: colors.greens[3],
                    }}
                    onPress={() => {
                        const doc = getUserDocumentById(user.uid);
                        if (doc) {
                            if (!doc.saved.includes(filtered[id].uuid)) {
                                setUserDocument(user.uid, {
                                    uid: doc.uid,
                                    name: doc.name,
                                    dislikes: doc.dislikes,
                                    likes: doc.likes,
                                    saved: [...doc.saved, filtered[id].uuid],
                                });
                            }
                        }
                        if (id < filtered.length - 1) setId(id + 1);
                    }}
                ></Pressable>
            </View>
        </View>
    );
}
