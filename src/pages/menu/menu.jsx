import { connect } from 'dva';
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
  onShowcity=(cityName)=>{
    localStorage.setItem("cityName", cityName);
    this.props.history.push({
      pathname: "/city"
    })
  }
  render() {
    return (
      <div className={styles.menuBox}>
        <div>
          <Logobox />
          <div className={styles.mainImg}>
            <img src={mainImg} alt=""/>
          </div>
          <div className={styles.itemBox}>
            <div>
              <img src={bJ} alt="" onClick={e=>this.onShowcity('bj')}/>
            </div>
            <div>
              <img src={tJ} alt="" onClick={e=>this.onShowcity('tj')}/>
            </div>
            <div>
              <img src={qD} alt="" onClick={e=>this.onShowcity('qd')}/>
            </div>
            <div>
              <img src={tY} alt="" onClick={e=>this.onShowcity('ty')}/>
            </div>
            <div>
              <img src={jN} alt="" onClick={e=>this.onShowcity('jn')}/>
            </div>
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
