import React from 'react';
import GlobalStyle from './style/styledGlobal'
import {Container, Content} from './style'
import Upload from './components/Upload/index'
import FileList from './components/FileList/index'

function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Content>
          <Upload />
          <FileList />
      </Content>
    </Container>
   
   </>
  );
}

export default App;
