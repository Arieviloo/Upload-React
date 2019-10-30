import React from 'react';
import {CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md'

import {Container, FileInfo, Preview} from './style'

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://todobanderas.com/35337-large_default/v-vendetta.jpg" />
        <div>
          <strong>vendetta.jpg</strong>
          <span>64kb <button onClick={() => {}}>Delete</button></span>
        </div>        
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{
            root: {width: 24},
            path: {stroke: "#7159c1"},
          }}
          strokeWidth={10}
          value={60}
        />

        <a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <MdLink style={{marginRight: 8 }} size={24} color="#222"/>
        </a>
          <MdCheckCircle size={24} color="#78e5d5"/>
          <MdError size={24} color="#e57878"/>

        </div>

    </li>
  </Container>
  
)

export default FileList;