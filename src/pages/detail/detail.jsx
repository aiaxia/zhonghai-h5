import { connect } from 'dva';
import * as React from 'react';
import styles from './detail.less';
import topmain from '../../assets/topmain.png';
import returnw from '../../assets/returnw.png';
import master from '../../assets/master.png';
import icon from '../../assets/icon.png';
import epicure from '../../assets/epicure.png';
import ungrander from '../../assets/ungrander.png';
import artist from '../../assets/artist.png';

class Detail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount=()=>{
  }

  render() {
    return (
      <div className={styles.detailBox}>
        <div className={styles.topmainBox}>
          <img className={styles.topmain} src={topmain} alt=""/>
          <img className={styles.returnw} src={returnw} alt=""/>
        </div>
        <div className={styles.mainBox}>
          <ul>
            <li><img src={master} alt=""/></li>
            <li><img src={icon} alt=""/></li>
            <li><img src={epicure} alt=""/></li>
            <li><img src={ungrander} alt=""/></li>
            <li><img src={artist} alt=""/></li>
          </ul>
          <div>项目物业：<a href="tel:010-59772083">010-5977 2083</a></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Detail)
