import { randomUUID } from "expo-crypto";
import { Categoria } from "./types/types";

export const categorias: Categoria[] = [
    {
        uuid: randomUUID(),
        title: "Hortaliças",
        receitas: [],
        imageUrl:
            "https://agriconline.com.br/portal/wp-content/uploads/2021/05/como_comprar_frutas_hortalicas.jpg",
        descricao:
            "Hortaliças, legumes e verduras são termos utilizados para designar produtos nutricionais, agrícolas e culinários que se referem a plantas ou partes destas, geralmente consumidas por humanos como alimento. ",
    },
    {
        uuid: randomUUID(),
        title: "Doces",
        receitas: [],
        imageUrl:
            "https://www.receitaculinarias.com.br/wp-content/uploads/2023/08/tiramisu.jpg",
        descricao:
            "Confeitagem é a arte de fazer confeitos, que são alimentos ricos em açúcar e carboidratos. Definições exatas são difíceis.[3] Em geral, entretanto, os confeitos são divididos em duas categorias amplas e um tanto sobrepostas: confeitos de padeiros e confeitos de açúcar. A profissão de confeiteiro abrange as categorias de cozinha do patissier francês (boleiro) e o confiseur (açucareiro)",
    },
    {
        uuid: randomUUID(),
        title: "Carne",
        receitas: [],
        imageUrl:
            "https://www.receiteria.com.br/wp-content/uploads/picanha-na-manteiga-730x548.jpeg",
        descricao:
            "Dá-se o nome de carne ao tecido muscular dos animais, inclusive do homem. Algumas vezes, o termo se refere apenas à carne de mamíferos, ou de mamíferos e aves. De modo ainda mais estrito, o termo se refere apenas à porção vermelha do tecido muscular. Geralmente, o termo é utilizado quando o tecido serve como alimento para animais carnívoros ou omnívoros.",
    },
];
