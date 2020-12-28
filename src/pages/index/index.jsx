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
      intruduceList:[
        {
          title: "中海商业",
          lilTitle: "——践行国际一流标准的商业资产开发运营平台",
          con: '中海商业，作为中国房地产领先企业——中海地产全资子公司，发轫于香港，立足国内中心城市，目前项目遍布伦敦、香港、澳门、北京、上海、深圳、天津、青岛、济南、苏州、武汉、海南、太原、等近30个经 济活跃城市。作为实力央企，中海商业致力于为城市创造价值，形成了以写字楼为核心，具备购物中心、长租公寓、酒店、文化场馆在内的完 备产业结构。'
        },
        {
          title: "COOC中海商务",
          lilTitle: "——全域商办资产管理品牌旗舰",
          con: '中海商业，作为中国房地产领先企业——中海地产全资子公司，发轫于香港，立足国内中心城市，目前项目遍布伦敦、香港、澳门、北京、上海、深圳、天津、青岛、济南、苏州、武汉、海南、太原、等近30个经 济活跃城市。作为实力央企，中海商业致力于为城市创造价值，形成了以写字楼为核心，具备购物中心、长租公寓、酒店、文化场馆在内的完 备产业结构。'
        },
        {
          title: "中海云商",
          lilTitle: "——全域商办资产管理品牌旗舰",
          con: '现代社会的办公需求日新月异，中海商务深度挖掘商业规律，调配内外部资源，退出综合商办服务品牌--中海云商。基于五大写字楼产品系的规模效应，多年来服务各行业的经验积累，令中海云商自诞生起就更懂市场。以中海商务规模化效应为基础，东西商机，凭借强大资源聚合能力，衔接周边商务磁场形成商业闭环；为上下游企业提供交互平台，打破产业壁垒，为闭环内的每一个商业伙伴创造良好的发展环境，从而反向影响闭环内的企业，创造更多的机会，开发更大的市场。'
        },
      ],
      showInterduce: false,
      shownum: 'secbot'
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
    const { intruduceList, showInterduce, shownum } = this.state
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
                <div className={styles.itembtnimg}>
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
