import React  from 'react';

import styles from './styles.css'

type Props = {
  name: string
}

const Greeting: React.FC = ({children}: Props) => {

  return (
    <div className={`${styles.loggedWrapper} ${styles.wrapper}`}>
      {children}
    </div>
  );
}

export default Greeting;