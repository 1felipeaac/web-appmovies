import { Container, Form } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Links } from "../../components/Links";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Genre } from "../../components/Genre";
import { Button } from "../../components/Button";

import { useParams } from "react-router-dom";


import {FiArrowLeft} from 'react-icons/fi';

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function MovieEdit(){

    const [data, setData] = useState(null);
    const [title, setTitle] = useState()
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const params = useParams();

    const navigate = useNavigate();

    async function handleEditMovie(){

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

        await api.put(`/movies/${params.id}`, {
            title,
            rating,
            description,
            tags
        })
        
        alert("Filme atualizado com sucesso!")

        handleBack()
    }

    async function handleRemove(){
        const confirm = window.confirm("Tem certeza que quer excluir o filme")

        if (confirm){
            await api.delete(`/movies/${params.id}`)
            handleBack()
        }
    }

    function handleBack(){
        navigate(-1)
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
        
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    useEffect(()=>{
        async function fetchMovie(){
            const response = await api.get(`/movies/${params.id}`)
            
            const { title, rating, description, tags } = response.data;
            setData(response.data);
            setTitle(title);
            setRating(rating);
            setDescription(description);
            setTags(tags.map((tag) => tag.name));
        }
        fetchMovie()
      },[])

    return(
        <Container className="containers">
            <Header/>
            {data && <main>
                <Links to="/" icon={<FiArrowLeft/>} title="voltar"/>
                <Form>
                    <div id="inputsForm">
                        <Input 
                            className="newMovieInput" 
                            type="text" 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        ></Input>
                        <Input 
                            className="newMovieInput" 
                            type="number" 
                            placeholder="Sua nota (0 a 5)"
                            onChange={e => setRating(e.target.value)}
                            value={rating}
                        />
                    </div>
                    <TextArea 
                        placeholder="Observações..."
                        onChange={e => 
                            setDescription(e.target.value)
                        }
                        value={description}
                    >
                    </TextArea>
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
                            title="Excluir filme"
                            onClick={handleRemove}

                        />
                        <Button 
                            title="Salvar alterações"
                            onClick={handleEditMovie}
                        />
                    </div>
                </Form>
            </main>}
        </Container>
    )
}