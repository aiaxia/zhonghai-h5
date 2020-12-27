import { connect } from 'dva';
import * as React from 'react';
import { Link } from 'dva/router';
import styles from './project.less';
import styles2 from '../../components/animate.less';
import returnb from '../../assets/returnb.png';
import topimg4 from '../../assets/topimg4.png';
import zhgc from '../../assets/zhgc.png';
import zhdcgc from '../../assets/zhdcgc.png';
import anzhgjzx from '../../assets/anzhgjzx.png';
import zj from '../../assets/zj.png';
import zhgjzxcgz from '../../assets/zhgjzxcgz.png';
import zhds from '../../assets/zhds.png';

class Project extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      bj: [
        {
          img: zhgc,
          tel: '010-5977 2083'
        },
        {
          img: zhdcgc,
          tel: '010-5783 7888'
        },
        {
          img: anzhgjzx,
          tel: '010-5704 0668'
        },
        {
          img: zj,
          tel: '010-5704 0668'
        },
        {
          img: zhgjzxcgz,
          tel: '010-6625 6188'
        },
        {
          img: zhds,
          tel: '010-5977 2888'
        },
      ]
    };
  }
  componentDidMount=()=>{
  }
  onDetailgo=()=>{
    this.props.history.push({
        pathname:'/detail'
    })
  }

  render() {
    const {bj} = this.state
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
                {bj.map((el,i)=>{
                  return <div key={i}>
                      <img src={el.img} alt="" onClick={e=>this.onDetailgo()}/>
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
