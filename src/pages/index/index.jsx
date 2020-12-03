import { connect } from 'dva';
import { Link } from 'dva/router';
// import Swiper from 'swiper';
// import 'swiper/css/swiper.css';
import $ from "jquery";
import "turn.js";
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
        $("#flipbook").turn({
          width: "100vw",
          height: "100vh",
          acceleration: true, // 是否加速，对于触摸屏的设备，这个值必须为true
          autoCenter: true, // 是否居中 默认值false
          direction: "ltr", // 翻书方向，值为rtl / ltr（3种写法），②HTML: <div id="flipbook" dir="rtl"></div> ③ CSS:#flipbook { direction:rtl; }
          display: 'single', // 显示单页or双页,默认值是double (如果single, class为hard的div首末各一个就可以)
      });
  }
  showMenu=()=>{
    let t = this
    this.setState({
      checked: false
    })
    console.log(101)
    $("#flipbook").turn("next");
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
        <div className="swiper-wrapper" id="flipbook">
          <div className={styles.indexBox+" swiper-slide"}>
            <div>
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
