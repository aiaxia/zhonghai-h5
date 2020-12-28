import { connect } from 'dva';
import * as React from 'react';
import styles from './detail.less';
import styles2 from '../../components/animate.less';
import returnBtn from '../../assets/return.png';
import returnb from '../../assets/returnb.png';
import showmore from '../../assets/showmore.png';
import shrink from '../../assets/shrink.png';
import topimg from '../../assets/top.png';
import { Link } from 'dva/router';
import Mainitem from '../../components/mainitem/mainitem';

class Detail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      show: false,
      list: []
    };
  }
  componentDidMount=()=>{
    this.setState({
      list: JSON.parse(localStorage.getItem("list")),
    })
  }
  showAll=()=>{
    this.setState({
      show: true
    })
  }
  hiddenAll=()=>{
    this.setState({
      show: false
    })
  }
  returnTop=()=>{
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }
  onHiddenshow=()=>{
    const {show} = this.state
    this.setState({
      show: !show
    })
  }
  showAll=()=>{
    this.child.showAll(true)
  }
  hiddenAll=()=>{
    this.child.showAll(false)
  }
  onRef = (ref) => {
    this.child = ref
  }
  render() {
    const {show} = this.state
    const {city, topImg, returnB} = localStorage
    const {list} = this.state
    return (
      <div className={styles.detailBox}>
        <div className={styles.topmainBox}>
          <img className={styles.topmain} src={topImg} alt=""/>
          <Link to={"/project?city="+city}>
            <img className={styles.returnw+" "+styles2.animated+" "+styles.slip + " "+styles2.shake + " " +styles2.infinite} src={returnB=="true"?returnb:returnBtn} alt=""/>
          </Link>
        </div>
        <div className={styles.mainBox}>
          <Mainitem onRef={this.onRef} list={list} />
        </div>
        <div className={styles.opIcon}>
          <img src={showmore} onClick={e=>this.showAll()} alt=""/>
          <img src={shrink} onClick={e=>this.hiddenAll()} alt=""/>
          <img src={topimg} onClick={e=>this.returnTop()} alt=""/>
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
