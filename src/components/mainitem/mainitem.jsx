import { connect } from 'dva';
// import { Link } from "react-router-dom";
import { Link } from 'dva/router';
import * as React from 'react';
import ofT from '../../assets/oft.png'
import ofI from '../../assets/ofi.png'
import ofE from '../../assets/ofe.png'
import ofU from '../../assets/ofu.png'
import ofA from '../../assets/ofa.png'
import Item from './components/item/item'
import styles from './mainitem.less';

class Mainitem extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      oft:[
        {
          title: '北京通达三季科技有限公司',
          sercon: '服务的产品有：国际、国内、BGP互联网接入、IDC互联网数据中心、办公区系统集成  智能化无线Wifi覆盖系统、 智能化会议系统、机房搭建、设备代购、监控系统、门禁系统、网管服务（IT外包）',
          sertime: '长久',
          serphone: '010-59772009',
          seradr: '北京中海广场'
        },
        {
          title: '北京通达三季科技有限公司',
          sercon: 'SLA服务：在线支持，5分钟内电话响应，10分钟内到达现场；7*24*365小时全天候不间断电话支持服务；专人客服代表服务：可以通过客服代表获得DataCom的全部服务项目；',
          sertime: '长久',
          serphone: '010-59772009',
          seradr: '北京中海广场'
        },
        {
          title: '搜狗公司',
          sercon: '专属软件可免费使用',
          sertime: '长久',
          serphone: '',
          seradr: ''
        },
      ],
      ofi:[
        {
          title: '北舞星空流行舞蹈培训中心',
          sercon: '各类舞蹈培训',
          sertime: '2020/7/1-2021/6/30',
          serphone: '13621257423',
          seradr: '西直门西环广场凯德T2楼10层C8室',
          oflshop: '北舞星空流行舞蹈培训中心',
          discont: '享受年度专属优惠'
        },
        {
          title: '康乐家园俱乐部',
          sercon: '提供血压、血糖等各项身体指标检测，提供解决方案',
          sertime: '2020/6/10-2020/12/10',
          serphone: '',
          seradr: '正华国贸财富中心',
          oflshop: '',
          discont: '享受专属优惠'
        }
      ],
      ofe:[
        {
          title: 'OFFICEZIP',
          sercon: '西式冷餐会、酒会party等餐饮活动服务。',
          sertime: '长久',
          serphone: '4001118001',
          seradr: '北京中海广场',
          oflshop: '',
          discont: ''
        },
        {
          title: 'cake boss蛋糕',
          sercon: '网红蛋糕定制、罐装蛋糕、纸杯蛋糕等',
          sertime: '2020/6/10-2020/12/10',
          serphone: '18611148297',
          seradr: '24家店北京市范围内可配送',
          oflshop: 'cake boss蛋糕老板',
          discont: '定制专属优惠'
        },
        {
          title: '维尔纳斯蛋糕',
          sercon: '蛋糕定制、甜点定制',
          sertime: '2020/6/10-2020/12/10',
          serphone: '13366127029',
          seradr: '23家店北京市范围内可配送',
          oflshop: '维尔纳斯意大利手工艺蛋糕',
          discont: '9折优惠'
        }
      ],
      ofu:[
        {
          title: 'CBD管委会',
          sercon: '积极对接CBD管委会，深度了解企业的相关扶持政策，协助企业进行相关申报资料筹备；',
          sertime: '长久',
          serphone: '010-58780000',
          seradr: '东大桥路8号SOHO尚都北塔A座',
          oflshop: '',
          discont: ''
        },
        {
          title: '中海云商',
          sercon: '提供楼内企业人力帮办',
          sertime: '长久',
          serphone: '',
          seradr: '',
          oflshop: '',
          discont: ''
        },
        {
          title: '北京长海物业管理服务有限公司',
          sercon: '日常保洁消杀服务。',
          sertime: '长久',
          serphone: '010-59772033',
          seradr: '北京市海淀区上地信息路11号1至4层整栋1幢三层西303室',
          oflshop: '',
          discont: ''
        }
      ],
      ofa:[
        {
          title: '爱喜猫自助洗车',
          sercon: '自助洗车',
          sertime: '2020/6/15-2021/6/15',
          serphone: '13716644007',
          seradr: '北京市范围内可选择',
          oflshop: '爱喜猫自助洗车',
          discont: '享受专属优惠'
        },
        {
          title: '馨花语商贸有限公司',
          sercon: '鲜花定制',
          sertime: '2020/6/9-2020/12/10',
          serphone: '13911589165',
          seradr: '王四营桥南盛华宏林粮油批发市场1层花花市界A20号',
          oflshop: '馨花语花卉',
          discont: '享受专属优惠'
        }
      ]
    };
  }
  componentDidMount(){
    this.props.onRef(this)
  }
  showAll=(showAll)=>{
    console.log('showAll-------',showAll)
    this.child.showItemAll(showAll)
  }
  onRef = (ref) => {
    this.child = ref
  }
  render() {
    const {oft,ofi,ofe,ofu,ofa} = this.state
    return (
      <div className={styles.mainitem}>
        <Item
          onRef={this.onRef}
          icon={ofT}
          title="OFFICE TECHINE +"
          detail={oft}
        />
        <Item
          onRef={this.onRef}
          icon={ofI}
          title="OFFICE ICON +"
          detail={ofi}
        />
        <Item
          onRef={this.onRef}
          icon={ofE}
          title="OFFICE EPICURE +"
          detail={ofe}
        />
        <Item
          onRef={this.onRef}
          icon={ofU}
          title="OFFICE UPGRADER +"
          detail={ofu}
        />
        <Item
          onRef={this.onRef}
          icon={ofA}
          title="OFFICE RTIST +"
          detail={ofa}
        />
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Mainitem)
