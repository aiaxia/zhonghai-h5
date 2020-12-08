import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import { Flex } from 'antd-mobile';
import styles from './zsdetail.less';
import returnb from '../../assets/returnb.png';
import zstbox from '../../assets/zstbox.png';
import table1 from '../../assets/table1.png';
import table2 from '../../assets/table2.png';
import table3 from '../../assets/table3.png';
import table4 from '../../assets/table4.png';
import table5 from '../../assets/table5.png';
import table6 from '../../assets/table6.png';
import table7 from '../../assets/table7.png';

class Zsdetail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      list: [
        {
          title: '一、贷款类产品',
          list: [
            {
              title: '（一）企业贷款',
              list: [
                {
                  title: '1.企业经营贷（适用于小微企业）',
                  connect: '联系人：田晓伟-<a href="tel:86493254">86493254</a>',
                  list: [
                    {
                      title: '（1）产品概况',
                      content: '企业经营贷是招商银行“闪电贷”平台上开发的用于满足入驻中海的小微企业主生产经营用途的纯线上贷款产品，最高金额50万元，纯信用无抵押，可自主支付。'
                    },
                    {
                      title: "（2）产品特征",
                      content: "足不出户线上申请，轻松解决小企业融资需求；<br />最快60秒完成审批，极速放款解生意燃眉之急；<br />7*24小时服务，随借随还，按日计息；<br />贷款进度实时查看，尽享招行更多融资在线服务。"
                    },
                    {
                      title: '（3）准入条件',
                      content: '入驻中海的小微企业主。'
                    },
                    {
                      title: '（4）产品要素',
                      content: '金额：额度最高50万元，具体以我行系统审批为准；<br />利率：年化利率最低5.76%，可实现千人千价，具体以我行系统审批为准。针对入驻中海的小微企业主，招行将定期举办利率优惠活动，2021年1月18日-22日可享受7折优惠利率（放款时间）；<br />期限：3-36个月；<br />还款方式：按月付息到期还款，等额还款；<br />支付方式：自主支付，即贷款审批通过后直接发放至借款人个人帐户。'
                    },
                    {
                      title: '（5）申请路径',
                      content: '建额：扫描专属二维码—跳转至招商银行App—完成登录及绑卡—点击借钱—申请额度—额度审批；<br />提款：登录招商银行App—点击我的贷款—立即借钱—输入贷款信息并确认—人脸识别等身份认证—贷款审批并发放。'
                    }
                  ]
                },
                {
                  title: '2.园企贷（适用于成长型企业)',
                  connect: '联系人：肖航-<a href="tel:86493072">86493072</a>',
                  list: [
                    {
                      title: '（1）产品介绍',
                      content: '聚焦信息技术、软件、云计算、人工智能、集成电路、生物医药、新能源、高端制造、节能环保、新材料、新经济等行业，针对注册或办公地址在北京地区的成长型企业，提供招商银行“企业APP”线上预授信额度测算及审批服务。'
                    },
                    {
                      title: '（2）产品特点',
                      content: '企业可在线快速、便捷完成额度测算，符合条件者，即可快速完成授信审批及放款；<br />信用贷款：提供最高500万元额度，无须抵质押物，实控人夫妇担保即可；<br />资金使用灵活，用途广泛；<br />费率：中海入驻客户最低可达3.8%。'
                    }
                  ]
                },
                {
                  title: '3.结算流量贷（适用于中小企业）',
                  connect: '联系人：肖航-<a href="tel:86493072">86493072</a>',
                  list: [
                    {
                      title: '（1）产品介绍',
                      content: '针对在北京分行有稳定结算流水的存量优质客户（经营稳定且成长性高，信用记录良好），结合企业有效结算回款（剔除客户同名，关联企业，股东划转等回款），打造的小额线上化的融资产品，客户可以实现线上提款，自主支付。'
                    },
                    {
                      title: '（2）产品特点',
                      content: '信用贷款：提供最高200万元的额度且额度可循环，额度有效期为一年。无须抵质押物，实控人夫妇担保即可；<br/>客户可通过企业网银、企业APP等线上自助提款；<br />采用自主支付的方式，计息按照实际提用金额按日计息，按月计息；<br />费率：中海入驻客户最低可达3.8%。'
                    }
                  ]
                },
                {
                  title: '4.招抵快贷（适用于中小企业）',
                  connect: '联系人：肖航-<a href="tel:86493072">86493072</a>',
                  list: [
                    {
                      title: '（1）产品介绍',
                      content: '“招抵快贷”是一款针对中小企业推出的，抵押物为实控人本区域内居住用房的，可帮助企业资金周转运营的小额便捷抵押贷款产品。申请方式便捷，资金使用灵活，用途广泛。'
                    },
                    {
                      title: '（2）产品特点',
                      content: '抵押率高：140平米内住宅项目抵押率最高可达到8成，高于传统抵押贷；<br/>业务流程简便：企业客户快速完成注册，业务流程及审批手续便捷高效；<br />额度较高：额度最高可达到2000万元；<br />费率：中海入驻客户最低可达3.8%。'
                    }
                  ]
                }
              ]
            },
            {
              title: '（二）员工消费贷（适用于各类企业）',
              connect: '联系人：田晓伟-<a href="tel:86493254">86493254</a>',
              list: [
                {
                  title: '1.产品概况',
                  content: '中海企业员工消费贷是招商银行推出的一款纯线上，无抵押的消费信用贷款产品，仅向招行准入企业的正式员工提供融资服务，满足客户购车、装修、购物、旅游等需求，额度最高30万元，不使用不收费。'
                },
                {
                  title: '2.产品特征',
                  list: [
                    {
                      content: '（1）在线办理：申请、审批、放款全部在手机银行线上完成； '
                    },
                    {
                      content: '（2）办理简单：全线上申请，无需任何资料，流程简便；'
                    },
                    {
                      content: '（3）审批快捷：最快在线60秒完成审批；'
                    },
                    {
                      content: '（4）随借随还：24小时手机银行借款、还款，利息按天计算。'
                    }
                  ]
                },
                {
                  title: '3.准入条件',
                  content: '入驻中海的优质企业正式员工，主要包含大型央企、国企以及招行认定的其他优质企业。'
                },
                {
                  title: '4.产品要素',
                  list: [
                    {
                      content: '（1）授信额度：最高30万元（20万元以上需客户经理上门办理）。'
                    },
                    {
                      content: '（2）贷款利率：年利率最低5.76%。'
                    },
                    {
                      content: '针对入驻中海的优质企业，招行将定期举办利率优惠活动，近期活动如下：',
                    },
                    {
                      content: '成功获取额度的客户将于成功获取额度当日获得一张8折利率折扣券，利率折扣券有效期为接收到优惠券之日起30天有效。2021年1月18日-23日可享受7折优惠利率（具体活动细则另行发布）。',
                    },
                    {
                      content: '（3）贷款期限：贷款期限最长为36个月，可随时提前还款。',
                    },
                    {
                      content: '（4）还款方式：按月付息到期还款，等额还款。'
                    },
                  ]
                },
                {
                  title: '5.申请路径',
                  list: [
                    {
                      content: '（1）建额：扫描企业专属二维码-跳转至招商银行App-完成登录及绑卡-填写客户基本信息-额度预审批-客户经理采集证件、公积金/社保缴存记录-电话核实-额度审批',
                    },
                    {
                      content: '（2）提款：登录招商银行App-点击我的贷款-立即借钱-输入贷款信息并确认-人脸识别等身份认证-贷款审批并发放'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '二、工资类产品',
          connect: '联系人：尹逊雅-<a href="tel:86493101">86493101</a>',
          content: '招商银行薪资代发产品薪福通，为企业提供各类薪酬福利款项的数字化代发服务，针对中海商业旗下入驻企业及中海商业，均提供定制化服务。',
          list: [
            {
              title: '（一）中海入驻企业服务方案（适用于各类企业）',
              list: [
                {
                  title: '1.企业服务方案',
                  list: [
                    {
                      title: '（1）免费规划数字薪酬代发方案',
                      content: '支持实时为员工开立电子工资卡（I类），从在线开户到发薪入账当天即可完成。支持预约定时代发，灵活设置到账时间。支持定制集团代发、提现代发、联动代发方案。'
                    },
                    {
                      title: '（2）免费提供人事管理服务',
                      content: '员工管理：花名册维护，入、转、调、离管理，人事合同管理；<br />电子工资单：支持自定义薪资条目，针对不同员工展示不同薪资条目；<br />线上一键开卡发卡、线下进企辅助服务。'
                    },
                    {
                      title: '（3）免费提供个税管理服务',
                      content: "个税专项附加扣除收集与申报、算税、报税、缴税全流程服务；<br />使用招行云服务安全快捷，支持多税号/多经营地统一单主机管理、多批次算税，免费提供个税业务标准API接口，实现与企业内部系统互联。"
                    },
                    {
                      title: '（4）免费提供数字化财务管理平台',
                      content: '为企业提供标准的财务核算系统，包括财务报表、凭证管理、账簿管理、期末处理等功能。为代记账公司提供更加专业便捷的财务管理体验。提供智能费控方案，为企业及员工提供线上差旅和报销的申请与审批、机酒预订平台。为企业提供发票归纳整理、发票真伪校验、发票状态监控等数字化发票管理服务。数字化收缴党（团）费、物业费、校园缴费、慈善捐款等各类费用，效率倍增。'
                    },
                    {
                      title: '（5）协助企业建立弹性福利体系',
                      content: '为企业提供具有商城、体检、团险、年金等多种福利形式的弹性福利平台。多种福利，一站采购，提供正规福利采购发票，支持采用“保证金”制度，分批支付，缓解现金流压力。'
                    },
                    {
                      title: '（6）协助搭建智慧党建平台',
                      content: '协助搭建党组织、党员、党委工作、组织生活管理平台，及时对党务工作进行智能提醒，摆脱党建手册依赖，通过图形图表实时展示各党组织、党员的相关数据统计与分析，对组织和党员的行为活动进行存证，数据不可篡改，历史可溯。'
                    }
                  ]
                },
                {
                  title: '2.员工服务方案',
                  list: [
                    {
                      title: '（1）提供尊享财富产品',
                      content: '对于中海入驻企业的我行代发工资企业员工提供10款专属尊享财富产品。'
                    },
                    {
                      title: '（2）提供专属内购活动',
                      content: '为中海入驻企业的招行工资卡客户提供超值优质内购商品。'
                    },
                    {
                      title: '（3）提供专属信用贷款 ',
                      content: '位中海入驻企业提供尊享优惠利率，随借随还，不提款不计息。'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '三、公司财富管理类产品',
          connect: '联系人：桂斯苑-<a href="tel:66428512">66428512</a>',
          content: '（一）现金管理类产品（使用于各类企业）<br />现金管理类理财产品及公募货币基金均仅投资于货币市场工具，每个交易日均可申购赎回，具有高流动性。因此，现金管理类产品能够有效帮助企业进行日常流动性资金的管理。我行现金管理类理财产品及代销货币基金产品推荐如下：',
          list: [
            {
              title: '1.朝招金、日日鑫理财产品',
              content: '<img src='+table1+' />产品特点：高流动性，工作日可申赎，实时或第二日可到账使用。主要投资于银行存款、国债、政策性金融债、央行票据、银行间及交易所债券等固定收益类金融资产，摊余成本法估值，风险评级为PR2稳健型。'
            },
            {
              title: '2.步步生金理财产品',
              content: '<img src='+table2+' />步步生金8699为我行发行的阶梯收益型理财产品，不同持有期限对应理财收益不同。近期，步步生金8699各持有区间年化收益如下：<img src='+table3+' />产品特点：灵活性强，持有时间越长收益率越高，工作日可申赎，当天到账。投资于银行存款、国债、政策性金融债、央行票据、银行间及交易所债券等固定收益类金融资产，摊余成本法估值，风险评级为PR2稳健型。'
            },
            {
              title: '3. 货币基金',
              content: '<img src='+table4+' />产品特点：高流动性，T+1起息到账，每日分红。货币基金具有免征企业所得税的优势，成本法估值，净值增长较稳定。无申购赎回费用，无大额赎回限制。招行代销货币基金风险评级为PR1。<br />（二）固定期限固定收益类产品——“增利系列”理财产品（需满足监管对合格投资者的要求，即上年净资产需大于1000万的企业）<br />增利系列是招商银行/招银理财发行、管理的以同业信用资产打底，主打收益稳健、风险可控的符合资管新规的新产品。',
              list: [
                {
                  title: '1.产品主要特点',
                  content: '（1）底层资产以同业信用为主，资产风险较低；<br />（2）产品资产期限匹配，无市价波动风险。<br />（3）期限灵活，从3个月-1年均可定制，可精确到天。'
                },
                {
                  title: '2. 底层准入标准',
                  content: '我行内部评级BBB-以上的优质金融机构主体，覆盖范围一般仅限于各类金融机构的前15%排名机构。以同业借款准入范围为例，全行业我司准入名单仅38家。'
                },
                {
                  title: '3. 近期收益测算',
                  content: '根据近期市场资产价格，按上述投资策略下，预计各期限业绩比较基准为（具体以实际起息市场资产情况为准）：<img src='+table5+' />'
                },
                {
                  title: '4.专属福利',
                  content: '对于中海入驻企业可优先预留额度。<br />（三）短期定开固定收益类产品（需满足监管对合格投资者的要求，即上年净资产需大于1000万的企业）<br />短期定开类产品兼顾收益与流动性，主要投资于现金类、固定收益类等债权类投资品种或债券型基金，通过管理人的主动管理能力，以久期、杠杆、信用挖掘等策略获取债券投资收益。该类产品收益率在4%左右。<img src='+table6+' />'
                },
                {
                  title: '1.业务介绍',
                  content: '招商银行对公代销信托是通过融资方案产品化的方式，与总行准入名单内的信托公司合作，利用稀缺信托牌照资源和信托公司对于非标项目的主动管理能力，将总、分行战略客户的优质非标资产设计成为符合对公代销风控要求、收益更具优势的投资产品，从而丰富对公财富管理客户的投资选择。'
                },
                {
                  title: '2. 产品特点',
                  list: [
                    {
                      title: '（1）期限灵活',
                      content: '招商银行对公代销产品在发行方式上，采用符合外部监管要求的机构合格投资者之间进行信托受益权转让的形式，可通过企业网银实现批量转让。因此，产品期限既可以根据转让周期设置，也可以根据底层融资期限发行，实际存续期限主要集中在3-6个月中短期，以及6-12个月中长期，可匹配对公客户各期限投资需求进行定制。'
                    },
                    {
                      title: '（2）收益稳健',
                      content: '当前市场利率维持下行趋势，将带来投资收益普降。与此同时，资管新规过渡期已步入倒计时阶段，常规理财产品规模压降进程加快。在多种因素叠加下，代销信托产品优势明显：产品为私募发行，采用成本法估值，非净值法估值浮动报价；产品收益水平较同期限常规理财产品高100-200bps；在存续期内，产品可按季付息，形成稳定资金回流，可有效承接对公客户的固定期限产品投资需求。<br />近期产品参考收益水平<img src='+table7+' />'
                    },
                    {
                      title: '（3）风控严格',
                      content: '产品经合作机构及招行双重审批，建立了项目发起、审批、销售、投后的全流程风险管理机制。资产端聚焦招行总分战略客户，与集团层面开展合作，从根本上严控实质风险。截至目前，招商银行发行的对公代销信托产品，都按期达到业绩基准，未出现负收益、零收益、以及延期兑付情况。'
                    }
                  ]
                },
                {
                  title: '3.专属福利',
                  content: '对于中海入驻企业可优先预留额度。'
                }
              ]
            }
          ]
        },
        {
          title: '四、系统类产品',
          list: [
            {
              title: '（一）企业APP（适用于中小企业）',
              connect: '联系人：刘娟-<a href="tel:66428792">66428792</a>',
              list: [
                {
                  title: '1.产品介绍',
                  content: '企业APP是从用户视角触发，以金融与非金融全场景服务的思维，利用Fintech新兴科技，全新构建的企业客户一站式移动服务平台。'
                },
                {
                  title: '2.产品特点',
                  content: '（1）能够支持移动全场景免key支付交易方式；<br />（2）具备多种便捷的金融服务，包括各项银行业务信息查询、支付结算、政务服务、投资理财、移动柜台、国际业务、员企服务、票据管家等为客户资金的增值提供更多选择；<br />（3）可基于API开放体系推出小程序、移动API支付及云直连三项微服务解决方案，支持企业用户基于自身需求快速开展对接、部署及迭代；<br />（4）针对中海入驻企业，可给予移动支付手续费5折优惠。'
                }
              ]
            },
            {
              title: '（二）企业现金管理平台（适用于大中企业）',
              connect: '联系人：刘娟-<a href="tel:66428792">66428792</a>',
              list: [
                {
                  title: '1.产品介绍',
                  content: '“跨银行现金管理平台”是招商银行针对跨国公司、集团企业等客户资金管理需要，融合招行在现金管理领域的专业优势和成熟经验，倾力打造的专业财资管理系统。自2007年首次推出，历经10余年的持续创新，已升级至第七代CBS7。系统成功对接了国内主要的100多家银行和境外10000多家银行及非银金融机构，目前落地项目数累计三千余个，覆盖六万余家企业客户。'
                },
                {
                  title: '2.面向客户群体',
                  content: '（1）具有如下特点之一的大中型集团企业：跨地区跨行业经营、与多家银行建立业务往来、有跨境资金管理需求、财务管理体系复杂、手工操作繁杂、预算与资金结算脱节、规模不断扩大、成员机构差异性大；<br/>（2）对“资金监控”、“内部管理”、“清分清算”、“财务对账”等场景存在需求的客户；<br/>（3）具有账户体系复杂、账户数量众多，对头寸调拨的时效和灵活性要求高等特点的非银同业客户；<br/>（4）信息化建设和财资规范化管理日益迫切，在财资管理领域细分场景有SaaS服务应用需求的中小成长型客户。'
                },
                {
                  title: '3.费率优惠',
                  content: '对于中海入驻的优质客户，可享受CBS软件购置费、项目实施费、系统维护费和托管服务费的费率优惠。'
                }
              ]
            },
            {
              title: '（三）金融机构服务平台-招赢通（适用于金融机构）',
              connect: '联系人：段都昀-<a href="tel:66419912">66419912</a>',
              list:[
                {
                  title: '1.平台介绍',
                  content: '招赢通平台是招商银行面向境内外金融机构的互联网服务平台，旨在提升招商银行对各类机构客户的服务体验，依托金融科技手段实现机构间的优势互补、资源共享、力争打造为金融机构间的投资交易、资产经营、跨境合作的共享合作平台。目前覆盖板块包括招银资管、同业存款、公募基金、第三方资管及金融市场产品等，为会员提供便利选择。'
                },
                {
                  title: '2.平台优势',
                  content: '（1）安全体系完善<br />会员实行认证机制，确保信息准确；客户资金仅在其户名项下进行资金交易，所有操作为闭合回环，不涉及第三方转出。<br />（2）在线签约简单总对总签约符合监管要求，无需人工面签，省时高效。<br/>（3）快捷交易省时线上下单办理业务、高效快捷。支持线上办理同业存款、同业理财及第三方产品申赎等业务。'
                }
              ]
            },
            {
              title: '（四）企业股权激励管理系统（适用于创业公司）',
              connect: '联系人：刘娟-<a href="tel:66428792">66428792</a>',
              list: [
                {
                  title: '1.产品介绍',
                  content: '为企业提供一站式股权激励解决方案，从股权激励方案设计、搭建持股平台，通过股权激励管理系统进行期权发放、行权、回购等一系列的动态管理进行全生命周期服务。'
                },
                {
                  title: '2.目标客群',
                  content: '已经获得融资的科创企业，新经济企业，有核心人员需要股权激励和股权税务筹划的新动能行业客户。'
                },
                {
                  title: '3.优惠政策',
                  content: '对于中海入驻企业中在我行开立对公户的客户，补贴系统购置费。'
                }
              ]
            }
          ]
        },
        {
          title: '五、“一站式”服务',
          connect: '联系人：闫冬-<a href="tel:66426602">66426602</a>',
          list: [
            {
              title: '（一）专属客户经理上门服务',
              content: '针对中海写字楼内入驻企业客户，招商银行北京分行可根据客户需求，定期安排对公业务及零售业务客户经理上门服务，可实现业务答疑，部分业务现场办理，免去企业客户总是“跑网点”的烦恼，实现客户经理为企业一对一上门服务。<br />同时，除了上文中提到的各项产品及服务外，我行针对上市企业及新动能、新经济企业，有多样的个性化服务，且与同业相比具有较高优势。此外我行针对高净值客户的私人银行服务在国内也有非常大的影响力。如有任何想要了解的招行业务，专属客户经理都可上门进行讲解与服务。',
            },
            {
              title: '（二）绿色审批通道',
              content: '针对部分业务办理流程复杂，受理时间长的情况，我行可为中海写字楼内入驻企业安排绿色审批通道及专项服务人员。实现客户经理一对一指导业务流程，审批快速优先受理。'
            },
            {
              title: '（三）纳入我行“白名单”',
              list: [
                {
                  content:'我行将把中海入驻企业客户纳入我行“白名单”范畴，为其提供更加优惠的金融服务产品，解决企业客户融资难，融资贵的问题。',
                },
                {
                  content:'招商银行北京分行将以周到的“一站式”服务，高效解决企业资金周转、扩大经营以及企业员工大额消费等资金需求。',
                },{
                  content: '招商银行北京分行将竭诚为中海及中海商业旗下入驻企业提供周到的“一站式”服务，陪伴企业持续发展。'
                }
              ]
            }
          ]
        }
      ]
    };
  }
  componentDidMount=()=>{
  }

  render() {
    const {list} = this.state
    return (
      <div className={styles.zsdetailBox}>
        <img className={styles.return} src={returnb} alt=""/>
        <div className={styles.titleBox}>
          <img src={zstbox} alt=""/>
          <div>
            中海商务联合招商银行北京分行，为北京中海商务旗下写字楼入驻企业提供专属金融产品及服务，帮助企业实现财富增长，从融资到融智，覆盖企业全生命周期，为企业提供“一站式”服务，伴随企业持续发展。
          </div>
        </div>
        <div className={styles.main}>
          {list.map(el=>{
            return <div className={styles.contentBox}>
                    <div>
                      <div className={styles.content}>
                        <div className={styles.title}>{el.title}</div>
                        <div className={styles.connect} dangerouslySetInnerHTML={{'__html':el.connect}}></div>
                        <div dangerouslySetInnerHTML={{'__html':el.content}}></div>
                        <div>
                          {el.list&&el.list.map(el2=>{
                            return <div className={styles.firstStle}>
                              <div className={styles.title2}>{el2.title}</div>
                              <div className={styles.connect2} dangerouslySetInnerHTML={{'__html':el2.connect}}></div>
                              <div className={styles.content2} dangerouslySetInnerHTML={{'__html':el2.content}}></div>
                              <div>
                                {
                                  el2.list&&el2.list.map(el3=>{
                                    return <div className={styles.secBox}>
                                      <div className={styles.title3}>{el3.title}</div>
                                      <div className={styles.connect3} dangerouslySetInnerHTML={{'__html':el3.connect}}></div>
                                      <div className={styles.content3} dangerouslySetInnerHTML={{'__html':el3.content}}></div>
                                      <div className={styles.box4}>
                                        {el3.list&&el3.list.map(el4=>{
                                          return <div className={styles.thiBox}>
                                            <div className={styles.title4}>{el4.title}</div>
                                            <div className={styles.connect4} dangerouslySetInnerHTML={{'__html':el4.connect}}></div>
                                            <div className={styles.content4} dangerouslySetInnerHTML={{'__html':el4.content}}></div>
                                          </div>
                                        })}
                                      </div>
                                    </div>
                                  })
                                }
                              </div>
                            </div>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Zsdetail)
