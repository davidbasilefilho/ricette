import { randomUUID } from "expo-crypto";
import { Categoria, Receita } from "./types/types";

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
            "Confeitagem é a arte de fazer confeitos, que são alimentos ricos em açúcar e carboidratos. Definições exatas são difíceis. Em geral, entretanto, os confeitos são divididos em duas categorias amplas e um tanto sobrepostas: confeitos de padeiros e confeitos de açúcar. A profissão de confeiteiro abrange as categorias de cozinha do patissier francês (boleiro) e o confiseur (açucareiro)",
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

export const receitas: Receita[] = [
    {
        uuid: randomUUID(),
        title: "Brigadeirão de micro-ondas",
        categoriaId: categorias[1].uuid,
        imageUrl:
            "https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=640,h=360,fit=cover/wp-content/uploads/2021/10/img-7853.jpg",
        ingredients: [
            "1 lata de leite condensado",
            "3 ovos inteiros",
            "1 lata de creme de leite",
            "1 xícara de chocolate em pó",
            "1 colher (sopa) de margarina",
            "chocolate granulado para enfeitar",
        ],
        tutorial: [
            "Coloque todos os ingredientes no liquidificador e bata bem até dobrar de volume.",
            "Despeje a massa em uma forma redonda com furo central untada e leve ao micro-ondas por 10 minutos.",
            "Ao retirar do micro-ondas, enfeite com chocolate granulado e bom apetite.",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Pavê de chocolate",
        categoriaId: categorias[1].uuid,
        imageUrl:
            "https://guiadacozinha.com.br/wp-content/uploads/2019/10/pave-doce-de-leite-chocolate.jpg",
        ingredients: [
            "1 pacote de bolacha maisena",
            "1 colher (sobremesa) de chocolate em pó",
            "1/2 copo de leite",
            "1 lata de leite condensado",
            "1 colher (sobremesa) de amido de milho",
            "1 lata de leite de vaca (use a medida da lata de leite condensado)",
            "2 gemas de ovo",
            "1 lata de leite condensado",
            "1 colher (sobremesa) de amido de milho",
            "4 colheres de chocolate em pó",
            "1 lata de leite de vaca (a medida da lata de leite condensado)",
            "2 gemas de ovo",
            "4 claras de ovo",
            "1 lata de creme de leite sem soro",
            "4 colheres de açúcar",
        ],
        tutorial: [
            "Em uma tigela, misture o leite e o chocolate em pó até que esteja completamente dissolvido.",
            "Molhe as bolachas no leite e reserve.",
            "Creme branco - Em uma panela, leve todos os ingredientes ao fogo médio e misture até obter uma consistência grossa e cremosa.",
            "Creme de chocolate - Repita o processo feito no creme branco.",
            "Para a cobertura - Bata as claras em neve com o açúcar até obter um creme consistente, adicione o creme de leite e misture delicadamente.",
            "Montagem - Em um refratário grande, despeje o creme branco, metade das bolachas, creme de chocolate, bolachas e claras em neve.",
            "Repita o processo até preencher todo o refratário e leve à geladeira por 40 minutos.",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Suspiro Caseiro",
        categoriaId: categorias[1].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/de1769d0c64527036d71f64229194b99/157615-original.jpg",
        ingredients: [
            "5 claras",
            "1 limão (aqueles bem verdes e grandes)",
            "4 xícaras de açúcar",
        ],
        tutorial: [
            "Faça a sua neve com as claras de ovos, deixando bem consistente.",
            "Na batedeira, vá acrescentando o açúcar, aos poucos.",
            "Coloque em uma refratária de vidro (ou algo assim) e rale um pouco de casquinha de limão só para dar o toquinho final.",
            "Leve ao forno a 100º C.",
            "Deixe por, aproximadamente, 10 minutos e se não crescer, pode aumentar para uns 15 minutos.",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Panqueca de carne moida",
        categoriaId: categorias[2].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/cefcaa9cb2639b50959780d97899b977/326537-original.jpg",
        ingredients: [
            "1 e 1/2 xícara (chá) de farinha de trigo",
            "Leite",
            "1 xícara (chá) de leite",
            "2 ovos",
            "4 colheres (sopa) de óleo",
            "Sal a gosto",
            "300 g de carne moída",
            "2 colheres (sopa) de cebola picada ou ralada",
            "1/2 tomate cortado em cubos",
            "1/2 lata de extrato de tomate",
            "1 caixa de creme de leite",
            "400g de muçarela fatiado",
            "queijo ralado a gosto",
        ],
        tutorial: [
            "Massa - Bata no liquidificador os ovos, o leite, o óleo, e acrescente a farinha de trigo aos poucos.",
            "Após acrescentar toda a farinha de trigo, adicione sal a gosto.",
            "Misture a massa até obter uma consistência cremosa.",
            "Com um papel-toalha, espalhe óleo por toda a frigideira e despeje uma concha de massa.",
            "Faça movimentos circulares para que a massa se espalhe por toda a frigideira",
            "Espere até a massa soltar do fundo e vire a massa para fritar do outro lado.",
            "Recheio: Em uma panela, doure a cebola com o óleo e acrescente a carne.",
            "Deixe cozinhar até que saia água da carne, diminua o fogo e tampe.",
            "Acrescente o tomate picado e tampe novamente.",
            "Deixe cozinhar por mais 3 minutos e misture",
            "Acrescente o extrato de tomate e temperos a gosto.",
            "Deixe cozinhar por mais 10 minutos.",
            "Quando o molho engrossar, desligue o fogo.",
            "Deixe esfriar o molho, acrescente o creme de leite e misture bem.",
            "Quando estiver bem homogêneo, leve novamente ao fogo e deixe cozinhar em fogo baixo por mais 5 minutos.",
            "Montagem: Recheie a panqueca com uma fatia de mussarela, uma porção de carne e enrole.",
            "Faça esse processo com todas as panquecas.",
            "Despeje um pouco de caldo no fundo de um refratário, para untar.",
            "Disponha as panquecas já prontas no refratário e despeje sobre elas o restante do molho.",
            "Polvilhe queijo ralado sobre as panquecas.",
            "Leve ao forno para gratinar, em fogo médio, por 20 minutos ou até que o queijo esteja derretido",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Rocambole de carne moída",
        categoriaId: categorias[2].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/f756b5f3d39efb6a507b6646bc2463ad/298322-original.jpg",
        ingredients: [
            "1/2 kg de carne moída",
            "1 pacote de sopa de cebola",
            "presunto fatiado",
            "queijo fatiado",
            "tempero verde",
            "sal a gosto",
        ],
        tutorial: [
            "Tempere a carne moída com a sopa de cebola, o tempero verde e o sal.",
            "Coloque a carne temperada sobre uma folha de papel laminado ou papel manteiga e abra a massa com um rolo, na espessura de 1 cm, mais ou menos.",
            "Forre a carne com o presunto e o queijo, pode-se colocar também milho verde, ervilha e requeijão.",
            "Enrole a carne, com ajuda da folha de papel laminado ou manteiga, em forma de rocambole.",
            "Leve ao forno, em temperatura alta, por mais ou menos 30 minutos, ou no microondas por 15 minutos",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Quibe",
        categoriaId: categorias[2].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/d08483f3da1421b601d8027e34038f07/49815-original.jpg",
        ingredients: [
            "500 g de trigo para kibe",
            "500 g de carne moída (patinho de preferência)",
            "750 ml de água fervendo",
            "2 cebolas ralada ou bem picadinha",
            "hortelã, pimenta-de-cheiro e sal a gosto",
        ],
        tutorial: [
            "Coloque o trigo em uma forma de bolo, para espalhar bem.",

            "Despeje a água fervendo e deixe tampado com um pano de prato por 40 minutos, (a quantidade de água tem quer ser essa, por que não precisa escorrer).",

            "Coloque a carne moída os temperos o sal e misture bem.",

            "Enrole no formato de quibe, frite em óleo quente ou asse no forno recheando com catupiry - fica uma delícia.",
        ],
    },

    {
        uuid: randomUUID(),
        title: "Repolho refogado",
        categoriaId: categorias[0].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/555c37d5c725f19cfadb0a2e2952189a/121804-original.jpg",
        ingredients: [
            "1 repolho lavado e fatiado fino",
            "1 dente de alho",
            "2 colheres de azeite doce",
            "Sal a gosto",
            "1 lata de ervilha",
            "1 lata de milho",
            "Salsinha a gosto",
        ],
        tutorial: [
            "Em uma panela coloque o azeite e o alho batido, deixe aquecer levemente.",

            "Acrescente o repolho e mexa até murchar um pouco.",

            "Salpique sal e coloque o milho, ervilha, salsinha picada, abafe um pouco com a tampa e desligue o fogo.",

            "Pode servi com arroz branco e frango assado.",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Salada tropical",
        categoriaId: categorias[0].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/439e1e353fc3b45e198d9c26cd6af38b/10072-original.jpg",
        ingredients: [
            "alface crespa",
            "alface lisa",
            "rúcula",
            "agrião",
            "endívia",
            "100 g azeitonas verdes",
            "100 g repolho roxo em tiras",
            "1 cenoura ralada em tiras",
            "1 pepino fatiado",
            "100 g queijo parmesão em lascas",
            "100 g tomate seco",
            "12 ovos de codorna",
            "1 vidro palmito",
            "150 g peito de peru fatiado",
            "1 manga fatiada",
        ],
        tutorial: [
            "Lave bem as folhagens e cubra o fundo de uma travessa.",
            "Corte o palmito e o peito de peru em rodelas.",
            "Adicione os ingredientes sobre as folhas, deixe o repolho e a cenoura para o final.",
            "Sirva com molho de iogurte batido com ervas finas e azeite a gosto.",
        ],
    },
    {
        uuid: randomUUID(),
        title: "Souflé de Legumes",
        categoriaId: categorias[0].uuid,
        imageUrl:
            "https://static.itdg.com.br/images/640-400/d69e50331c57a4d807f226c1be1cf8ee/38691-original.jpg",
        ingredients: [
            "2 colheres (sopa) de farinha de trigo",
            "300 ml de leite",
            "2 colheres (sopa) de manteiga ou margarina",
            "1 pitada de sal",
            "50 g de queijo ralado",
            "4 ovos",
            "legumes cozidos e cortados em cubos",
        ],
        tutorial: [
            "Derreta a manteiga, sem deixar esquentar muito.",
            "Junte a farinha, o sal e o leite e mexa sempre até engrossar.",
            "Retire do fogo e deixe esfriar.",
            "Misture as gemas bem batidas, o queijo e os legumes.",
            "Por fim, acrescente as claras em neve.",
        ],
    },
];
