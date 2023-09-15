/* eslint-disable no-undef */
import {
  Container,
  ContentHeader,
  ContentTags,
  Profile,
  Paragraph,
} from "./styles";
import { FaRegClock } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Links } from "../../components/Links";
import { Tags } from "../../components/Tags";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Rating } from "../../components/Rating";
import { useAuth } from "../../hooks/auth";

export function MoviePreview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  }, []);

  return (
    <Container className="containers">
      <Header></Header>
      {data && (
        <main>
          <ContentHeader>
            <div id="boxLinks">
              <Links to="/" icon={<FiArrowLeft />} title="voltar" />
              <Links
                to={`/movieedit/${data.id}`}
                icon={<FaEdit />}
                title="editar"
              />
            </div>
            <div id="titleRating">
              <h1>{data.title}</h1>
              <span>
                <Rating count={data.rating} />
              </span>
            </div>
          </ContentHeader>
          <Profile>
            <div id="user" className="box">
              <img src={avatarURL} alt="Foto de perfil" />
              <h3>{user.name}</h3>
            </div>
            <div id="createdAt" className="box">
              <FaRegClock /> <span>{data.created_at}</span>
            </div>
          </Profile>

          <ContentTags>
            {data.tags.map((tag) => (
              <Tags key={String(tag.id)} title={tag.name} />
            ))}
          </ContentTags>

          <Paragraph>{data.description}</Paragraph>
        </main>
      )}
    </Container>
  );
}
