import { connect } from 'dva';
import { Link } from "react-router-dom";
import * as React from 'react';
import Mainitem from '../../components/mainitem/mainitem'
import returnIcon from '../../assets/return.png';
import detailTitle from '../../assets/detailTitle.png';
import mainImg from '../../assets/mainimg.png';
import moreIcon from '../../assets/more.png'
import hiddenIcon from '../../assets/hidden.png'
import topIcon from '../../assets/top.png'
import styles from './detail.less';

class Detail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  showAll=()=>{
    this.child.showAll(true)
  }
  hiddenAll=()=>{
    this.child.showAll(false)
  }
  returnTop=()=>{
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
    console.log(1001)
  }
  onRef = (ref) => {
    this.child = ref
  }
  render() {
    const {showAll,hiddenAll} = this.state
    return (
      <div className={styles.detailBox}>
        <Link to="/menu" className={styles.returnBtn}>
          <img className={styles.returnIcon} src={returnIcon} alt=""/>
        </Link>
        <div className={styles.logoTitle}>
          <img src={detailTitle} alt=""/>
        </div>
        <div className={styles.mainImg}>
          <img src={mainImg} alt=""/>
        </div>
        <div className={styles.mainBox}>
          <Mainitem onRef={this.onRef}/>
        </div>
        <div className={styles.opIcon}>
          <img src={moreIcon} onClick={e=>this.showAll()} alt=""/>
          <img src={hiddenIcon} onClick={e=>this.hiddenAll()} alt=""/>
          <img src={topIcon} onClick={e=>this.returnTop()} alt=""/>
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
