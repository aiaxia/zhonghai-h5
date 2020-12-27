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

class Project extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      bj: [
        {
          img: bj_zhgc,
          name: 'bj_zhgc',
          tel: '010-5977 2083',
          detailimg: bj_zhgc_topmain
        },
        {
          img: bj_zhdcgc,
          name: 'bj_zhdcgc',
          tel: '010-5783 7888',
          detailimg: bj_zhdcgc_topmain
        },
        {
          img: bj_anzhgjzx,
          name: 'bj_anzhgjzx',
          tel: '010-5704 0668',
          detailimg: bj_anhgjzx_topmain
        },
        {
          img: bj_zj,
          name: 'bj_zj',
          tel: '010-5704 0668',
          detailimg: bj_zjcfgjzx_topmain,
          returnB: true
        },
        {
          img: bj_zhgjzxcgz,
          name: 'bj_zhgjzxcgz',
          tel: '010-6625 6188',
          detailimg: bj_zhgjzx_topmain
        },
        {
          img: bj_zhds,
          name: 'bj_zhds',
          tel: '010-5977 2888',
          detailimg: bj_zhds_topmain,
          returnB: true
        },
      ],
      tj: [
        {
          img: tj_zhgc,
          name: 'tj_zhgc',
          tel: '022-2422 6677',
          detailimg: tj_top1
        },
        {
          img: tj_zhcfzx,
          name: 'tj_zhcfzx',
          tel: '022-5995 6688',
          detailimg: tj_top2
        },
        {
          img: tj_zhds,
          name: 'tj_zhds',
          tel: '022-5807 5888',
          detailimg: tj_top3
        },
      ],
      ty: [
        {
          img: ty_zhgjzx,
          name: 'ty_zhgjzx',
          tel: '0351-8379 888',
          detailimg: ty_top1
        }
      ],
      qd: [
        {
          img: qd_zhds,
          name: 'qd_zhds',
          tel: '0532-6866 0777',
          detailimg: qd_top1
        }
      ],
      jn: [
        {
          img: jn_zhgc,
          name: 'jn_zhgc',
          tel: '0531-5868 8888',
          detailimg: jn_top1
        }
      ]
    };
  }
  componentDidMount=()=>{
  }
  onDetailgo=(obj)=>{
    let city = this.props.location.search.split("?city=")[1]
    localStorage.setItem("city", city);
    localStorage.setItem("topImg", obj.detailimg);
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
                      <a className={styles.tel} href={"tel:"+(el.tel).replace(/\s/g,"")}>{el.tel}</a>
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
