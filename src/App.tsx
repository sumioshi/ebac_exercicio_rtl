import styled from 'styled-components';
import Post from "./components/Post";

const AppContainer = styled.div`
    max-width: 480px;
    margin: 120px auto;
`;

function App() {
  return (
    <AppContainer>
      <Post imageUrl="https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/06/04123612/EZWqtbbXgAEaxSC.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </AppContainer>
  );
}

export default App;
