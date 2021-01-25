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
      shownum: 'secbot'
    };
  }
  componentDidMount=()=>{
    let linkorigin = window.location.origin
    let linkpathname = window.location.pathname
    let linkhref = linkorigin+linkpathname+"#/"
    localStorage.setItem("linkhref", linkhref)
    let t = this
    let page = (this.props.location.search).split("page=")[1]
    let pageindex = page?page:(this.props.location.state&&this.props.location.state.page)?this.props.location.state.page:1
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
  onJemp=(city)=>{
    let linkhref = localStorage.getItem("linkhref")
    console.log('linkhref1',linkhref)
    window.location.replace(linkhref+'project?city='+city)
  }

  render() {
    const { showInterduce, shownum } = this.state
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
                <div className={styles.itembtnimg+" "+styles[localStorage.getItem("iphone7p")]}>
                  <img src={bj} alt="" onClick={e=>this.onJemp('bj')}/>
                  <img src={tj} alt="" onClick={e=>this.onJemp('tj')} />
                  <img src={ty} alt="" onClick={e=>this.onJemp('ty')} />
                  <img src={qd} alt="" onClick={e=>this.onJemp('qd')} />
                  <img src={jn} alt="" onClick={e=>this.onJemp('jn')} />
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
