import React from 'react';
import './Loader.scss';

const Loader: React.FC = (): JSX.Element => {
  return(
    <div className="Loader">
      <p className="loader_text">
        Поиск ...
      </p>
    </div>
  )
}

export default Loader;
