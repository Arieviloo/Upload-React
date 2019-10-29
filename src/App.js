import React from 'react';
import GlobalStyle from './style/styledGlobal'
import {Container, Content} from './style'
import Upload from './components/Upload'

function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Content>
          <Upload />
      </Content>
    </Container>
   
   </>
  );
}

export default App;
