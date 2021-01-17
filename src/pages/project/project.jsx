import { connect } from 'dva';
import * as React from 'react';
import { Link } from 'dva/router';
import styles from './project.less';
import styles2 from '../../components/animate.less';
import returnb from '../../assets/returnb.png';
import topimg4 from '../../assets/topimg4.png';

import bj_zhgc from '../../assets/zhgc.png';
import bj_zhdcgc from '../../assets/zhdcgc.png';
import bj_anzhgjzx from '../../assets/anzhgjzx.png';
import bj_zj from '../../assets/zj.png';
import bj_zhgjzxcgz from '../../assets/zhgjzxcgz.png';
import bj_zhds from '../../assets/zhds.png';

import tj_zhgc from '../../assets/tj_zhgc.png';
import tj_zhcfzx from '../../assets/tj_zhcfzx.png';
import tj_zhds from '../../assets/tj_zhds.png';
import ty_zhgjzx from '../../assets/ty_zhgjzx.png';

import qd_zhds from '../../assets/qd_zhds.png';

import jn_zhgc from '../../assets/jn_zhgc.png';

import bj_anhgjzx_topmain from '../../assets/bj_anhgjzx_topmain.png';
import bj_zhdcgc_topmain from '../../assets/bj_zhdcgc_topmain.png';
import bj_zhds_topmain from '../../assets/bj_zhds_topmain.png';
import bj_zhgc_topmain from '../../assets/bj_zhgc_topmain.png';
import bj_zhgjzx_topmain from '../../assets/bj_zhgjzx_topmain.png';
import bj_zjcfgjzx_topmain from '../../assets/bj_zjcfgjzx_topmain.png';

import tj_top1 from '../../assets/tj_top1.png';
import tj_top2 from '../../assets/tj_top2.png';
import tj_top3 from '../../assets/tj_top3.png';

import qd_top1 from '../../assets/qd_top1.png';

import ty_top1 from '../../assets/ty_top1.png';

import jn_top1 from '../../assets/jn_top1.png';

// 详情页5个icon
import master from '../../assets/master.png';
import icon from '../../assets/icon.png';
import epicure from '../../assets/epicure.png';
import ungrander from '../../assets/ungrander.png';
import artist from '../../assets/artist.png';

class Project extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      bj: [
        {
          img: bj_zhgc,
          name: 'bj_zhgc',
          tel: '010-5977 2083',
          detailimg: bj_zhgc_topmain,
          sertel: '010-597 72083',
          data: [
            {
              icon: master,
              data:[
                {
                  title: '招商银行北京分行',
                  sercon: '为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展',
                  sertime: '长久',
                  serphone: '见北京中海商务写字楼客户专享合作方案',
                  seradr: '北京市西城区复兴门内大街156号A座首层',
                  discont: '见北京中海商务写字楼客户专享合作方案',
                  zs: true
                },{
                  "classify": "职场办公",
                  "project": "信息化搭建",
                  "sertime": "长久",
                  "title": "北京通达三季科技有限公司",
                  "sercon": "服务的产品有：国际、国内、BGP互联网接入、IDC互联网数据中心、办公区系统集成??智能化无线Wifi覆盖系统、 智能化会议系统、机房搭建、设备代购、监控系统、门禁系统、网管服务（IT外包）",
                  "oflshop": "",
                  "discont": ""
                }, {
                  "classify": "职场办公",
                  "project": "电脑维修",
                  "sertime": "长久",
                  "title": "北京通达三季科技有限公司",
                  "sercon": "SLA服务：在线支持，5分钟内电话响应，10分钟内到达现场；7*24*365小时全天候不间断电话支持服务；专人客服代表服务：可以通过客服代表获得DataCom的全部服务项目；",
                  "oflshop": "",
                  "discont": ""
                }
              ],
            },
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "舞蹈培训",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "北舞星空流行舞蹈培训中心",
                  "sercon": "各类舞蹈培训",
                  "oflshop": "北舞星空流行舞蹈培训中心",
                  "discont": "享受专属优惠"
                },{
                  "classify": "服饰美容",
                  "project": "健康咨询",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "康乐家园俱乐部",
                  "sercon": "提供血压、血糖等各项身体指标检测，提供解决方案",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "西式冷餐会、酒会party等餐饮活动服务。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "cake boss蛋糕",
                  "sercon": "网红蛋糕定制、罐装蛋糕、纸杯蛋糕等",
                  "oflshop": "cake boss蛋糕老板",
                  "discont": "享受专属优惠"
                },{
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "维尔纳斯蛋糕",
                  "sercon": "蛋糕定制、甜点定制",
                  "oflshop": "维尔纳斯意大利手工艺蛋糕",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "CBD管委会",
                  "sercon": "积极对接CBD管委会，深度了解企业的相关扶持政策，协助企业进行相关申报资料筹备；",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "中海云商",
                  "sercon": "提供楼内企业人力帮办",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "北京长海物业管理服务有限公司",
                  "sercon": "日常保洁消杀服务。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "北京雨辰梦文园林绿化有限公司",
                  "sercon": "打造绿色办公空间，办公室绿化园艺服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "北京旭峰建设工程有限公司",
                  "sercon": "空间设计、施工建造、软装服务全流程定制",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "专属车位预留、酒店预订、形象岗迎宾、专车接送。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "顺丰",
                  "sercon": "上门代收代发公司、个人快递，安全可靠。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "酒店预订",
                  "sertime": "长久",
                  "title": "国泰饭店",
                  "sercon": "中海系商务酒店，将为COOC合作企业提供会务场地、团购房、个人优惠订房的特惠权益。",
                  "oflshop": "国泰饭店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "国泰饭店",
                  "sercon": "利用中海商业旗下酒店等资源，亦可于项目内进行会务空间与服务的定制。",
                  "oflshop": "国泰饭店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "自助洗车",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "爱喜猫自助洗车",
                  "sercon": "自助洗车",
                  "oflshop": "爱喜猫自助洗车",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "鲜花定制",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "馨花语商贸有限公司",
                  "sercon": "鲜花定制",
                  "oflshop": "馨花语花卉",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "滴滴出行",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        },
        {
          img: bj_zhdcgc,
          name: 'bj_zhdcgc',
          tel: '010-5783 7888',
          detailimg: bj_zhdcgc_topmain,
          sertel: '010-5783 7888',
          data: [
            {
              icon: master,
              data:[
                {
                  title: '招商银行北京分行',
                  sercon: '为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展',
                  sertime: '长久',
                  serphone: '见北京中海商务写字楼客户专享合作方案',
                  seradr: '北京市西城区复兴门内大街156号A座首层',
                  discont: '见北京中海商务写字楼客户专享合作方案',
                  zs: true
                },{
                  "classify": "职场办公",
                  "project": "信息化搭建",
                  "sertime": "长久",
                  "title": "北京通达三季科技有限公司",
                  "sercon": "提供网络搭接及维护服务",
                  "oflshop": "北京通达三季科技有限公司",
                  "discont": "北京东城区永定门外西滨河路8号中海地产广场B2层",
                  "": "提供网络搭接及维护服务"
                },{
                  "classify": "职场办公",
                  "project": "电脑维修",
                  "sertime": "长久",
                  "title": "北京通达三季科技有限公司",
                  "sercon": "提供网络设备搭接及维护服务",
                  "oflshop": "北京通达三季科技有限公司",
                  "discont": "北京东城区永定门外西滨河路8号中海地产广场B2层",
                  "": "提供网络设备搭接及维护服务"
                }
              ],
            },
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "舞蹈培训",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "北舞星空流行舞蹈培训中心",
                  "sercon": "各类舞蹈培训",
                  "oflshop": "北舞星空流行舞蹈培训中心",
                  "discont": "西直门西环广场凯德T2楼10层C8室",
                  "": "享受专属优惠"
                },{
                  "classify": "服饰美容",
                  "project": "健康咨询",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "康乐家园俱乐部",
                  "sercon": "提供血压、血糖等各项身体指标检测，提供解决方案",
                  "oflshop": "",
                  "discont": "正华国贸财富中心",
                  "": "享受专属优惠"
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "北京莉莉世界文化有限公司",
                  "sercon": "提供楼内客户各式餐饮活动服务",
                  "oflshop": "北京莉莉世界文化有限公司",
                  "discont": "北京东城区永定门外西滨河路8号中海地产广场1层"
                },{
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "cake boss蛋糕",
                  "sercon": "网红蛋糕定制、罐装蛋糕、纸杯蛋糕等",
                  "oflshop": "cake boss蛋糕老板",
                  "discont": "24家店北京市范围内可配送",
                  "": "享受专属优惠"
                },{
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "维尔纳斯蛋糕",
                  "sercon": "蛋糕定制、甜点定制",
                  "oflshop": "维尔纳斯意大利手工艺蛋糕",
                  "discont": "23家店北京市范围内可配送",
                  "": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "东亿国际传媒产业园演播大厅A座5层",
                  "": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "永外街道办事处",
                  "sercon": "积极联络所在市、区级政府，深度了解企业的相关扶持政策；同时经营中心设置解析服务人员，协助企业进行相关申报资料筹备",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "校企对接",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "联合COOC中海商务的广泛校园资源，帮助企业建立校企沟通渠道。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "人资培训",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "协力企业建立完善的人力培训课程及架构，同时提供单独的培训课程及资源。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "中海云商",
                  "sercon": "提供楼内企业人力帮办",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "北京城坤筑洁生物科技有限公司",
                  "sercon": "日常保洁消杀服务。",
                  "oflshop": "",
                  "discont": "",
                  "": "日常保洁消杀服务"
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "北京盛芳润雅花卉有限公司",
                  "sercon": "提供项目外围绿化及室内绿色办公空间，办公室绿化园艺服务",
                  "oflshop": "",
                  "discont": "",
                  "": "提供项目外围绿化及室内绿色办公空间，办公室绿化园艺服务"
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "空间设计、施工建造、软装服务全流程定制",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "办公文具集采、印务耗材采购、办公设备租赁与购买。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "提供专属车位预留，形象岗迎宾等服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "国泰饭店",
                  "sercon": "搭接楼内企业国泰饭店联系",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "大客户VIP专梯服务",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "提供大客户专用VIP梯服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "员工团购服务",
                  "sertime": "长久",
                  "title": "柒一拾壹（北京）有限公司",
                  "sercon": "提供楼内员工店内商品团购活动",
                  "oflshop": "柒一拾壹（北京中海地产广场店）",
                  "discont": "北京东城区永定门外西滨河路8号中海地产广场1层",
                  "": "定期提供楼内员工店内商品团购及福袋等活动"
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "提供项目内进行会务空间与服务的定制",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "公关活动",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "联合全国各地百余家媒体的推广合作资源，定制专属公关活动。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "团建拓展",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "专业、多元的团建活动组织，提供全流程服务。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "金融服务",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "联合各大银行，针对企业推出综合信贷服务包",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "提供礼品策划、创意、设计、定制、生产、配送等一站式礼品定制服务。",
                  "oflshop": "",
                  "discont": ""
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "丰巢快递",
                  "sercon": "提供快递暂存服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "衣物洗涤",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "自助洗车",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "爱喜猫自助洗车",
                  "sercon": "自助洗车",
                  "oflshop": "爱喜猫自助洗车",
                  "discont": "北京市范围内可选择",
                  "": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "鲜花定制",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "馨花语商贸有限公司",
                  "sercon": "鲜花定制",
                  "oflshop": "馨花语花卉",
                  "discont": "王四营桥南盛华宏林粮油批发市场1层花花市界A20号",
                  "": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "",
                  "": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "",
                  "discont": "",
                  "": "享受专属优惠"
                }
              ]
            }
          ]
        },
        {
          img: bj_anzhgjzx,
          name: 'bj_anzhgjzx',
          tel: '010-5704 0668',
          detailimg: bj_anhgjzx_topmain,
          sertel: '010-5704 0668',
          data: [
            {
              icon: master,
              data:[
                {
                  title: '招商银行北京分行',
                  sercon: '为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展',
                  sertime: '长久',
                  serphone: '见北京中海商务写字楼客户专享合作方案',
                  seradr: '北京市西城区复兴门内大街156号A座首层',
                  discont: '见北京中海商务写字楼客户专享合作方案',
                  zs: true
                },{
                  "classify": "职场办公",
                  "project": "信息化搭建",
                  "sertime": "长久",
                  "title": "世纪二千",
                  "sercon": "网络搭建",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "职场办公",
                  "project": "电脑维修",
                  "sertime": "长久",
                  "title": "北京金世浩远电子商贸有限公司",
                  "sercon": "电脑上门维修维护",
                  "oflshop": "",
                  "discont": ""
                }
              ],
            },
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "舞蹈培训",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "北舞星空流行舞蹈培训中心",
                  "sercon": "各类舞蹈培训",
                  "oflshop": "北舞星空流行舞蹈培训中心",
                  "discont": "享受专属优惠"
                },{
                  "classify": "服饰美容",
                  "project": "健康咨询",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "康乐家园俱乐部",
                  "sercon": "提供血压、血糖等各项身体指标检测，提供解决方案",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "环宇荟餐饮商户",
                  "sertime": "长久",
                  "title": "云订餐",
                  "sercon": "线上订餐服务",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "北京奥林匹克公园管委会",
                  "sercon": "优化营商环境，简化企业开办流程宣讲",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "校企对接",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "联合COOC中海商务的广泛校园资源，帮助企业建立校企沟通渠道。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "人资培训",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "协力企业建立完善的人力培训课程及架构",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "提供优质人力资源企业合作搭桥，提供整体解决方案。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "北京亮歌保洁技术有限公司",
                  "sercon": "日常保洁，全天侯保洁服务；开荒保洁，装修后开荒、保洁、清洗、养护服务；地毯清洗，地毯全面清洁与保养服务；室内全面清洁、消毒。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "北京绿一方园林绿化工程有限公司",
                  "sercon": "外围绿化养护、室内绿植租摆",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "北京今希建设集团有限公司",
                  "sercon": "建筑装修装饰工程",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "北京裕元荣商贸有限公司",
                  "sercon": "办公文具集采、印务耗材采购、办公设备租赁与购买",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "北京中海物业管理有限公司奥南分公司",
                  "sercon": "形象岗迎宾，专梯服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "北京国泰饭店",
                  "sercon": "中海系酒店",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "北京国泰饭店",
                  "sercon": "会议服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "公关活动",
                  "sertime": "长久",
                  "title": "北京煜祥文化产业有限公司",
                  "sercon": "公关活动，活动策划，推介会执行",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "华联咖世家（北京）餐饮管理有限公司",
                  "sercon": "茶歇服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "团建拓展",
                  "sertime": "长久",
                  "title": "北京煜祥文化产业有限公司",
                  "sercon": "团建拓展，策划服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "法务咨询",
                  "sertime": "长久",
                  "title": "北京市高朋律师事务所",
                  "sercon": "法务咨询",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "分散办公",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "北京九五石科贸发展有限公司",
                  "sercon": "企业内购",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "",
                  "sertime": "",
                  "title": "杂货集",
                  "sercon": "礼品定制，伴手礼方案定制",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                },{
                  "classify": "",
                  "project": "",
                  "sertime": "",
                  "title": "北京优尚佳艺传媒广告有限公司",
                  "sercon": "茶歇服务",
                  "oflshop": "",
                  "discont": ""
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "百米站",
                  "sercon": "快递收发",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "北京福奈特洗衣服务有限公司",
                  "sercon": "专业洗涤",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "cake boss蛋糕",
                  "sercon": "网红蛋糕定制、罐装蛋糕、纸杯蛋糕等",
                  "oflshop": "cake boss蛋糕老板",
                  "discont": "定制专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "维尔纳斯蛋糕",
                  "sercon": "蛋糕定制、甜点定制",
                  "oflshop": "维尔纳斯意大利手工艺蛋糕",
                  "discont": "9折优惠"
                },{
                  "classify": "生活服务",
                  "project": "自助洗车",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "爱喜猫自助洗车",
                  "sercon": "自助洗车",
                  "oflshop": "爱喜猫自助洗车",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "鲜花定制",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "馨花语商贸有限公司",
                  "sercon": "鲜花定制",
                  "oflshop": "馨花语花卉",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "",
                  "sertime": "",
                  "title": "丰巢快递柜",
                  "sercon": "快递收发",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "",
                  "sertime": "",
                  "title": "北京顺丰速运有限公司",
                  "sercon": "上门收发快递",
                  "oflshop": "",
                  "discont": ""
                }
              ]
            }
          ]
        },
        {
          img: bj_zj,
          name: 'bj_zj',
          tel: '010-5704 0668',
          detailimg: bj_zjcfgjzx_topmain,
          sertel: '010-5704 0668',
          data: [
            {
              icon: master,
              data:[
                {
                  title: '招商银行北京分行',
                  sercon: '为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展',
                  sertime: '长久',
                  serphone: '见北京中海商务写字楼客户专享合作方案',
                  seradr: '北京市西城区复兴门内大街156号A座首层',
                  discont: '见北京中海商务写字楼客户专享合作方案',
                  zs: true
                },{
                  "classify": "职场办公",
                  "project": "信息化搭建",
                  "sertime": "长久",
                  "title": "世纪二千",
                  "sercon": "网络搭建",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "职场办公",
                  "project": "电脑维修",
                  "sertime": "长久",
                  "title": "北京金世浩远电子商贸有限公司",
                  "sercon": "电脑上门维修维护",
                  "oflshop": "",
                  "discont": ""
                }
              ],
            },
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "舞蹈培训",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "北舞星空流行舞蹈培训中心",
                  "sercon": "各类舞蹈培训",
                  "oflshop": "北舞星空流行舞蹈培训中心",
                  "discont": "享受专属优惠"
                },{
                  "classify": "服饰美容",
                  "project": "健康咨询",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "康乐家园俱乐部",
                  "sercon": "提供血压、血糖等各项身体指标检测，提供解决方案",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "环宇荟餐饮商户",
                  "sertime": "长久",
                  "title": "云订餐",
                  "sercon": "线上订餐服务",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "北京奥林匹克公园管委会",
                  "sercon": "优化营商环境，简化企业开办流程宣讲",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "校企对接",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "联合COOC中海商务的广泛校园资源，帮助企业建立校企沟通渠道。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "人资培训",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "协力企业建立完善的人力培训课程及架构",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "提供优质人力资源企业合作搭桥，提供整体解决方案。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "北京亮歌保洁技术有限公司",
                  "sercon": "日常保洁，全天侯保洁服务；开荒保洁，装修后开荒、保洁、清洗、养护服务；地毯清洗，地毯全面清洁与保养服务；室内全面清洁、消毒。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "北京绿一方园林绿化工程有限公司",
                  "sercon": "外围绿化养护、室内绿植租摆",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "北京今希建设集团有限公司",
                  "sercon": "建筑装修装饰工程",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "北京裕元荣商贸有限公司",
                  "sercon": "办公文具集采、印务耗材采购、办公设备租赁与购买",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "北京中海物业管理有限公司奥南分公司",
                  "sercon": "形象岗迎宾，专梯服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "北京国泰饭店",
                  "sercon": "会议服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "公关活动",
                  "sertime": "长久",
                  "title": "北京煜祥文化产业有限公司",
                  "sercon": "公关活动，活动策划，推介会执行",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "华联咖世家（北京）餐饮管理有限公司",
                  "sercon": "茶歇服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "团建拓展",
                  "sertime": "长久",
                  "title": "北京煜祥文化产业有限公司",
                  "sercon": "团建拓展，策划服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "法务咨询",
                  "sertime": "长久",
                  "title": "北京市高朋律师事务所",
                  "sercon": "法务咨询",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "分散办公",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "北京九五石科贸发展有限公司",
                  "sercon": "企业内购",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "",
                  "sertime": "",
                  "title": "杂货集",
                  "sercon": "礼品定制，伴手礼方案定制",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "北京国泰饭店",
                  "sercon": "中海系酒店",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                },{
                  "classify": "",
                  "project": "",
                  "sertime": "",
                  "title": "北京优尚佳艺传媒广告有限公司",
                  "sercon": "茶歇服务",
                  "oflshop": "",
                  "discont": ""
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "百米站",
                  "sercon": "快递收发",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "cake boss蛋糕",
                  "sercon": "网红蛋糕定制、罐装蛋糕、纸杯蛋糕等",
                  "oflshop": "cake boss蛋糕老板",
                  "discont": "定制专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "维尔纳斯蛋糕",
                  "sercon": "蛋糕定制、甜点定制",
                  "oflshop": "维尔纳斯意大利手工艺蛋糕",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "自助洗车",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "爱喜猫自助洗车",
                  "sercon": "自助洗车",
                  "oflshop": "爱喜猫自助洗车",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "鲜花定制",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "sertime": "",
                  "title": "馨花语商贸有限公司",
                  "sercon": "鲜花定制",
                  "oflshop": "馨花语花卉",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "北京福奈特洗衣服务有限公司",
                  "sercon": "专业洗涤",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "",
                  "sertime": "",
                  "title": "丰巢快递柜",
                  "sercon": "快递收发",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "",
                  "sertime": "",
                  "title": "北京顺丰速运有限公司",
                  "sercon": "上门收发快递",
                  "oflshop": "",
                  "discont": ""
                }
              ]
            }
          ]
        },
        {
          img: bj_zhgjzxcgz,
          name: 'bj_zhgjzxcgz',
          tel: '010-6625 6188',
          detailimg: bj_zhgjzx_topmain,
          sertel: '010-6625 6188',
          data: [
            {
              icon: master,
              data:[
                {
                  "classify": "职场办公",
                  title: '招商银行北京分行',
                  sercon: '为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展',
                  sertime: '长久',
                  serphone: '见北京中海商务写字楼客户专享合作方案',
                  seradr: '北京市西城区复兴门内大街156号A座首层',
                  discont: '见北京中海商务写字楼客户专享合作方案',
                  zs: true
                },{
                  "classify": "职场办公",
                  "project": "体育运动",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "英狮体育公园",
                  "sercon": "体育运动、公司团建",
                  "oflshop": "英狮体育公园",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "舞蹈培训",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "北舞星空流行舞蹈培训中心",
                  "sercon": "各类舞蹈培训",
                  "oflshop": "北舞星空流行舞蹈培训中心",
                  "discont": "享受专属优惠"
                },{
                  "classify": "服饰美容",
                  "project": "健康咨询",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "康乐家园俱乐部",
                  "sercon": "提供血压、血糖等各项身体指标检测，提供解决方案",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },,{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "cake boss蛋糕",
                  "sercon": "网红蛋糕定制、罐装蛋糕、纸杯蛋糕等",
                  "oflshop": "cake boss蛋糕老板",
                  "discont": "享受专属优惠"
                },{
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "维尔纳斯蛋糕",
                  "sercon": "蛋糕定制、甜点定制",
                  "oflshop": "维尔纳斯意大利手工艺蛋糕",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "专属车位预留、酒店预订、形象岗迎宾、专车接送。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "顺丰",
                  "sercon": "上门代收代发公司、个人快递，安全可靠。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "酒店预订",
                  "sertime": "长久",
                  "title": "国泰饭店",
                  "sercon": "中海系商务酒店，将为COOC合作企业提供会务场地、团购房、个人优惠订房的特惠权益。",
                  "oflshop": "国泰饭店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "国泰饭店",
                  "sercon": "利用中海商业旗下酒店等资源，亦可于项目内进行会务空间与服务的定制。",
                  "oflshop": "国泰饭店",
                  "discont": ""
                }
              ]
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "自助洗车",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "爱喜猫自助洗车",
                  "sercon": "自助洗车",
                  "oflshop": "爱喜猫自助洗车",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "鲜花定制",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "馨花语商贸有限公司",
                  "sercon": "鲜花定制",
                  "oflshop": "馨花语花卉",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "滴滴出行",
                  "discont": "享受专属优惠"
                }]
            },
          ]
        },
        {
          img: bj_zhds,
          name: 'bj_zhds',
          tel: '010-5977 2888',
          detailimg: bj_zhds_topmain,
          sertel: '010-5977 2888',
          returnB: true,
          data: [
            {
              icon: master,
              data:[
                {
                  title: '招商银行北京分行',
                  sercon: '为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展',
                  sertime: '长久',
                  serphone: '见北京中海商务写字楼客户专享合作方案',
                  seradr: '北京市西城区复兴门内大街156号A座首层',
                  discont: '见北京中海商务写字楼客户专享合作方案',
                  zs: true
                },{
                  "classify": "职场办公",
                  "project": "信息化搭建",
                  "sertime": "长久",
                  "title": "北京通达三季科技有限公司",
                  "sercon": "提供网络搭接及维护服务",
                  "oflshop": "北京通达三季科技有限公司",
                  "discont": ""
                },{
                  "classify": "职场办公",
                  "project": "电脑维修",
                  "sertime": "长久",
                  "title": "北京通达三季科技有限公司",
                  "sercon": "提供网络设备搭接及维护服务",
                  "oflshop": "北京通达三季科技有限公司",
                  "discont": ""
                }
              ],
            },
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "舞蹈培训",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "北舞星空流行舞蹈培训中心",
                  "sercon": "各类舞蹈培训",
                  "oflshop": "北舞星空流行舞蹈培训中心",
                  "discont": "享受专属优惠"
                },{
                  "classify": "服饰美容",
                  "project": "健康咨询",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "康乐家园俱乐部",
                  "sercon": "提供血压、血糖等各项身体指标检测，提供解决方案",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "cake boss蛋糕",
                  "sercon": "网红蛋糕定制、罐装蛋糕、纸杯蛋糕等",
                  "oflshop": "cake boss蛋糕老板",
                  "discont": "享受专属优惠"
                },{
                  "classify": "餐饮服务",
                  "project": "定制蛋糕",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "维尔纳斯蛋糕",
                  "sercon": "蛋糕定制、甜点定制",
                  "oflshop": "维尔纳斯意大利手工艺蛋糕",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "石景山投促局、古城街道办事处",
                  "sercon": "深度了解企业的相关扶持政策，协助企业进行相关申报资料筹备",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "中海云商",
                  "sercon": "提供楼内企业人力帮办",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "北京城坤筑洁生物科技有限公司",
                  "sercon": "日常保洁，消杀服务。",
                  "oflshop": "北京城坤筑洁生物科技有限公司",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "北京盛芳润雅花卉有限公司",
                  "sercon": "办公室绿化园艺服务",
                  "oflshop": "北京盛芳润雅花卉有限公司",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "北京瑞祥佳艺建筑装饰工程有限公司",
                  "sercon": "空间设计、施工建造、软装服务全流程定制",
                  "oflshop": "北京瑞祥佳艺建筑装饰工程有限公司",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "专属车位预留、酒店预订、形象岗迎宾、专车接送。",
                  "oflshop": "中海物业",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "国泰饭店",
                  "sercon": "搭接楼内企业国泰饭店联系",
                  "oflshop": "国泰饭店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "国泰饭店、OFFICEZIP",
                  "sercon": "提供会务空间与服务的定制",
                  "oflshop": "国泰饭店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "定制茶歇会、酒会party等餐饮活动服务",
                  "oflshop": "OFFICEZIP",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "OFFICEZIP",
                  "sercon": "开放空置房源，提供其他地区企业分散办公；提供楼内企业会议室服务",
                  "oflshop": "OFFICEZIP",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "丰巢、顺丰",
                  "sercon": "上门代收代发公司、个人快递，安全可靠。",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "自助洗车",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "爱喜猫自助洗车",
                  "sercon": "自助洗车",
                  "oflshop": "爱喜猫自助洗车",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "鲜花定制",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "馨花语商贸有限公司",
                  "sercon": "鲜花定制",
                  "oflshop": "馨花语花卉",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        },
      ],
      tj: [
        {
          img: tj_zhgc,
          name: 'tj_zhgc',
          tel: '022-2422 6677',
          detailimg: tj_top1,
          sertel: '022-2422 6677',
          data: [
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "西装定制",
                  "sertime": "长久",
                  "title": "维纳西装定制",
                  "sercon": "个性化的高端西装定制服务",
                  "oflshop": "维纳西装定制",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "花里咖啡",
                  "sertime": "长久",
                  "title": "花里咖啡",
                  "sercon": "咖啡休闲",
                  "oflshop": "花里咖啡",
                  "discont": "享受专属优惠"
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "天津市和平区沐尔鲜花店",
                  "sercon": "可为租户提供绿植鲜花租摆服务",
                  "oflshop": "天津市和平区沐尔鲜花店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "康莱德酒店",
                  "sercon": "协议价格",
                  "oflshop": "康莱德酒店",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "公关活动",
                  "sertime": "长久",
                  "title": "天津闱墨文化传播有限公司",
                  "sercon": "应租户需求提供美陈、各种大小活动",
                  "oflshop": "天津闱墨文化传播有限公司",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "漫恩文化传播有限公司",
                  "sercon": "提供咖啡、糕点、鲜花",
                  "oflshop": "漫恩文化传播有限公司",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "团建拓展",
                  "sertime": "长久",
                  "title": "天津闱墨文化传播有限公司",
                  "sercon": "提供各类活动服务",
                  "oflshop": "天津闱墨文化传播有限公司",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "永丰盛世文化传播有限公司",
                  "sercon": "可应租户需求提供各类礼品定制服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "穆诺洗衣馆",
                  "sercon": "一周提供两次上门取送衣服，并享有折扣",
                  "oflshop": "穆诺洗衣馆",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        },
        {
          img: tj_zhcfzx,
          name: 'tj_zhcfzx',
          tel: '022-5995 6688',
          detailimg: tj_top2,
          sertel: '022-5995 6688',
          data: [
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "美容、美甲",
                  "sertime": "长久",
                  "title": "天津市河西区明远美容美体店",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "明远·NDIANA肌肤管理中心",
                  "discont": ""
                },{
                  "classify": "服饰美容",
                  "project": "美发",
                  "sertime": "长久",
                  "title": "天津市河西区艺阁美容美发中心",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "米娜造型",
                  "discont": ""
                },{
                  "classify": "服饰美容",
                  "project": "健身",
                  "sertime": "长久",
                  "title": "吉健身、塑来健身",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "吉健身",
                  "discont": ""
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "花里咖啡",
                  "sertime": "长久",
                  "title": "花里咖啡",
                  "sercon": "咖啡休闲",
                  "oflshop": "花里咖啡",
                  "discont": "享受专属优惠"
                },{
                  "classify": "餐饮服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "漫恩文化传播有限公司",
                  "sercon": "楼内客户享价格优惠",
                  "oflshop": "漫恩文化传播",
                  "discont": ""
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "河西区商务局",
                  "sercon": "提供实时政策解读",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "海纳万商",
                  "sercon": "收费提供保洁相关及客户入室服务",
                  "oflshop": "中海物业",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "天津市和平区沐尔鲜花店",
                  "sercon": "绿植鲜花等服务",
                  "oflshop": "天津市和平区沐尔鲜花店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "晨光",
                  "sercon": "办公用品采购",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "海纳万商",
                  "sercon": "楼内车位预留、形象岗迎宾、接待",
                  "oflshop": "中海物业",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "天津伯派樂智能酒店",
                  "sercon": "价格优惠",
                  "oflshop": "天津伯派樂智能酒店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "法务咨询",
                  "sertime": "长久",
                  "title": "天津市律师协会",
                  "sercon": "免费提供基础法律问题的解答",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "金融服务",
                  "sertime": "长久",
                  "title": "上海银行",
                  "sercon": "可为由需求的企业提供上门定制服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "漫恩文化传播有限公司",
                  "sercon": "简单的礼品定制",
                  "oflshop": "漫恩文化传播",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "顺丰",
                  "sercon": "上门快递收发服务",
                  "oflshop": "顺丰速运",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "UCC国际洗衣",
                  "sercon": "上门收送、价格优惠",
                  "oflshop": "UCC国际洗衣",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "洗车",
                  "sertime": "长久",
                  "title": "北京易车生活汽车服务连锁有限公司",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "易车生活",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "酒水批发",
                  "sertime": "长久",
                  "title": "拂礼兰卡酌象（天津）科技发展有限公司",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "酌象进口酒水体验馆",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "滴滴出行",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "西装定制",
                  "sertime": "长久",
                  "title": "维纳西装定制",
                  "sercon": "个性化的高端西装定制服务",
                  "oflshop": "维纳西装定制",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        },
        {
          img: tj_zhds,
          name: 'tj_zhds',
          tel: '022-5807 5888',
          detailimg: tj_top3,
          sertel: '022-5807 5888',
          data: [
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "美容、美甲",
                  "sertime": "长久",
                  "title": "天津市河西区明远美容美体店",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "明远·NDIANA肌肤管理中心",
                  "discont": ""
                },{
                  "classify": "服饰美容",
                  "project": "美发",
                  "sertime": "长久",
                  "title": "天津市河西区艺阁美容美发中心",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "米娜造型",
                  "discont": ""
                },{
                  "classify": "服饰美容",
                  "project": "健身",
                  "sertime": "长久",
                  "title": "吉健身、塑来健身",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "吉健身",
                  "discont": ""
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "花里咖啡",
                  "sertime": "长久",
                  "title": "花里咖啡",
                  "sercon": "咖啡休闲",
                  "oflshop": "花里咖啡",
                  "discont": "享受专属优惠"
                },{
                  "classify": "餐饮服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "漫恩文化传播有限公司",
                  "sercon": "楼内客户享价格优惠",
                  "oflshop": "漫恩文化传播",
                  "discont": ""
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "河西区商务局",
                  "sercon": "提供实时政策解读",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "海纳万商",
                  "sercon": "收费提供保洁相关及客户入室服务",
                  "oflshop": "中海物业",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "天津市和平区沐尔鲜花店",
                  "sercon": "绿植鲜花等服务",
                  "oflshop": "天津市和平区沐尔鲜花店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "晨光",
                  "sercon": "办公用品采购",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "海纳万商",
                  "sercon": "楼内车位预留、形象岗迎宾、接待",
                  "oflshop": "中海物业",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "天津伯派樂智能酒店",
                  "sercon": "价格优惠",
                  "oflshop": "天津伯派樂智能酒店",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "法务咨询",
                  "sertime": "长久",
                  "title": "天津市律师协会",
                  "sercon": "免费提供基础法律问题的解答",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "金融服务",
                  "sertime": "长久",
                  "title": "上海银行",
                  "sercon": "可为由需求的企业提供上门定制服务",
                  "oflshop": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "漫恩文化传播有限公司",
                  "sercon": "简单的礼品定制",
                  "oflshop": "漫恩文化传播",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "顺丰",
                  "sercon": "上门快递收发服务",
                  "oflshop": "顺丰速运",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "UCC国际洗衣",
                  "sercon": "上门收送、价格优惠",
                  "oflshop": "UCC国际洗衣",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "洗车",
                  "sertime": "长久",
                  "title": "北京易车生活汽车服务连锁有限公司",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "易车生活",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "酒水批发",
                  "sertime": "长久",
                  "title": "拂礼兰卡酌象（天津）科技发展有限公司",
                  "sercon": "楼内客户持楼控卡享价格优惠",
                  "oflshop": "酌象进口酒水体验馆",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "滴滴出行",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "西装定制",
                  "sertime": "长久",
                  "title": "维纳西装定制",
                  "sercon": "个性化的高端西装定制服务",
                  "oflshop": "维纳西装定制",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        },
      ],
      ty: [
        {
          img: ty_zhgjzx,
          name: 'ty_zhgjzx',
          tel: '0351-8379 888',
          detailimg: ty_top1,
          sertel: '0351-837 9888',
          data: [
            {
              icon: icon,
              data:[
                {
                  "classify": "服饰美容",
                  "project": "健康（含健身）",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "太原市万柏林区源途健身俱乐部",
                  "sercon": "",
                  "discont": "租户协议价"
                }
              ],
            },
            {
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "餐饮",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "太原锄禾园餐饮服务有限公司",
                  "sercon": "",
                  "discont": "楼内租户用餐享九五折"
                },{
                  "classify": "餐饮服务",
                  "project": "餐饮",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "太原市三晋饭庄有限公司晋品轩",
                  "sercon": "",
                  "discont": "楼内租户用餐享九五折"
                },{
                  "classify": "餐饮服务",
                  "project": "餐饮",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "太原市万柏林区恒岳春粗粮饺子馆",
                  "sercon": "",
                  "discont": "楼内租户用餐享九五折"
                }
              ],
            },
            {
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "太原市万柏林区促进楼宇经济发展领导组办公室",
                  "sercon": "万柏林区企业扶持政策、相关申报",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "山西方胜人力资源服务有限公司",
                  "sercon": "人力资源服务",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "提供日常保洁服务",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "增值收费服务，提供绿植供应商名录，包括绿植租摆设计与养护",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "择优推荐",
                  "sercon": "租赁单元设计装修",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "合作商择优推荐",
                  "sercon": "办公文具集采、印务耗材采购、办公设备租赁与购买。",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "专属车位预留、形象岗迎宾、专梯等候",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "中海系酒店/本地协议酒店预订",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "合作商择优推荐",
                  "sercon": "冷餐、下午茶定制",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "法务咨询",
                  "sertime": "长久",
                  "title": "君恒信和企业管理咨询有限公司、山西纵合横律师事务所、山西正磐律师事务所",
                  "sercon": "企业咨询、法务咨询",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "",
                  "sercon": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "discont": "享受专属优惠"
                },{
                  "classify": "行政服务",
                  "project": "酒店",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "山西丽华大酒店",
                  "sercon": "",
                  "discont": "租户协议价"
                },{
                  "classify": "行政服务",
                  "project": "酒店",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "太原市三晋酒店管理有限公司",
                  "sercon": "",
                  "discont": "租户协议价"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "综合",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "太原市万柏林区翠翠洗衣店",
                  "sercon": "",
                  "discont": "租户协议价"
                },{
                  "classify": "生活服务",
                  "project": "上门洗衣",
                  "sertime": "长久",
                  "title": "合作商择优推荐",
                  "sercon": "上门收送，专业洗涤",
                  "discont": "协议价"
                },{
                  "classify": "生活服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "",
                  "sercon": "开放租赁中心的会议中心",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        }
      ],
      qd: [
        {
          img: qd_zhds,
          name: 'qd_zhds',
          tel: '0532-6866 0777',
          detailimg: qd_top1,
          sertel: '0532-6866 0777',
          data: [
            {
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "青岛慕忆咖啡有限公司",
                  "sercon": "合作供应商资源青岛慕忆咖啡有限公司为中海租户提供会务空间与服务的定制，无优惠。",
                  "oflshop": "青岛慕忆咖啡有限公司",
                  "address": "青岛市市北区徐州北路180-1号",
                  "discont": ""
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "",
                  "sercon": "提供实时政策解读，免费",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "专业机构",
                  "sertime": "长久",
                  "title": "上海前锦众程人力资源有限公司青岛分公司",
                  "sercon": "借助楼内租户前锦众程人力资源有限公司资源，为企业提供提供整体解决方案，可以给予优惠需要商谈。",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "日常保洁服务，有优惠需要洽谈",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "",
                  "sercon": "绿植花卉租摆与养护，无优惠",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "中迅达装饰工程集团有限公司",
                  "sercon": "外部资源供应商中迅达装饰工程集团有限公司提供装修服务，可以给予优惠需要商谈。",
                  "oflshop": "中迅达装饰工程集团有限公司",
                  "address": "-",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "天瑞星空酒店",
                  "sercon": "合作供应商资源天瑞星空酒店为中海租户提供团购房服务，可以给予优惠商谈中。",
                  "oflshop": "天瑞星空酒店",
                  "address": "青岛市市北区延吉路76号",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "天瑞星空酒店",
                  "sercon": "合作供应商资源天瑞星空酒店为中海租户提供会务空间与服务的定制，可以给予优惠商谈中。",
                  "oflshop": "天瑞星空酒店",
                  "address": "青岛市市北区延吉路76号",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "团餐服务",
                  "sertime": "长久",
                  "title": "青岛晓能餐饮管理有限公司",
                  "sercon": "合作配餐公司资源为租户提供订餐服务，有优惠具体商谈中",
                  "oflshop": "青岛晓能餐饮管理有限公司",
                  "address": "青岛市市南区中商大厦",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "礼品定制",
                  "sertime": "长久",
                  "title": "奥美文化",
                  "sercon": "合作供应商资源奥美文化为中海租户提供礼品策划、创意、设计、定制、生产、配送等一站式礼品定制服务，有优惠需要洽谈。",
                  "oflshop": "奥美文化",
                  "address": "山东省崂山区科园经四路五号金贝特产业园4楼",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "address": "东亿国际传媒产业园演播大厅A座5层",
                  "discont": "享受专属优惠"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "",
                  "sercon": "为企业提供快递送货上楼，无优惠",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "address": "",
                  "discont": "享受专属优惠"
                },{
                  "classify": "生活服务",
                  "project": "滴滴出行",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "滴滴出行",
                  "sercon": "滴滴出行",
                  "oflshop": "",
                  "address": "",
                  "discont": "享受专属优惠"
                }
              ]
            }
          ]
        }
      ],
      jn: [
        {
          img: jn_zhgc,
          name: 'jn_zhgc',
          tel: '0531-5868 8888',
          detailimg: jn_top1,
          sertel: '0531-5868 8888',
          data: [
            {
              icon: master,
              data:[
                {
                  "classify": "职场办公",
                  "project": "硬件维修",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "提供每年3次的免费上门维修服务，超出部分按维修项目收费",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                }
              ],
            },{
              icon: epicure,
              data:[
                {
                  "classify": "餐饮服务",
                  "project": "茶歇服务",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "为重点客户及周年庆客户提供提供免费定制下午茶",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                }
              ],
            },{
              icon: ungrander,
              data:[
                {
                  "classify": "行政服务",
                  "project": "政策解析",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "政府相关政策咨询解读",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业保洁",
                  "sertime": "长久",
                  "title": "正歆集团",
                  "sercon": "提供收费地毯清洗等日常保洁及客户入室服务",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "绿植租摆",
                  "sertime": "长久",
                  "title": "济南缤纷花卉有限公司",
                  "sercon": "绿植花卉租摆与养护",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "企业装修",
                  "sertime": "长久",
                  "title": "意内雅",
                  "sercon": "提供收费的室内装修",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "办公用品采购",
                  "sertime": "长久",
                  "title": "得力",
                  "sercon": "提供协议价格的优质办公用品",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "贵宾接待",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "专属车位及专梯预留等",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": " 酒店预订",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "为中海租户提供本地协议商务酒店订房服务",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "空调清洗",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "于客户价值日为重点VIP客户进行定向空调进出风口清洗",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "活动场地",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "为企业提供收费的沙龙及会议场地定制化服务",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "法务咨询",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "为楼内企业提供有偿法律咨询服务",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "分散办公",
                  "sertime": "长久",
                  "title": "中海商务",
                  "sercon": "联合OFFICEZIP，对企业提供装修过渡期和分散办公服务，同时开放会议服务",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "福利定制",
                  "sertime": "长久",
                  "title": "亿百葩鲜",
                  "sercon": "联合环宇城进口超市，为持有中海广场工牌的租户提供全线产品9折优惠",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "行政服务",
                  "project": "家具定制",
                  "sertime": "长久",
                  "title": "诺梵（上海）系统科技股份有限公司北京分公司",
                  "sercon": "一、售后快速响应二、提供诺梵专属高效办公策略wps调研服务、空间解决方案。",
                  "oflshop": "诺梵家具定制",
                  "address": "东亿国际传媒产业园演播大厅A座5层",
                  "discont": "享受专属服务"
                }
              ],
            },
            {
              icon: artist,
              data:[
                {
                  "classify": "生活服务",
                  "project": "快递收发",
                  "sertime": "长久",
                  "title": "中海物业",
                  "sercon": "提供各快递公司的联系及上门取件服务",
                  "oflshop": "",
                  "address": "",
                  "discont": ""
                },{
                  "classify": "生活服务",
                  "project": "七夕交友",
                  "sertime": "2021年1月1日-2021年12月31日",
                  "title": "世纪佳缘",
                  "sercon": "婚恋交友",
                  "oflshop": "",
                  "address": "",
                  "discont": "享受专属服务"
                }
              ]
            }
          ]
        }
      ]
    };
  }
  componentDidMount=()=>{
    localStorage.removeItem("city");
    localStorage.removeItem("topImg");
    localStorage.removeItem("list");
  }
  onDetailgo=(obj)=>{
    let city = this.props.location.search.split("?city=")[1]
    localStorage.setItem("city", city);
    localStorage.setItem("topImg", obj.detailimg);
    localStorage.setItem("list", JSON.stringify(obj.data));
    localStorage.setItem("sertel", obj.sertel);
    if(obj.returnB){
      localStorage.setItem("returnB", true);
    }else{
      localStorage.setItem("returnB", false);
    }
    this.props.history.push({
      pathname: '/detail'
    })
  }

  render() {
    let city = this.props.location.search.split("?city=")[1]
    return (
      <div className={styles.projectBox}>
        <div>
          <div className={styles.textBox}>
            <div className={styles.lefttxt}>
              <Link to={{pathname:'/',state:{page:3}}}>
                <img className={styles.returny+" "+styles2.animated+" "+styles2.shake + " " +styles2.infinite} src={returnb} alt=""/>
              </Link>
              <img className={styles.topimg4} src={topimg4} alt=""/>
              <div className={styles.itembtnimg}>
                {this.state[city].map((el,i)=>{
                  return <div className={styles[city]} key={i}>
                      <img src={el.img} alt="" onClick={e=>this.onDetailgo(el)}/>
                      <a className={styles.tel} href={"tel: "+(el.tel).replace(/\s/g,"")}>{el.tel}</a>
                  </div>
                })}
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

export default connect(mapStateToProps)(Project)
