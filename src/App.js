import './App.scss';
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;

  h1 {
    color: red;
    font-size: 1.5em;
    text-align: center;
  }
`;

function App() {

    return (
        <Wrapper>
            <h1>
                Hello World!
            </h1>
        </Wrapper>
    );
}

export default App;

