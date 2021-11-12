import styled from 'styled-components';

const PlanCard = styled.article`
  max-width: 30%;
  padding: 1rem;
  background-color: #fff;
  margin: 0 auto;
  color: #0779e4;
  & .title {
    text-transform: uppercase;
  }
  & .text {
    color: gray;
  }
  & button {
    background-color: transparent;
    border-radius: 0;
    border: none;
    font-size: 1.4rem;
  }
`;

const Price = styled.h2`
  font-size: 3rem;
`;

function Plan() {
  return (
    <PlanCard>
      <h3 className='title'>Basic Plan</h3>
      <Price>
        <sup>$</sup>49K
      </Price>
      <p className='text'>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <button>Get Started</button>
    </PlanCard>
  );
}

export default Plan;