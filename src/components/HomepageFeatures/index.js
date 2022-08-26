import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简洁至上',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        追求每一个分支都简单明了，不做过多复杂命令。
      </>
    ),
  },
  {
    title: '稳定运行',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        在不出任何意外的情况下，我们可以稳定保持 24 小时 运行。
      </>
    ),
  },
  {
    title: '用爱发电',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        自开始运营至今，从未收取任何一分钱，也从未包含任何商业广告！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
