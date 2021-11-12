import styled from "styled-components";
import ServiceCard from "./ServicesCard";
import { useState } from "react";

const servicesInitArr = [
  {
    id: 1,
    icon: "address-card",
    title: "UI & UX Design",
    body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    url: "/cards",
  },
  {
    id: 2,
    icon: "window-restore",
    title: "Web Development",
    body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    url: "/cards",
  },
  {
    id: 3,
    icon: "user-circle",
    title: "Graphic Design",
    body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    url: "/cards",
  },
];

const Section = styled.section`
  max-width: 800px;
  margin: 3% auto;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const TitleTop = styled.h4`
  text-transform: uppercase;
  color: #0779e4;
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  max-width: 650px;
  margin: 0 auto 1.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

// sukurima duomenu masyva is kurio sugeneruojam korteles, iconeles,
// pavadinimus ir nuorodas '/cards/<korteles id>'

function Services() {
  const [cardArr, setCardArr] = useState(servicesInitArr);
  return (
    <Section>
      <TitleTop>Services</TitleTop>
      <MainTitle>
        This is My Expertise, The Services I'll Provide My Clients
      </MainTitle>
      <CardContainer>
        {cardArr.map((cardObj) => (
          <ServiceCard key={cardObj.id} {...cardObj} />
        ))}
      </CardContainer>
    </Section>
  );
}

export default Services;
