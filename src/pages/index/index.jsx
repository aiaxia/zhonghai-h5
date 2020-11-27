import { connect } from 'dva';
import { Link } from 'dva/router';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import * as React from 'react';
import styles from './index.less';
import styles2 from './animate.less';
import mainImg from '../../assets/maintext.png'
import startBtn from '../../assets/startBtn.png'
import startBtn2 from '../../assets/startBtn2.png'
import indexrTxt from '../../assets/indexrtxt.png'
import Logobox from '../../components/logobox/logobox'
import bJ from '../../assets/bj.png'
import tJ from '../../assets/tj.png'
import qD from '../../assets/qd.png'
import tY from '../../assets/ty.png'
import jN from '../../assets/jn.png'

class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      checked: true,
      data: ['1', '2', '3'],
    };
  }
  componentDidMount(){
    // new Swiper ('.swiper-container', {
    //     simulateTouch: true,
    //     allowTouchMove: true,
    //     loop: true, // 循环模式选项
    //     autoplay: {
    //       delay: 3000,//3秒切换一次
    //     },
    //     pagination: {// 如果需要分页器
    //       el: '.swiper-pagination',
    //       clickable: false,
    //     }
    // })
    this.instanceSwiper()
  }
  instanceSwiper() {
    this.swiperObj = new Swiper('.swiper-container', {
      simulateTouch: true,
      allowTouchMove: true,
      loop: false, // 循环模式选项
      autoplay: false,
      pagination: false,
      direction: 'vertical',
      observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
      observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
    })
  }
  componentDidUpdate() {
    this.swiperObj.update();
    this.swiperObj.slideTo(0, 3000, false);
  }
  componentWillUnmount() {
  }
  componentWillUnmount=()=>{
    clearInterval(this.timeout)
    if (this.swiperObj.destroy) { // 销毁swiper
      this.swiperObj.destroy();
      this.swiperObj = null;
    }
  }
  showMenu=()=>{
    let t = this
    this.setState({
      checked: false
    })
    this.timeout = setTimeout(function(){
      // t.props.history.push({
      //   pathname: "/menu"
      // })
      t.swiperObj.slideNext()
    },400)
  }
  onShowcity=(cityName)=>{
    localStorage.setItem("cityName", cityName);
    this.props.history.push({
      pathname: "/city"
    })
  }

  render() {
    const {checked} = this.state
    return (
      <div className={styles.homeBox+" swiper-container"}>
        <div className="swiper-wrapper">
          <div className={styles.homeBox+" swiper-slide"}>
            <Logobox />
            <div className={styles.mainImg}>
              <img src={mainImg} alt=""/>
            </div>
            <div className={styles.rtxt}>
              <img src={indexrTxt} alt=""/>
            </div>
            <div className={styles.startBtn +" "+ styles2.animated + " "+styles2.bounce} onClick={e=>this.showMenu()}>
              {checked?
              <img src={startBtn} alt=""/>:
              <img src={startBtn2} alt=""/>
              }
              {/* <Link to="/menu"><img src={startBtn} alt=""/></Link> */}
            </div>
          </div>
          <div className={styles.secbox+" swiper-slide"}>
            <div className={styles.startBtn +" "+ styles2.animated + " "+styles2.bounce} onClick={e=>this.showMenu()}>
              {checked?
              <img src={startBtn} alt=""/>:
              <img src={startBtn2} alt=""/>
              }
              {/* <Link to="/menu"><img src={startBtn} alt=""/></Link> */}
            </div>
          </div>
          <div className={styles.menuBox+" swiper-slide"}>
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
