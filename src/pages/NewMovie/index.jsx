import { Container, Form } from "./styles";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Links } from "../../components/Links";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Genre } from "../../components/Genre";
import { Button } from "../../components/Button";

import {FiArrowLeft} from 'react-icons/fi';

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function NewMovie(){

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    async function handleNewMovie(){

        if(!title){
            return alert("Título não adicionado")
        }

        if(!rating){
            return alert("Nota não adicionado")
        }

        if(!description){
            return alert("Descrição não adicionado")
        }

        if(newTag){
            return alert("Tag não adicionada")
        }

        await api.post("/movies", {
            title,
            rating,
            description,
            tags
        })
        // console.log(response)
        alert("Filme cadastrado com sucesso!")

        navigate(-1)
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
        
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }



    return(
        <Container className="containers">
            <Header/>
            <main>
                <Links to="/" icon={<FiArrowLeft/>} title="voltar"/>
                <h2>Novo filme</h2>
                <Form>
                    <div id="inputsForm">
                        <Input 
                            className="newMovieInput" 
                            type="text" 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            className="newMovieInput" 
                            type="number" 
                            placeholder="Sua nota (0 a 5)"
                            onChange={e => setRating(e.target.value)}

                        />
                    </div>
                    <TextArea 
                        placeholder="Observações..."
                        onChange={e => 
                            setDescription(e.target.value)
                        }

                    />
                    <h3>Marcadores</h3>
                    <section>
                        <div id="tags">
                            {
                                tags.map((tag, index) => (
                                    <Genre
                                        key={String(index)}
                                        value={tag}
                                        onClick={()=>{handleRemoveTag(tag)}}
                                    />
                                ))
                            }
                            <Genre
                                isNew
                                placeholder="Nova Tag"
                                value={newTag}
                                onChange={e=> setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </section>
                    <div id="buttons">
                        
                        <Button 
                            title="Salvar alterações"
                            onClick={handleNewMovie}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}