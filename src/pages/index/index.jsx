import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import styles from './index.less';
import mainImg from '../../assets/maintext.png'
import startBtn from '../../assets/startBtn.png'
import Logobox from '../../components/logobox/logobox'

class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  render() {
    return (
      <div className={styles.homeBox}>
        <Logobox />
        <div className={styles.mainImg}>
          <img src={mainImg} alt=""/>
        </div>
        <div className={styles.startBtn}>
          <Link to="/menu"><img src={startBtn} alt=""/></Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Index)
