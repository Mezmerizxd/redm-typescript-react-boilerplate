import { useState } from 'react';

import {useNuiEvent} from "../boilerplate/useNuiEvent";
import {debugData} from '../boilerplate/debugData';

import "./Example.scss";

debugData([
  {
    action: 'nui-example',
    data: true,
  }
])

const Example: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useNuiEvent<boolean>('nui-example', (data) => {
    setIsVisible(data);
  })

  return(
    <div className="container">
      <div className="example-container" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <div className="example">
          <h1>Example</h1>
          <div className="content">
            <p>
              RedM Typescript & react Boilerplate
            </p>
          </div>
          <a href="http://github.com/spetsnazsicario"><p>Made by SpetsnazSicario</p></a>
        </div>
      </div>
    </div>
  );
}

export default Example;