import { connect } from 'dva';
import { Link } from "react-router-dom";
import * as React from 'react';
import Logobox from '../../components/logobox/logobox'
import mainImg from '../../assets/maintext.png'
import bJ from '../../assets/bj.png'
import tJ from '../../assets/tj.png'
import qD from '../../assets/qd.png'
import tY from '../../assets/ty.png'
import jN from '../../assets/jn.png'
import styles from './menu.less';

@connect(({ loading }) => ({ loading }))
class Menu extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  render() {
    return (
      <div className={styles.menuBox}>
        <Logobox />
        <div className={styles.mainImg}>
          <img src={mainImg} alt=""/>
        </div>
        <div className={styles.itemBox}>
          <div>
            <Link to={{
              pathname:'/city',
              state:{
                cityName: 'bj'
              }
            }}>
              <img src={bJ} alt=""/>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname:'/city',
              state:{
                cityName: 'tj'
              }
            }}>
              <img src={tJ} alt=""/>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname:'/city',
              state:{
                cityName: 'qd'
              }
            }}>
              <img src={qD} alt=""/>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname:'/city',
              state:{
                cityName: 'ty'
              }
            }}>
              <img src={tY} alt=""/>
            </Link>
          </div>
          <div>
            <Link to={{
              pathname:'/city',
              state:{
                cityName: 'jn'
              }
            }}>
              <img src={jN} alt=""/>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Menu)
