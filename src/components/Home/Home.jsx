import React from "react";
import styled from "styled-components";

const HomeStyle = styled.div`
  height: 100rem;
  width: 20rem;
`;

const Home = ({ navContainerHeight }) => {
  return (
    <HomeStyle height={navContainerHeight ? navContainerHeight : "4rem"}>
      <h2>Home Page</h2>
      <h3>H3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        voluptatum molestiae expedita sapiente inventore quod recusandae,
        nesciunt modi possimus nulla, ducimus consequuntur esse, aliquam laborum
        labore cum ea rerum doloremque!
      </p>
      <h4>h4</h4>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic explicabo
      consequuntur et! Earum voluptate illum architecto, labore exercitationem
      est dolores voluptatibus autem voluptatem laudantium aspernatur non fugit
      nisi et rem.
    </HomeStyle>
  );
};

export default Home;
