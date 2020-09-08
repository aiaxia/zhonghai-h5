import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import Mainitem from '../../components/mainitem/mainitem'
import returnIcon from '../../assets/return.png';
import return2Icon from '../../assets/return2.png';
// import detailTitle from '../../assets/detailTitle.png';
import mainImg from '../../assets/mainimg.png';
import moreIcon from '../../assets/more.png'
import hiddenIcon from '../../assets/hidden.png'
import topIcon from '../../assets/top.png'
import styles from './detail.less';

class Detail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      list: [],
      cityName: '',
      titleImg: '',
      comImg: ''
    };
  }

  componentDidMount(){
    const {list,cityName,titleImg,comImg,returnBut2} = this.props.location.state
    this.setState({
      list: list,
      cityName: cityName,
      titleImg: titleImg,
      comImg: comImg,
      returnBut2: true
    })
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
    const {list,cityName,titleImg,comImg,returnBut2} = this.state
    return (
      <div className={styles.detailBox}>
        <div className={styles.detailtopBox} style={{backgroundImage: `url(${comImg})`}}>
          <Link to={{pathname:'/city', state:{ cityName: cityName }}} className={styles.returnBtn}>
            {returnBut2?
              <img className={styles.returnIcon} src={return2Icon} alt=""/>:
              <img className={styles.returnIcon} src={returnIcon} alt=""/>
            }
          </Link>
          {/* <div className={styles.logoTitle}>
            <img src={titleImg} alt=""/>
          </div> */}
        </div>
        <div className={styles.mainBox}>
          <Mainitem onRef={this.onRef} list={list} />
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
