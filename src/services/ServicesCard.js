import styled from "styled-components";

const CardStyled = styled.article`
  padding: 1rem;
  background-color: snow;
  box-shadow: 3px 3px 10px lightgrey;
  text-align: left;
`;

const IconStyled = styled.div`
  color: white;
  background-color: #0779e4;
  padding: 0.4rem 1.3rem;
  font-size: 3rem;
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background-color: #0779e4;
    height: 10px;
    width: 10px;
    /* border: 1px solid #000; */
    bottom: -7px;
    transform: rotate(45deg) translateX(-50%);
    left: 50%;
  }
`;

const ServiceTitle = styled.h3`
  color: #0779e4;
  margin: 0.8rem 0;
`;

const ServiceText = styled.p`
  color: gray;
`;

const ServiceLink = styled.a`
  color: #0779e4;
  text-decoration: none;
`;

function ServiceCard({ title, id, url, body, icon }) {
  return (
    <CardStyled>
      <IconStyled>
        <i class={`fa fa-${icon}`} aria-hidden="true"></i>
      </IconStyled>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceText>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </ServiceText>
      <ServiceLink href={`${url}/${id}`}>
        Read more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </ServiceLink>
    </CardStyled>
  );
}

export default ServiceCard;
