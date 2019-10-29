import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import {DropContainer, UploadMessage} from './style'
 
class App extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui ...</UploadMessage>
    }
    if(!isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }
  
    return <UploadMessage type="success">Solte o arquivo</UploadMessage>
  
  }

  render(){
    return (
      <Dropzone accept="image/*"onDropAccepted={() => {}}>
  
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer  
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()}/>
              {this.renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
        )} 
  
      </Dropzone>
    );
  }

  
}

export default App;
