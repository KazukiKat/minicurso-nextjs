'use client'
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Link from "next/link";
import Button from "../../components/Button";
import { FormEvent } from "react";

export default function novaNoticia(){

    async function onSubmit(evento: FormEvent<HTMLFormElement> & {
        target: {
            titulo: {value: string};
            descricao: {value: string};
            conteudo: {value: string};
            imagem: {value: string};
        }
    }){
        evento.preventDefault()

        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const conteudo = evento.target.conteudo.value;
        const imagem = evento.target.imagem.value;

        const response = await fetch('/api/noticia', {
            method:'POST',
            body: JSON.stringify({titulo,descricao,conteudo,imagem})
        })
        const  {status, mensagem} = await response.json()
        alert(mensagem+" "+status)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4">Nova Notícia</h1>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <TextInput label="Título" name="titulo"></TextInput>
                <TextInput label="Descricao" name="descricao"></TextInput>
                <TextArea label="Conteudo" name="conteudo"></TextArea>
                <TextInput label="URL da Imagem" name="imagem"></TextInput>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Button type="button" className="bg-gray-500 hover:bg-gray-700">Voltar</Button>
                    </Link>
                    <Button type="submit" className="bg-sky-500 hover:bg-sky-700">Enviar</Button>
                </div>
            </form>
        </div>
    )
}