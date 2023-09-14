import { Container, InputSearch } from "./styles";
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {Preview} from '../../components/Preview';
import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";


export function Home(){

    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    function handleTagSelected(tagName){
        if(tagName === "Todos"){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName);

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState =>[...prevState, tagName]);
        }
        
    }

    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data)
        }
        
        fetchTags();
    },[])

    useEffect(()=>{
        async function fetchMovies(){
            const response = await api.get(
                `/movies?title=${search}&tags=${tagsSelected}`
            )
            setMovies(response.data)
        }

        fetchMovies();
    },[tagsSelected, search])

    return(
        <Container id="containerHome" className="containers">
            <Header>
            </Header>
            <main>
                <div id="movieData">
                    <h2>Meus filmes</h2>
                    <InputSearch 
                        placeholder="Buscar pelo Título"
                        onChange={(e)=>{setSearch(e.target.value)}}
                    />
                    <Button
                        to="newmovie"
                        icon={<FiPlus/>}
                        title="Adicionar filme" 
                    />
                </div>

                {movies &&
                    movies.map((movie)=>(
                        <Preview 
                            key={String(movie.id)} 
                            to={`moviepreview/${movie.id}`}
                            title={movie.title}
                            rating={movie.rating}
                            // description={movie.description}
                            tags={movie.tags.map((tag)=>(
                                tag.name
                            ))}
                        />
                    ))
                }
            </main>
            <aside>
                <ButtonText 
                    title="Todos" 
                    isactive={tagsSelected.length === 0}
                    onClick={()=>handleTagSelected("Todos")}
                />
                {tags && tags.map((tag)=>(
                        <ButtonText 
                            key={String(tag.id)}
                            title={tag.name}
                            onClick={()=> handleTagSelected(tag.name)}
                            isactive ={tagsSelected.includes(tag.name)}
                        />
                ))}
            </aside>
        </Container>
    )
}