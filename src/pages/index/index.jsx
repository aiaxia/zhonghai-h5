import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import $ from "jquery";
import "turn.js";
import styles from './index.less';
import styles2 from '../../components/animate.less';
import main from '../../assets/main.png';
import topimg from '../../assets/topimg.png';
import textimg from '../../assets/textimg.png';
import button2 from '../../assets/button2.png';
import returnw from '../../assets/return.png';
import returnw2 from '../../assets/returnw2.png';
import topimg4 from '../../assets/topimg4.png';
import txt3 from '../../assets/txt3.png';
import returnb from '../../assets/returnb.png';
import returny from '../../assets/returny.png';
import duty from '../../assets/duty.png';
import bj from '../../assets/bj.png';
import tj from '../../assets/tj.png';
import ty from '../../assets/ty.png';
import qd from '../../assets/qd.png';
import jn from '../../assets/jn.png';
import slip from '../../assets/slip.png'
import Logobox from '../../components/logobox/logobox';
import Botbox from '../../components/botbox/botbox';

class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      showInterduce: false,
      shownum: 'secbot',
      iphone7p: ''
    };
  }
  componentDidMount=()=>{
    let t = this
    let pageindex = (this.props.location.state&&this.props.location.state.page)?this.props.location.state.page:1
    $("#flipbook").turn({
        page: pageindex,
        width: "100vw",
        height: "100vh",
        duration: '1000',
        gradients: false,
        turnCorners: 'bls',
        acceleration: true, // 是否加速，对于触摸屏的设备，这个值必须为true
        autoCenter: false, // 是否居中 默认值false
        direction: "ltr", // 翻书方向，值为rtl / ltr（3种写法），②HTML: <div id="flipbook" dir="rtl"></div> ③ CSS:#flipbook { direction:rtl; }
        display: 'single', // 显示单页or双页,默认值是double (如果single, class为hard的div首末各一个就可以)
    });
    this.getmobiletype()
  }
  getmobiletype=()=>{
    var events = navigator.userAgent;
    if(events.indexOf('Android')>-1 || events.indexOf('Linux')>-1 || events.indexOf('Adr')>-1){
        console.log("安卓手机");
    }else if(events.indexOf('iPhone')>-1){
        //根据尺寸进行判断 苹果的型号
        if(window.screen.height == 812 && window.screen.width == 375){
            console.log("苹果X");
        }else if(window.screen.height == 736 && window.screen.width == 414){
            console.log("iPhone7P - iPhone8P - iPhone6");
            this.setState({
              iphone7p: 'iphone7p'
            })
        }else if(window.screen.height == 667 && window.screen.width == 375){
            console.log("iPhone7 - iPhone8 - iPhone6");
        }else if(window.screen.height == 568 && window.screen.width == 320){
            console.log("iPhone5");
        }else{
            console.log("iPhone4");
        }
    }else if(events.indexOf('Windows Phone')>-1){
        console.log("诺基亚手机");

    }else if(events.indexOf("iPad")>-1){
        console.log("平板");
    }
  }
  nexpage=()=>{
    this.showInterduce(false)
    $("#flipbook").turn("next");
  }
  lastpage=()=>{
    this.showInterduce(false)
    $("#flipbook").turn("previous");
  }
  showInterduce=(show)=>{
    this.setState({
      showInterduce: show
    })
    if(show){
      this.setState({
        shownum: 'secbot2'
      })
    }else{
      this.setState({
        shownum: 'secbot'
      })
    }
  }

  render() {
    const { showInterduce, shownum, iphone7p } = this.state
    return (
      <div className={styles.homeBox} id="flipbook">
        <div className={styles.indexBox}>
          <Logobox />
          <div className={styles.mainImg}>
            <div className={styles.main} >
              <img src={main} alt=""/>
            </div>
          </div>
          <div className={styles.botbox}>
            <Botbox indexnum={1} />
          </div>
        </div>
        <div className={styles.introduce}>
          <div className={styles[shownum]}>
            <img className={styles.topimg} src={topimg} alt=""/>
            <img className={styles.returnw+" "+styles2.animated+" "+styles2.shake + " " +styles2.infinite} src={returnw2} onClick={e=>this.lastpage()} alt=""/>
            <div className={styles.textBox}>
              {showInterduce?
                <div className={styles.lefttxt}>
                  <img className={styles.returny} src={returny} onClick={e=>this.showInterduce(false)} alt=""/>
                  <img className={styles.textimg} src={txt3} alt=""/>
                  <img className={styles.dutyimg} src={duty} alt=""/>
                </div>
              :
                <div className={styles.lefttxt}>
                  <img className={styles.textimg} src={textimg} alt=""/>
                  <img className={styles.button2} src={button2} alt="" onClick={e=>this.showInterduce(true)}/>
                </div>
              }
            </div>
            <img className={styles2.animated+" "+styles.slip + " "+styles2.shake + " " +styles2.infinite} onClick={e=>this.nexpage()} src={slip} alt=""/>
          </div>
        </div>
        <div className={styles.introduce+" "+styles.citybox}>
          <div>
            <div className={styles.textBox}>
              <div className={styles.lefttxt}>
                <img className={styles.returny+" "+styles2.animated+" "+styles2.shake + " " +styles2.infinite} onClick={e=>this.lastpage()} src={returnb} alt=""/>
                <img className={styles.topimg4} src={topimg4} alt=""/>
                <div className={styles.itembtnimg+" "+styles[iphone7p]}>
                  <Link to="/project?city=bj"><img src={bj} alt=""/></Link>
                  <Link to="/project?city=tj"><img src={tj} alt=""/></Link>
                  <Link to="/project?city=ty"><img src={ty} alt=""/></Link>
                  <Link to="/project?city=qd"><img src={qd} alt=""/></Link>
                  <Link to="/project?city=jn"><img src={jn} alt=""/></Link>
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
