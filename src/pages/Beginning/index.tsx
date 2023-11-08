import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { user, getUserData, UserData } from "../../firebase";
import styles from "../../styles";
import { receitas } from "../../categoriasReceitas";
import { useState } from "react";
import { Receita } from "../../types/types";

export function Beginning(): JSX.Element {
    const [userData, setUserData] = useState<UserData | undefined>(undefined);
    const [id, setId] = useState<number>(0);

    let filtered: Receita[] = [];
    async function getFiltered(): Promise<Receita[]> {
        setUserData(await getUserData(user));
        filtered = receitas.filter(
            (item) => !userData?.dislikes.includes(item.uuid)
        );
        return filtered;
    }

    getFiltered();

    return (
        <View style={styles.main}>
            <Text>{filtered[id].title}</Text>
            <Image
                style={{
                    height: "35%",
                    width: "100%",
                    borderRadius: 12,
                }}
                source={{ uri: filtered[id].imageUrl }}
            />
            {filtered[id].ingredients.map((v: string) => (
                <Text>-{v}</Text>
            ))}
        </View>
    );
}
