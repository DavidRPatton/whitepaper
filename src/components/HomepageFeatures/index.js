import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Our Token',
    Svg: require('@site/static/img/3d.svg').default,
    description: (
      <>
        Victory Token ($VICTORY) is a deflationary token designed to become more scarce over time. 
        
        Holders of $VICTORY will earn a 7% reward from every Buy/Transfer/Sell Transaction. 
      </>
    ),
  },
  {
    title: 'Helping Veterans',
    Svg: require('@site/static/img/hero.svg').default,
    description: (
      <>
        2% of all transactions will go into the Donation Pot. The community will then vote on what Veteran Organization to donate the funds to.
      </>
    ),
  },
  {
    title: 'Passive Income',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        Holders holding 1-Million or more of $VICTORY will earn 7% in dividends (rewards) from every Buy/Sell Transaction. Rewards are calculated every 2 hours.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
