export type Categoria = {
    uuid: string;
    title: string;
    receitas: string[];
    descricao: string;
    imageUrl: string;
};

export type Receita = {
    uuid: string;
    title: string;
    ingredients: string[];
    imageUrl: string;
    categoriaId: string;
    tutorial: string[];
};
