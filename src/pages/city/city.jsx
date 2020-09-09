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
import ofT from '../../assets/oft.png';
import ofI from '../../assets/ofi.png';
import ofE from '../../assets/ofe.png';
import ofU from '../../assets/ofu.png';
import ofA from '../../assets/ofa.png';
import bj01 from '../../assets/bj01.png';
import bj02 from '../../assets/bj02.png';
import bj03 from '../../assets/bj03.png';
import bj04 from '../../assets/bj04.png';
import bj05 from '../../assets/bj05.png';
import bj06 from '../../assets/bj06.png';
import tj01 from '../../assets/tj01.png';
import tj02 from '../../assets/tj02.png';
import tj03 from '../../assets/tj03.png';
import qd01 from '../../assets/qd01.png';
import ty01 from '../../assets/ty01.png';
import jn01 from '../../assets/jn01.png';
import bjcon01 from '../../assets/bjcon01.png';
import bjcon02 from '../../assets/bjcon02.png';
import bjcon03 from '../../assets/bjcon03.png';
import bjcon04 from '../../assets/bjcon04.png';
import bjcon05 from '../../assets/bjcon05.png';
import bjcon06 from '../../assets/bjcon06.png';
import tjcon01 from '../../assets/tjcon01.png';
import tjcon02 from '../../assets/tjcon02.png';
import tjcon03 from '../../assets/tjcon03.png';
import qdcon01 from '../../assets/qdcon01.png';
import tycon01 from '../../assets/tycon01.png';
import jncon01 from '../../assets/jncon01.png';
import styles from './city.less';

class City extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      cityName: '',
      bj: {
        zhgc:[
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
                oflshop: '北舞星空流行舞蹈培训中心',
                seradr: '西直门西环广场凯德T2楼10层C8室',
                discont: '享受年度专属优惠'
              },
              {
                title: '康乐家园俱乐部',
                sercon: '提供血压、血糖等各项身体指标检测，提供解决方案',
                sertime: '2020/6/10-2020/12/10',
                serphone: '',
                oflshop: '',
                seradr: '正华国贸财富中心',
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
                oflshop: '',
                seradr: '北京中海广场',
                discont: ''
              },
              {
                title: 'cake boss蛋糕',
                sercon: '网红蛋糕定制、罐装蛋糕、纸杯蛋糕等',
                sertime: '2020/6/10-2020/12/10',
                serphone: '18611148297',
                oflshop: 'cake boss蛋糕老板',
                seradr: '24家店北京市范围内可配送',
                discont: '定制专属优惠'
              },
              {
                title: '维尔纳斯蛋糕',
                sercon: '蛋糕定制、甜点定制',
                sertime: '2020/6/10-2020/12/10',
                serphone: '13366127029',
                oflshop: '维尔纳斯意大利手工艺蛋糕',
                seradr: '23家店北京市范围内可配送',
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
                oflshop: '',
                seradr: '东大桥路8号SOHO尚都北塔A座',
                discont: ''
              },
              {
                title: '中海云商',
                sercon: '提供楼内企业人力帮办',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京长海物业管理服务有限公司',
                sercon: '日常保洁消杀服务。',
                sertime: '长久',
                serphone: '010-59772033',
                oflshop: '',
                seradr: '北京市海淀区上地信息路11号1至4层整栋1幢三层西303室',
                discont: ''
              },
              {
                title: '北京雨辰梦文园林绿化有限公司',
                sercon: '打造绿色办公空间，办公室绿化园艺服务',
                sertime: '长久',
                serphone: '010-59772033',
                oflshop: '',
                seradr: '北京市东城区和平里西街七区10号楼国土和平里招待所461',
                discont: ''
              },
              {
                title: '北京旭峰建设工程有限公司',
                sercon: '空间设计、施工建造、软装服务全流程定制',
                sertime: '长久',
                serphone: '010-53382719',
                oflshop: '',
                seradr: '北京市丰台区玉泉营桥东北角陶瓷文化馆三层',
                discont: ''
              },
              {
                title: '中海物业',
                sercon: '专属车位预留、酒店预订、形象岗迎宾、专车接送。',
                sertime: '长久',
                serphone: '010-59772033',
                oflshop: '',
                seradr: '北京中海广场',
                discont: ''
              },
              {
                title: '顺丰',
                sercon: '上门代收代发公司、个人快递，安全可靠。',
                sertime: '长久',
                serphone: '17611775115',
                oflshop: '',
                seradr: '北京中海广场',
                discont: ''
              },
              {
                title: '国泰饭店',
                sercon: '中海系商务酒店，将为COOC合作企业提供会务场地、团购房、个人优惠订房的特惠权益。',
                sertime: '长久',
                serphone: '010-65683366',
                oflshop: '国泰饭店',
                seradr: '北京市朝阳区建外街道永安西里12号',
                discont: ''
              },
              {
                title: '国泰饭店',
                sercon: '利用中海商业旗下酒店等资源，亦可于项目内进行会务空间与服务的定制。',
                sertime: '长久',
                serphone: '010-65683366',
                oflshop: '国泰饭店',
                seradr: '北京市朝阳区建外街道永安西里12号',
                discont: ''
              },
              {
                title: 'OFFICEZIP',
                sercon: '开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务',
                sertime: '长久',
                serphone: '4001118001',
                oflshop: '',
                seradr: '北京中海广场',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
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
                oflshop: '爱喜猫自助洗车',
                seradr: '北京市范围内可选择',
                discont: '享受专属优惠'
              },
              {
                title: '馨花语商贸有限公司',
                sercon: '鲜花定制',
                sertime: '2020/6/9-2020/12/10',
                serphone: '13911589165',
                oflshop: '馨花语花卉',
                seradr: '王四营桥南盛华宏林粮油批发市场1层花花市界A20号',
                discont: '享受专属优惠'
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              }
            ]
          }
        ],
        zhdcgc:[
          {
            icon: ofT,
            title: 'OFFICE TECHINE +',
            data:[
              {
                title: '北京通达三季科技有限公司',
                sercon: '提供网络搭接及维护服务',
                sertime: '长久',
                serphone: '李晨 18501255721',
                oflshop: '北京通达三季科技有限公司',
                seradr: '北京东城区永定门外西滨河路8号中海地产广场B2层',
                discont: '提供网络搭接及维护服务'
              },
              {
                title: '北京通达三季科技有限公司',
                sercon: '提供网络设备搭接及维护服务',
                sertime: '长久',
                serphone: '李晨 18501255721',
                oflshop: '北京通达三季科技有限公司',
                seradr: '北京东城区永定门外西滨河路8号中海地产广场B2层',
                discont: '提供网络设备搭接及维护服务'
              },
              {
                title: '搜狗公司',
                sercon: '专属软件可免费使用',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
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
                title: '北京莉莉世界文化有限公司',
                sercon: '提供楼内客户各式餐饮活动服务',
                sertime: '长久',
                serphonename: '冬梅姐ldm201016678',
                serphone: '',
                oflshop: '北京莉莉世界文化有限公司',
                seradr: '北京东城区永定门外西滨河路8号中海地产广场1层',
                discont: '提供楼内客户西式冷餐会、英式下午茶、定制茶歇会、酒会party等餐饮活动服务'
              },
              {
                title: 'cake boss蛋糕',
                sercon: '网红蛋糕定制、罐装蛋糕、纸杯蛋糕等',
                sertime: '2020/6/10-2020/12/10',
                serphone: '18611148297',
                oflshop: 'cake boss蛋糕老板',
                seradr: '24家店北京市范围内可配送',
                discont: '定制专属优惠'
              },
              {
                title: '维尔纳斯蛋糕',
                sercon: '蛋糕定制、甜点定制',
                sertime: '2020/6/10-2020/12/10',
                serphone: '13366127029',
                oflshop: '维尔纳斯意大利手工艺蛋糕',
                seradr: '23家店北京市范围内可配送',
                discont: '9折优惠'
              }
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '永外街道办事处',
                sercon: '积极联络所在市、区级政府，深度了解企业的相关扶持政策；同时经营中心设置解析服务人员，协助企业进行相关申报资料筹备',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '协力企业建立完善的人力培训课程及架构，同时提供单独的培训课程及资源。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '中海云商',
                sercon: '提供楼内企业人力帮办',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京城坤筑洁生物科技有限公司',
                sercon: '日常保洁消杀服务。',
                sertime: '长久',
                serphonename: '直接联系物业',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '日常保洁消杀服务。'
              },
              {
                title: '北京盛芳润雅花卉有限公司',
                sercon: '提供项目外围绿化及室内绿色办公空间，办公室绿化园艺服务',
                sertime: '长久',
                serphonename: '直接联系物业',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '提供项目外围绿化及室内绿色办公空间，办公室绿化园艺服务'
              },
              {
                title: '',
                sercon: '空间设计、施工建造、软装服务全流程定制',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '办公文具集采、印务耗材采购、办公设备租赁与购买。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '中海物业',
                sercon: '提供专属车位预留，形象岗迎宾等服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '国泰饭店',
                sercon: '搭接楼内企业国泰饭店联系',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '中海物业',
                sercon: '提供大客户专用VIP梯服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '柒一拾壹（北京）有限公司',
                sercon: '提供楼内员工店内商品团购活动',
                sertime: '长久',
                serphonename: '店长微信：Yu18910486953',
                serphone: '',
                oflshop: '柒一拾壹（北京中海地产广场店）',
                seradr: '北京东城区永定门外西滨河路8号中海地产广场1层',
                discont: '定期提供楼内员工店内商品团购及福袋等活动'
              },
              {
                title: 'OFFICEZIP',
                sercon: '提供项目内进行会务空间与服务的定制',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '联合全国各地百余家媒体的推广合作资源，定制专属公关活动。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '专业、多元的团建活动组织，提供全流程服务。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '联合各大银行，针对企业推出综合信贷服务包',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: 'OFFICEZIP',
                sercon: '开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '提供礼品策划、创意、设计、定制、生产、配送等一站式礼品定制服务。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              }
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '丰巢快递',
                sercon: '提供快递暂存服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '爱喜猫自助洗车',
                sercon: '自助洗车',
                sertime: '2020/6/15-2021/6/15',
                serphone: '13716644007',
                oflshop: '爱喜猫自助洗车',
                seradr: '北京市范围内可选择',
                discont: '享受专属优惠'
              },
              {
                title: '馨花语商贸有限公司',
                sercon: '鲜花定制',
                sertime: '2020/6/9-2020/12/10',
                serphone: '13911589165',
                oflshop: '馨花语花卉',
                seradr: '王四营桥南盛华宏林粮油批发市场1层花花市界A20号',
                discont: '享受专属优惠'
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              },
            ]
          }
        ],
        anzhgjzx:[
          {
            icon: ofT,
            title: 'OFFICE TECHINE +',
            data:[
              {
                title: '世纪二千',
                sercon: '网络搭建',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京金世浩远电子商贸有限公司',
                sercon: '电脑上门维修维护',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '搜狗公司',
                sercon: '专属软件可免费使用',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
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
                oflshop: '北舞星空流行舞蹈培训中心',
                seradr: '西直门西环广场凯德T2楼10层C8室',
                discont: '享受年度专属优惠'
              },
              {
                title: '康乐家园俱乐部',
                sercon: '提供血压、血糖等各项身体指标检测，提供解决方案',
                sertime: '2020/6/10-2020/12/10',
                serphone: '',
                oflshop: '',
                seradr: '正华国贸财富中心',
                discont: '享受专属优惠'
              }
            ],
          },{
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: '云订餐',
                sercon: '提供楼内客户各式餐饮活动服务',
                sertime: '2.21-长期',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              }
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '北京奥林匹克公园管委会',
                sercon: '优化营商环境，简化企业开办流程宣讲',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '联合COOC中海商务的广泛校园资源，帮助企业建立校企沟通渠道。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '协力企业建立完善的人力培训课程及架构',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '提供优质人力资源企业合作搭桥，提供整体解决方案。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京亮歌保洁技术有限公司',
                sercon: '日常保洁，全天侯保洁服务；开荒保洁，装修后开荒、保洁、清洗、养护服务；地毯清洗，地毯全面清洁与保养服务；室内全面清洁、消毒。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京绿一方园林绿化工程有限公司',
                sercon: '外围绿化养护、室内绿植租摆',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京今希建设集团有限公司',
                sercon: '建筑装修装饰工程',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京裕元荣商贸有限公司',
                sercon: '办公文具集采、印务耗材采购、办公设备租赁与购买',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京中海物业管理有限公司奥南分公司',
                sercon: '形象岗迎宾，专梯服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京国泰饭店',
                sercon: '中海系酒店',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京国泰饭店',
                sercon: '会议服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京煜祥文化产业有限公司',
                sercon: '公关活动，活动策划，推介会执行',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '华联咖世家（北京）餐饮管理有限公司',
                sercon: '茶歇服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京煜祥文化产业有限公司',
                sercon: '团建拓展，策划服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京市高朋律师事务所',
                sercon: '法务咨询',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '联合各大银行，针对企业推出综合信贷服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: 'OFFICEZIP',
                sercon: '分散办公',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京九五石科贸发展有限公司',
                sercon: '企业内购',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              }
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '百米站',
                sercon: '快递收发',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京福奈特洗衣服务有限公司',
                sercon: '专业洗涤',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: 'cake boss蛋糕',
                sercon: '网红蛋糕定制、罐装蛋糕、纸杯蛋糕等',
                sertime: '2020/6/10-2020/12/10',
                serphone: '18611148297',
                oflshop: 'cake boss蛋糕老板',
                seradr: '24家店北京市范围内可配送',
                discont: '定制专属优惠'
              },
              {
                title: '维尔纳斯蛋糕',
                sercon: '蛋糕定制、甜点定制',
                sertime: '2020/6/10-2020/12/10',
                serphone: '13366127029',
                oflshop: '维尔纳斯意大利手工艺蛋糕',
                seradr: '23家店北京市范围内可配送',
                discont: '9折优惠'
              },
              {
                title: '爱喜猫自助洗车',
                sercon: '自助洗车',
                sertime: '2020/6/15-2021/6/15',
                serphone: '13716644007',
                oflshop: '爱喜猫自助洗车',
                seradr: '北京市范围内可选择',
                discont: '享受专属优惠'
              },
              {
                title: '馨花语商贸有限公司',
                sercon: '鲜花定制',
                sertime: '2020/6/9-2020/12/10',
                serphone: '13911589165',
                oflshop: '馨花语花卉',
                seradr: '王四营桥南盛华宏林粮油批发市场1层花花市界A20号',
                discont: '享受专属优惠'
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              },
            ]
          }
        ],
        zhdsb:[
          {
            icon: ofT,
            title: 'OFFICE TECHINE +',
            data:[
              {
                title: '北京通达三季科技有限公司',
                sercon: '提供网络搭接及维护服务',
                sertime: '长久',
                serphone: '15611525858',
                oflshop: '北京通达三季科技有限公司',
                seradr: '北京中海大厦B1',
                discont: ''
              },
              {
                title: '北京通达三季科技有限公司',
                sercon: '提供网络设备搭接及维护服务',
                sertime: '长久',
                serphone: '15611525858',
                oflshop: '北京通达三季科技有限公司',
                seradr: '北京中海大厦B1',
                discont: ''
              },
              {
                title: '搜狗公司',
                sercon: '专属软件可免费使用',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
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
                oflshop: '北舞星空流行舞蹈培训中心',
                seradr: '西直门西环广场凯德T2楼10层C8室',
                discont: '享受年度专属优惠'
              },
              {
                title: '康乐家园俱乐部',
                sercon: '提供血压、血糖等各项身体指标检测，提供解决方案',
                sertime: '2020/6/10-2020/12/10',
                serphone: '',
                oflshop: '',
                seradr: '正华国贸财富中心',
                discont: '享受专属优惠'
              }
            ],
          },{
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: 'cake boss蛋糕',
                sercon: '网红蛋糕定制、罐装蛋糕、纸杯蛋糕等',
                sertime: '2020/6/10-2020/12/10',
                serphone: '18611148297',
                oflshop: 'cake boss蛋糕老板',
                seradr: '24家店北京市范围内可配送',
                discont: '定制专属优惠'
              },
              {
                title: '维尔纳斯蛋糕',
                sercon: '蛋糕定制、甜点定制',
                sertime: '2020/6/10-2020/12/10',
                serphone: '13366127029',
                oflshop: '维尔纳斯意大利手工艺蛋糕',
                seradr: '23家店北京市范围内可配送',
                discont: '9折优惠'
              }
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '石景山投促局、古城街道办事处',
                sercon: '深度了解企业的相关扶持政策，协助企业进行相关申报资料筹备',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '中海云商',
                sercon: '提供楼内企业人力帮办',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京城坤筑洁生物科技有限公司',
                sercon: '日常保洁，消杀服务。',
                sertime: '长久',
                serphone: '13691005506',
                oflshop: '北京城坤筑洁生物科技有限公司',
                seradr: '北京市朝阳区东三环中路39号院10号楼SH-1039室',
                discont: '低于市场价格（9折）'
              },
              {
                title: '北京盛芳润雅花卉有限公司',
                sercon: '办公室绿化园艺服务',
                sertime: '长久',
                serphone: '18911587818',
                oflshop: '北京盛芳润雅花卉有限公司',
                seradr: '北京市房山区琉璃河镇白庄9区1号-9号',
                discont: '低于市场价格（9折）'
              },
              {
                title: '北京瑞祥佳艺建筑装饰工程有限公司',
                sercon: '空间设计、施工建造、软装服务全流程定制',
                sertime: '长久',
                serphone: '13810995719',
                oflshop: '北京瑞祥佳艺建筑装饰工程有限公司',
                seradr: '北京市丰台区宋家庄路苇子坑149北厂9幢',
                discont: '低于市场价格'
              },
              {
                title: '中海物业',
                sercon: '专属车位预留、酒店预订、形象岗迎宾、专车接送。',
                sertime: '长久',
                serphone: '58345118',
                oflshop: '中海物业',
                seradr: '北京中海大厦B1',
                discont: ''
              },
              {
                title: '国泰饭店',
                sercon: '搭接楼内企业国泰饭店联系',
                sertime: '长久',
                serphone: '(010)65683366',
                oflshop: '国泰饭店',
                seradr: '北京市朝阳区永安西里12号',
                discont: ''
              },
              {
                title: '国泰饭店、OFFICEZIP',
                sercon: '提供会务空间与服务的定制',
                sertime: '长久',
                serphone: '(010)65683366',
                oflshop: '国泰饭店',
                seradr: '北京市朝阳区永安西里12号',
                discont: ''
              },
              {
                title: 'OFFICEZIP',
                sercon: '定制茶歇会、酒会party等餐饮活动服务',
                sertime: '长久',
                serphone: '13811402497',
                oflshop: 'OFFICEZIP',
                seradr: '北京中海大厦17层',
                discont: '低于市场价格（9折）'
              },
              {
                title: 'OFFICEZIP',
                sercon: '开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务',
                sertime: '长久',
                serphone: '13811402497',
                oflshop: 'OFFICEZIP',
                seradr: '北京中海大厦17层',
                discont: '低于市场价格（9折）'
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              },
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '丰巢、顺丰',
                sercon: '上门代收代发公司、个人快递，安全可靠。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '爱喜猫自助洗车',
                sercon: '自助洗车',
                sertime: '2020/6/15-2021/6/15',
                serphone: '13716644007',
                oflshop: '爱喜猫自助洗车',
                seradr: '北京市范围内可选择',
                discont: '享受专属优惠'
              },
              {
                title: '馨花语商贸有限公司',
                sercon: '鲜花定制',
                sertime: '2020/6/9-2020/12/10',
                serphone: '13911589165',
                oflshop: '馨花语花卉',
                seradr: '王四营桥南盛华宏林粮油批发市场1层花花市界A20号',
                discont: '享受专属优惠'
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              },
            ]
          }
        ]
      },
      tj: {
        zhgc:[
          {
            icon: ofI,
            title: "OFFICE ICON +",
            data:[
              {
                title: '维纳西装定制',
                sercon: '个性化的高端西装定制服务',
                sertime: '长久',
                serphone: '13212151005',
                oflshop: '维纳西装定制',
                seradr: '大悦城3号楼1903',
                discont: '享受专属优惠价格，详见店里'
              }
            ],
          },{
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: '花里咖啡',
                sercon: '咖啡休闲',
                sertime: '长久',
                serphone: '15822996415',
                oflshop: '花里咖啡',
                seradr: '吴家窑大街与卫津路交口君禧华庭2号楼36号底商',
                discont: '享受专属优惠价格，详见店里'
              }
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '天津市和平区沐尔鲜花店',
                sercon: '可为租户提供绿植鲜花租摆服务',
                sertime: '长久',
                serphone: '15002270507',
                oflshop: '天津市和平区沐尔鲜花店',
                seradr: '天津市和平区赤峰道129号210室',
                discont: ''
              },
              {
                title: '康莱德酒店',
                sercon: '协议价格',
                sertime: '长久',
                serphone: '19845258861',
                oflshop: '康莱德酒店',
                seradr: '天塔道46号',
                discont: '享受专属优惠价格，详见店里'
              },
              {
                title: '天津闱墨文化传播有限公司',
                sercon: '应租户需求提供美陈、各种大小活动',
                sertime: '长久',
                serphone: '13163176771',
                oflshop: '天津闱墨文化传播有限公司',
                seradr: '天津市南开区凌宾路凌奥产业园6号楼3层闱墨公关',
                discont: ''
              },
              {
                title: '漫恩文化传播有限公司',
                sercon: '提供咖啡、糕点、鲜花',
                sertime: '长久',
                serphone: '13502029348',
                oflshop: '漫恩文化传播有限公司',
                seradr: '河西区中海八里台君禧华庭底商2-36号',
                discont: ''
              },
              {
                title: '天津闱墨文化传播有限公司',
                sercon: '提供各类活动服务',
                sertime: '长久',
                serphone: '13163176771',
                oflshop: '天津闱墨文化传播有限公司',
                seradr: '天津市南开区凌宾路凌奥产业园6号楼3层闱墨公关',
                discont: ''
              },
              {
                title: '永丰盛世文化传播有限公司',
                sercon: '可应租户需求提供各类礼品定制服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              },
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '穆诺洗衣馆',
                sercon: '一周提供两次上门取送衣服，并享有折扣',
                sertime: '长久',
                serphone: '16600347346',
                oflshop: '穆诺洗衣馆',
                seradr: '卫津南路君禧华庭西门7-15底商',
                discont: '享受专属优惠价格，详见店里'
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              }
            ]
          }
        ],
        zhcfzx:[
          {
            icon: ofI,
            title: "OFFICE ICON +",
            data:[
              {
                title: '天津市河西区明远美容美体店',
                sercon: '楼内客户持楼控卡享价格优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '明远·NDIANA肌肤管理中心',
                seradr: '天津河西区黑牛城道南侧四信公寓底商',
                discont: ''
              },
              {
                title: '天津市河西区艺阁美容美发中心',
                sercon: '楼内客户持楼控卡享价格优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '米娜造型',
                seradr: '天津河西区黑牛城道北侧四里底商',
                discont: ''
              },
              {
                title: '吉健身、塑来健身',
                sercon: '楼内客户持楼控卡享价格优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '吉健身',
                seradr: '天津河西区黑牛城道南侧四信公寓7号楼82号底商',
                discont: ''
              }
            ],
          },{
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: '漫恩文化传播有限公司',
                sercon: '楼内客户享价格优惠',
                sertime: '长久',
                serphone: '13502029348',
                oflshop: '漫恩文化传播',
                seradr: '河西区中海八里台君禧华庭底商2-36号',
                discont: ''
              },
              {
                title: '花里咖啡',
                sercon: '咖啡休闲',
                sertime: '长久',
                serphone: '15822996415',
                oflshop: '花里咖啡',
                seradr: '吴家窑大街与卫津路交口君禧华庭2号楼36号底商',
                discont: '享受专属优惠价格，详见店里'
              }
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '河西区商务局',
                sercon: '提供实时政策解读',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '海纳万商',
                sercon: '收费提供保洁相关及客户入室服务',
                sertime: '长久',
                serphone: '',
                oflshop: '中海物业',
                seradr: '',
                discont: ''
              },
              {
                title: '天津市和平区沐尔鲜花店',
                sercon: '绿植鲜花等服务',
                sertime: '长久',
                serphone: '15002270507',
                oflshop: '天津市和平区沐尔鲜花店',
                seradr: '天津市和平区赤峰道129号210室',
                discont: ''
              },
              {
                title: '晨光',
                sercon: '办公用品采购',
                sertime: '长久',
                serphonename: '线上采购',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '海纳万商',
                sercon: '楼内车位预留、形象岗迎宾、接待',
                sertime: '长久',
                serphone: '17710256579',
                oflshop: '中海物业',
                seradr: '',
                discont: ''
              },
              {
                title: '天津伯派樂智能酒店',
                sercon: '价格优惠',
                sertime: '长久',
                serphone: '86666688',
                oflshop: '天津伯派樂智能酒店',
                seradr: '河西区陈塘庄地铁站A口向北500米',
                discont: ''
              },
              {
                title: '天津市律师协会',
                sercon: '免费提供基础法律问题的解答',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '上海银行',
                sercon: '可为由需求的企业提供上门定制服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '漫恩文化传播有限公司',
                sercon: '简单的礼品定制',
                sertime: '长久',
                serphone: '13502029348',
                oflshop: '漫恩文化传播',
                seradr: '河西区中海八里台君禧华庭底商2-36号',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              }
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '顺丰',
                sercon: '上门快递收发服务',
                sertime: '长久',
                serphone: '18512282400',
                oflshop: '顺丰速运',
                seradr: '',
                discont: ''
              },
              {
                title: 'UCC国际洗衣',
                sercon: '上门收送、价格优惠',
                sertime: '长久',
                serphone: '18920238526',
                oflshop: 'UCC国际洗衣',
                seradr: '天津河西区黑牛城道北侧四里底商',
                discont: ''
              },
              {
                title: '北京易车生活汽车服务连锁有限公司',
                sercon: '楼内客户持楼控卡享价格优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '易车生活',
                seradr: '天津河西区黑牛城道五里住宅B1',
                discont: ''
              },
              {
                title: '拂礼兰卡酌象（天津）科技发展有限公司',
                sercon: '楼内客户持楼控卡享价格优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '酌象进口酒水体验馆',
                seradr: '天津河西区黑牛城道南侧四信公寓6-79号底商',
                discont: ''
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              },
              {
                title: '维纳西装定制',
                sercon: '个性化的高端西装定制服务',
                sertime: '长久',
                serphone: '13212151005',
                oflshop: '维纳西装定制',
                seradr: '大悦城3号楼1903',
                discont: '享受专属优惠价格，详见店里'
              },
            ]
          }
        ]
      },
      qd: {
        zhds:[
          {
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: '青岛慕忆咖啡有限公司',
                sercon: '合作供应商资源青岛慕忆咖啡有限公司为中海租户提供会务空间与服务的定制，无优惠。',
                sertime: '长久',
                serphone: '杨经理18678918450',
                oflshop: '青岛慕忆咖啡有限公司',
                seradr: '青岛市市北区徐州北路180-1号',
                discont: ''
              }
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '',
                sercon: '提供实时政策解读，免费',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '上海前锦众程人力资源有限公司青岛分公司',
                sercon: '借助楼内租户前锦众程人力资源有限公司资源，为企业提供提供整体解决方案，可以给予优惠需要商谈。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '日常保洁服务，有优惠需要洽谈',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '绿植花卉租摆与养护，无优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '中迅达装饰工程集团有限公司',
                sercon: '外部资源供应商中迅达装饰工程集团有限公司提供装修服务，可以给予优惠需要商谈。',
                sertime: '长久',
                serphone: '徐经理15376728839',
                oflshop: '中迅达装饰工程集团有限公司',
                seradr: '',
                discont: ''
              },
              {
                title: '天瑞星空酒店',
                sercon: '合作供应商资源天瑞星空酒店为中海租户提供团购房服务，可以给予优惠商谈中。',
                sertime: '长久',
                serphone: '林经理17705322783',
                oflshop: '天瑞星空酒店',
                seradr: '青岛市市北区延吉路76号',
                discont: ''
              },
              {
                title: '天瑞星空酒店',
                sercon: '合作供应商资源天瑞星空酒店为中海租户提供会务空间与服务的定制，可以给予优惠商谈中。',
                sertime: '长久',
                serphone: '林经理17705322783',
                oflshop: '天瑞星空酒店',
                seradr: '青岛市市北区延吉路76号',
                discont: ''
              },
              {
                title: '青岛晓能餐饮管理有限公司',
                sercon: '合作配餐公司资源为租户提供订餐服务，有优惠具体商谈中',
                sertime: '长久',
                serphone: '张经理18562872067',
                oflshop: '青岛晓能餐饮管理有限公司',
                seradr: '青岛市市南区中商大厦',
                discont: ''
              },
              {
                title: '奥美文化',
                sercon: '合作供应商资源奥美文化为中海租户提供礼品策划、创意、设计、定制、生产、配送等一站式礼品定制服务，有优惠需要洽谈。',
                sertime: '长久',
                serphone: '张经理15553225589',
                oflshop: '奥美文化',
                seradr: '山东省崂山区科园经四路五号金贝特产业园4楼',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              },
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '',
                sercon: '为企业提供快递送货上楼，无优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              }
            ]
          }
        ],
      },
      ty: {
        zhgjzx:[
          {
            icon: ofI,
            title: "OFFICE ICON +",
            data:[
              {
                title: '太原市万柏林区源途健身俱乐部',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '租户协议价'
              }
            ],
          },
          {
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: '太原锄禾园餐饮服务有限公司',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '楼内租户用餐享九五折'
              },
              {
                title: '太原市三晋饭庄有限公司晋品轩',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '楼内租户用餐享九五折'
              },
              {
                title: '太原市万柏林区恒岳春粗粮饺子馆',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '楼内租户用餐享九五折'
              }
            ],
          },
          {
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '太原市万柏林区促进楼宇经济发展领导组办公室',
                sercon: '万柏林区企业扶持政策、相关申报',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '中海国际中心B座807',
                discont: ''
              },
              {
                title: '山西方胜人力资源服务有限公司',
                sercon: '人力资源服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '中海国际中心B座19层',
                discont: ''
              },
              {
                title: '',
                sercon: '提供日常保洁服务',
                sertime: '长久',
                serphone: '0351-5264666',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '增值收费服务，提供绿植供应商名录，包括绿植租摆设计与养护',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '择优推荐',
                sercon: '租赁单元设计装修',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '合作商择优推荐',
                sercon: '办公文具集采、印务耗材采购、办公设备租赁与购买。',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '专属车位预留、形象岗迎宾、专梯等候',
                sertime: '长久',
                serphone: '0351-5264666',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '中海系酒店/本地协议酒店预订',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '君恒信和企业管理咨询有限公司、山西纵合横律师事务所、山西正磐律师事务所',
                sercon: '企业咨询、法务咨询',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '中海国际中心B座11层、12层',
                discont: ''
              },
              {
                title: '',
                sercon: '开放租赁中心的会议中心',
                sertime: '长久',
                serphone: '0351-8379888',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应;二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              },
              {
                title: '山西丽华大酒店',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '租户协议价'
              },
              {
                title: '太原市三晋酒店管理有限公司',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '租户协议价'
              },
              {
                title: '太原市万柏林区翠翠洗衣店',
                sercon: '',
                sertime: '2019/8/1-2020/7/1',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: '租户协议价'
              }
            ],
          },
          {
            icon: ofA,
            title: "OFFICE ARTIST +",
            data:[
              {
                title: '合作商择优推荐',
                sercon: '上门收送，专业洗涤',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '中海寰宇天下6号楼底商',
                discont: '协议价'
              },
              {
                title: '合作商择优推荐',
                sercon: '冷餐、下午茶定制',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '世纪佳缘',
                sercon: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券',
                sertime: '2020/6/10-2020/8/31',
                serphone: '',
                oflshop: '世纪佳缘',
                seradr: '',
                discont: '一、线上世纪佳缘钻石会员9折优惠；二、线下约会吧免费体验券'
              },
              {
                title: '滴滴出行',
                sercon: '滴滴出行',
                sertime: '2020/6/2-2020/6/29',
                serphone: '',
                oflshop: '滴滴出行',
                seradr: '',
                discont: '5折优惠'
              }
            ]
          }
        ],
      },
      jn: {
        zhgc:[
          {
            icon: ofT,
            title: 'OFFICE TECHINE +',
            data:[
              {
                title: '',
                sercon: '提供每年3次的免费上门维修服务，超出部分按维修项目收费',
                sertime: '长久',
                serphone: '',
                seradr: ''
              },
            ],
          },{
            icon: ofE,
            title: "OFFICE EPICURE +",
            data:[
              {
                title: '',
                sercon: '为重点客户及周年庆客户提供提供免费定制下午茶',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
            ],
          },{
            icon: ofU,
            title: "OFFICE UPGRADER +",
            data:[
              {
                title: '',
                sercon: '政府相关政策咨询解读',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '正歆集团',
                sercon: '提供收费地毯清洗等日常保洁及客户入室服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '济南缤纷花卉有限公司',
                sercon: '绿植花卉租摆与养护',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '意内雅',
                sercon: '提供收费的室内装修',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '得力',
                sercon: '提供协议价格的优质办公用品',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '专属车位及专梯预留等',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: ' ',
                sercon: '为中海租户提供本地协议商务酒店订房服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '于客户价值日为重点VIP客户进行定向空调进出风口清洗',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '为企业提供收费的沙龙及会议场地定制化服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '为楼内企业提供有偿法律咨询服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '北京银行/招商银行',
                sercon: '为企业提供贷款咨询和支持',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '',
                sercon: '联合OFFICEZIP，对企业提供装修过渡期和分散办公服务，同时开放会议服务',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '亿百葩鲜',
                sercon: '联合环宇城进口超市，为持有中海广场工牌的租户提供全线产品9折优惠',
                sertime: '长久',
                serphone: '',
                oflshop: '',
                seradr: '',
                discont: ''
              },
              {
                title: '诺梵（上海）系统科技股份有限公司北京分公司',
                sercon: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。',
                sertime: '长久',
                serphone: '13810969446',
                oflshop: '诺梵家具定制',
                seradr: '东亿国际传媒产业园演播大厅A座5层',
                discont: '一、售后快速响应；二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。'
              },
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
                oflshop: '爱喜猫自助洗车',
                seradr: '北京市范围内可选择',
                discont: '享受专属优惠'
              },
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
    const {cityName,bj,tj,qd,ty,jn} = this.state
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
              <Link to={{pathname:'/detail', state:{ list: bj.zhgc, titleImg: bj01, comImg: bjcon01, cityName: cityName }}}>
                <img src={bjItem1} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: bj.zhdcgc, titleImg: bj02, comImg: bjcon02, cityName: cityName }}}>
                <img src={bjItem2} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: bj.anzhgjzx, titleImg: bj03, comImg: bjcon03, cityName: cityName }}}>
                <img src={bjItem3} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: bj.anzhgjzx, titleImg: bj04, comImg: bjcon04, cityName: cityName }}}>
                <img src={bjItem4} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: bj.zhgc, titleImg: bj05, comImg: bjcon05, cityName: cityName }}}>
                <img src={bjItem5} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: bj.zhdsb, titleImg: bj06, comImg: bjcon06, cityName: cityName }}}>
                <img src={bjItem6} alt=""/>
              </Link>
            </div>
          }
          {cityName=="tj"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: tj.zhgc, titleImg: tj01, comImg: tjcon01, cityName: cityName }}}>
                <img src={tjItem1} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: tj.zhcfzx, titleImg: tj02, comImg: tjcon02, cityName: cityName }}}>
                <img src={tjItem2} alt=""/>
              </Link>
              <Link to={{pathname:'/detail',state:{ list: tj.zhcfzx, titleImg: tj03, comImg: tjcon03, cityName: cityName }}}>
                <img src={tjItem3} alt=""/>
              </Link>
            </div>
          }
          {cityName=="qd"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: qd.zhds, titleImg: qd01, comImg: qdcon01, cityName: cityName }}}>
                <img src={qdItem1} alt=""/>
              </Link>
            </div>
          }
          {cityName=="ty"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: ty.zhgjzx, titleImg: ty01, returnBut2: true, comImg: tycon01, cityName: cityName }}}>
                <img src={tyItem1} alt=""/>
              </Link>
            </div>
          }
          {cityName=="jn"&&
            <div>
              <Link to={{pathname:'/detail',state:{ list: jn.zhgc, titleImg: jn01, comImg: jncon01, cityName: cityName } }}>
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
