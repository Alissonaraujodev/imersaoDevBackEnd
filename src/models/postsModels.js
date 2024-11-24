import conectarAoBanco from "../config/dbConfig.js";

//Conecta ao banco de dados utilizando string de conexão 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts(){
    // Obtém o banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes")
    // Obtém a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts")
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray()
}