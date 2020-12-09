import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import { Flex } from 'antd-mobile';
import $ from "jquery";
import "turn.js";
import styles from './index.less';
// import styles2 from './animate.less';
import main from '../../assets/main.png';
import lefttext from '../../assets/lefttext.png';
import rightbtn from '../../assets/rightbtn.png';
import topimg from '../../assets/topimg.png';
import textimg from '../../assets/textimg.png';
import button2 from '../../assets/button2.png';
import rltxt from '../../assets/rltxt.png';
import rrtxt from '../../assets/rrtxt.png';
import rl4txt from '../../assets/rl4txt.png';
import rr4txt from '../../assets/rr4txt.png';
import returnb from '../../assets/returnb.png';
import topimg4 from '../../assets/topimg4.png';
import bj from '../../assets/bj.png';
import tj from '../../assets/tj.png';
import ty from '../../assets/ty.png';
import qd from '../../assets/qd.png';
import jn from '../../assets/jn.png';
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
      ]
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
    // $("#flipbook").turn({direction: "rtl",turnCorners:'br'});
    $("#flipbook").turn("next");
  }
  returnBack=()=>{
    // $("#flipbook").turn({direction: "ltr",turnCorners:'tl'});
    $("#flipbook").turn("next", {direction: "ltr",turnCorners:'tl'});
  }

  render() {
    const { intruduceList } = this.state
    return (
      <div className={styles.homeBox} id="flipbook">
        <div className={styles.indexBox}>
          <Logobox />
          <div className={styles.mainImg}>
            <div className={styles.main} >
              <img src={main} alt=""/>
            </div>
            <Flex className={styles.btnimg}>
              <Flex.Item className={styles.leftLogo}><img src={lefttext} /></Flex.Item>
              <Flex.Item className={styles.rightLogo}><img src={rightbtn} /></Flex.Item>
            </Flex>
          </div>
          <div className={styles.botbox}>
            <Botbox indexnum={1} />
          </div>
        </div>
        <div className={styles.introduce}>
          <img className={styles.topimg} src={topimg} alt=""/>
          <div className={styles.textBox}>
            {/* {intruduceList.map((el,i)=>{
              return <div className={styles.item} key={i}>
                <div className={styles.title}>{el.title}</div>
                <div className={styles.lilTitle}>{el.lilTitle}</div>
                <div className={styles.con}>{el.con}</div>
              </div>
            })} */}
            <div className={styles.lefttxt}>
              <img className={styles.textimg} src={textimg} alt=""/>
              <Link to="/introduce"><img className={styles.button2} src={button2} alt=""/></Link>
            </div>
            <div className={styles.rightline}>
              <img className={styles.rltxt} src={rltxt} alt=""/>
              <div></div>
              <img className={styles.rrtxt}  src={rrtxt} alt=""/>
            </div>
          </div>
          <div className={styles.botbox}>
            <Botbox indexnum={2} />
          </div>
        </div>
        <div className={styles.introduce+" "+styles.citybox}>
          <div className={styles.textBox}>
            <div className={styles.lefttxt}>
              <img className={styles.returny} onClick={e=>this.returnBack()} src={returnb} alt=""/>
              <img className={styles.topimg4} src={topimg4} alt=""/>
              <div className={styles.itembtnimg}>
                <img src={bj} alt=""/>
                <img src={tj} alt=""/>
                <img src={ty} alt=""/>
                <img src={qd} alt=""/>
                <img src={jn} alt=""/>
              </div>
            </div>
            <div className={styles.rightline}>
              <img className={styles.rltxt+" "+styles.rl4txt} src={rl4txt} alt=""/>
              <div></div>
              <img className={styles.rrtxt+" "+styles.rr4txt}  src={rr4txt} alt=""/>
            </div>
          </div>
          <div className={styles.botbox}>
            <Botbox color={true} indexnum={2} />
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
