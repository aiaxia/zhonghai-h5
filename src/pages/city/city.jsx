import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import returnIcon from '../../assets/return.png';
import bjTitle from '../../assets/bjtitle.png';
import tjTitle from '../../assets/tjtitle.png';
import qdTitle from '../../assets/qdtitle.png';
import tyTitle from '../../assets/tytitle.png';
import jnTitle from '../../assets/jntitle.png';
import bjItem1 from '../../assets/bjitem1.png';
import bjItem2 from '../../assets/bjitem2.png';
import bjItem3 from '../../assets/bjitem3.png';
import bjItem4 from '../../assets/bjitem4.png';
import bjItem5 from '../../assets/bjitem5.png';
import bjItem6 from '../../assets/bjitem6.png';
import tjItem1 from '../../assets/tjitem1.png';
import tjItem2 from '../../assets/tjitem2.png';
import tjItem3 from '../../assets/tjitem3.png';
import qdItem1 from '../../assets/qditem1.png';
import tyItem1 from '../../assets/tyitem1.png';
import jnItem1 from '../../assets/jnitem1.png';
import ofT from '../../assets/oft.png'
import ofI from '../../assets/ofi.png'
import ofE from '../../assets/ofe.png'
import ofU from '../../assets/ofu.png'
import ofA from '../../assets/ofa.png'
import styles from './city.less';

class City extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      cityName: '',
      bj: {
        zhList:[
          {
            icon: ofT,
            title: 'OFFICE TECHINE +',
            data:[
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
          },
          {
            icon: ofI,
            title: "OFFICE ICON +",
            data:[
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
          },{
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
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
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
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
              },
              {
                title: '北京雨辰梦文园林绿化有限公司',
                sercon: '打造绿色办公空间，办公室绿化园艺服务',
                sertime: '长久',
                serphone: '010-59772033',
                seradr: '北京市东城区和平里西街七区10号楼国土和平里招待所461',
                oflshop: '',
                discont: ''
              },
              {
                title: '北京旭峰建设工程有限公司',
                sercon: '空间设计、施工建造、软装服务全流程定制',
                sertime: '长久',
                serphone: '010-53382719',
                seradr: '北京市丰台区玉泉营桥东北角陶瓷文化馆三层',
                oflshop: '',
                discont: ''
              },
              {
                title: '中海物业',
                sercon: '专属车位预留、酒店预订、形象岗迎宾、专车接送。',
                sertime: '长久',
                serphone: '010-59772033',
                seradr: '北京中海广场',
                oflshop: '',
                discont: ''
              },
              {
                title: '顺丰',
                sercon: '上门代收代发公司、个人快递，安全可靠。',
                sertime: '长久',
                serphone: '17611775115',
                seradr: '北京中海广场',
                oflshop: '',
                discont: ''
              },
              {
                title: '国泰饭店',
                sercon: '中海系商务酒店，将为COOC合作企业提供会务场地、团购房、个人优惠订房的特惠权益。',
                sertime: '长久',
                serphone: '010-65683366',
                seradr: '北京市朝阳区建外街道永安西里12号',
                oflshop: '国泰饭店',
                discont: ''
              },
              {
                title: '国泰饭店',
                sercon: '利用中海商业旗下酒店等资源，亦可于项目内进行会务空间与服务的定制。',
                sertime: '长久',
                serphone: '010-65683366',
                seradr: '北京市朝阳区建外街道永安西里12号',
                oflshop: '国泰饭店',
                discont: ''
              },
              {
                title: 'OFFICEZIP',
                sercon: '开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务',
                sertime: '长久',
                serphone: '4001118001',
                seradr: '北京中海广场',
                oflshop: '',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                oflshop: '诺梵家具定制',
                discont: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              }
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
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
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                seradr: '',
                oflshop: '世纪佳缘',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                seradr: '',
                oflshop: '滴滴出行',
                discont: '5折优惠'
              }
            ]
          }
        ]
      }
    };
  }
  componentDidMount(){
    this.setState({
      cityName: this.props.location.state.cityName
    })
  }
  render() {
    const {cityName,bj} = this.state
    const {zhList} = this.state.bj
    return (
      <div className={styles.cityBox}>
        <Link to="/menu" className={styles.returnBtn}>
          <img className={styles.returnIcon} src={returnIcon} alt=""/>
        </Link>
        <div className={styles.cityTitle}>
          {cityName=="bj"&&<img src={bjTitle} alt=""/>}
          {cityName=="tj"&&<img src={tjTitle} alt=""/>}
          {cityName=="qd"&&<img src={qdTitle} alt=""/>}
          {cityName=="ty"&&<img src={tyTitle} alt=""/>}
          {cityName=="jn"&&<img src={jnTitle} alt=""/>}
        </div>
        <div className={styles.itemBox}>
          {cityName=="bj"&&
            <div className={styles.bjBox}>
              <Link to={{pathname:'/detail', state:{ list: zhList, cityName: cityName }}}>
                <img src={bjItem1} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={bjItem2} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={bjItem3} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={bjItem4} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={bjItem5} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={bjItem6} alt=""/>
              </Link>
            </div>
          }
          {cityName=="tj"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={tjItem1} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={tjItem2} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={tjItem3} alt=""/>
              </Link>
            </div>
          }
          {cityName=="qd"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={qdItem1} alt=""/>
              </Link>
            </div>
          }
          {cityName=="ty"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName }}}>
                <img src={tyItem1} alt=""/>
              </Link>
            </div>
          }
          {cityName=="jn"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: zhList, cityName: cityName } }}>
                <img src={jnItem1} alt=""/>
              </Link>
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(City)
