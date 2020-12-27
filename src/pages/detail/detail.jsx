import { connect } from 'dva';
import * as React from 'react';
import styles from './detail.less';
import styles2 from '../../components/animate.less';
import bj_anhgjzx_topmain from '../../assets/bj_anhgjzx_topmain.png';
import bj_zhdcgc_topmain from '../../assets/bj_zhdcgc_topmain.png';
import bj_zhds_topmain from '../../assets/bj_zhds_topmain.png';
import bj_zhgc_topmain from '../../assets/bj_zhgc_topmain.png';
import bj_zhgjzx_topmain from '../../assets/bj_zhgjzx_topmain.png';
import bj_zjcfgjzx_topmain from '../../assets/bj_zjcfgjzx_topmain.png';
import returnBtn from '../../assets/return.png';
import master from '../../assets/master.png';
import icon from '../../assets/icon.png';
import epicure from '../../assets/epicure.png';
import ungrander from '../../assets/ungrander.png';
import artist from '../../assets/artist.png';
import showmore from '../../assets/showmore.png';
import shrink from '../../assets/shrink.png';
import topimg from '../../assets/top.png';
import { Link } from 'dva/router';

class Detail extends React.PureComponent {
  constructor (props) {
    super(props);
    let cityarea = this.props.location.search.split("?city=")[1]
    let city = cityarea.split('&area=')[0]
    let area = cityarea.split('&area=')[1]
    console.log('city',city)
    console.log('area',area)
    this.state={
      show: false,
      list: [
        {
          topmain: ''
        }
      ]
    };
  }
  componentDidMount=()=>{
  }
  showAll=()=>{
    this.setState({
      show: true
    })
  }
  hiddenAll=()=>{
    this.setState({
      show: false
    })
  }
  returnTop=()=>{
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }
  onHiddenshow=()=>{
    const {show} = this.state
    this.setState({
      show: !show
    })
  }
  render() {
    let cityarea = this.props.location.search.split("?city=")[1]
    let city = cityarea.split('&area=')[0]
    let area = cityarea.split('&area=')[1]
    const {show} = this.state
    return (
      <div className={styles.detailBox}>
        <div className={styles.topmainBox}>
          <img className={styles.topmain} src={bj_anhgjzx_topmain} alt=""/>
          <Link to={"/project?city="+city}>
            <img className={styles.returnw+" "+styles2.animated+" "+styles.slip + " "+styles2.shake + " " +styles2.infinite} src={returnBtn} alt=""/>
          </Link>
        </div>
        <div className={styles.mainBox}>
          <ul>
            <li>
              <img src={master} alt="" onClick={e=>this.onHiddenshow()} />
              {show?
              <div className={styles.downBox}>
                <div className={styles.itemBox}>
                  <p>招商银行北京分行</p>
                  <div className={styles.main}>
                      <div>
                        <div>服务内容：</div>
                        <div>为北京中海商务写字楼客户提供专属金融产品及服务，提供企业经营贷款、企业财富管理等全身名周期服务，伴随企业持续发展</div>
                      </div>
                      <div>
                        <div>服务时间：</div>
                        <div>长久</div>
                      </div>
                      <div>
                        <div>服务电话：</div>
                        <div><Link to="/zsdetail">见北京中海商务写字楼客户专享合作方案</Link></div>
                      </div>
                      <div>
                        <div>服务地址：</div>
                        <div>北京市西城区复兴门内大街156号A座首层</div>
                      </div>
                      <div>
                        <div>优惠折扣：</div>
                        <div><Link to="/zsdetail">见北京中海商务写字楼客户专享合作方案</Link></div>
                      </div>
                  </div>
                </div>
                <div className={styles.itemBox}>
                  <p>CBD管委会</p>
                  <div className={styles.main}>
                      <div>
                        <div>服务内容：</div>
                        <div>积极对接CBD管委会，深度了解企业的相关扶持政策，协助企业进行相关申报资料筹备</div>
                      </div>
                      <div>
                        <div>服务时间：</div>
                        <div>长久</div>
                      </div>
                      <div>
                        <div>服务电话：</div>
                        <div><a href="tel:010-58780000">010-58780000</a></div>
                      </div>
                      <div>
                        <div>服务地址：</div>
                        <div>东大桥路8号SOHO尚都北塔A座</div>
                      </div>
                  </div>
                </div>
              </div>
              :''}
            </li>
            <li><img src={icon} alt=""/></li>
            <li><img src={epicure} alt=""/></li>
            <li><img src={ungrander} alt=""/></li>
            <li><img src={artist} alt=""/></li>
          </ul>
        </div>
        <div className={styles.opIcon}>
          <img src={showmore} onClick={e=>this.showAll()} alt=""/>
          <img src={shrink} onClick={e=>this.hiddenAll()} alt=""/>
          <img src={topimg} onClick={e=>this.returnTop()} alt=""/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Detail)
