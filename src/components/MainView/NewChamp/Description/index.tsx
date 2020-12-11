import React from 'react';

import classes from './index.module.scss';

const Description = () => {
  return <div className={classes.description}>
    <div className={classes.champName}>
      <h2 className={classes.name}>RELL</h2>
      <h5 className={classes.subtitle}>LA DONCELLA DE HIERRO</h5>
    </div>
    <div className={classes.champDescription}>
      Rell, un producto de brutales experimentos realizados por la rosa negra,<br /> usa su control magico sobre el metal para defender a los debiles y cobrar <br />
      una venganza despiadada a sus antiguos supervisores.
    </div>
  </div>
}

export default Description;