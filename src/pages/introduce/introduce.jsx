import { connect } from 'dva';
import * as React from 'react';
import styles from './introduce.less';
import styles2 from '../../components/animate.less';
import topimg from '../../assets/topimg.png';
import txt3 from '../../assets/txt3.png';
import duty from '../../assets/duty.png';
import slip from '../../assets/slip.png'
import returny from '../../assets/returny.png';
import returnw2 from '../../assets/returnw2.png';

class Introduce extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount=()=>{
  }
  lastpage=()=>{
    let linkhref = localStorage.getItem("linkhref")
    window.location.replace(linkhref+'?page=2')
  }
  nexpage=()=>{
    let linkhref = localStorage.getItem("linkhref")
    window.location.replace(linkhref+'?page=3')
  }

  render() {
    return (
      <div className={styles.introduce}>
        <div className={styles.secbot2}>
          <img className={styles.topimg} src={topimg} alt=""/>
          <img className={styles.returnw+" "+styles2.animated+" "+styles2.shake + " " +styles2.infinite} src={returnw2} onClick={e=>this.lastpage()} alt=""/>
          <div className={styles.textBox}>
            <div className={styles.lefttxt}>
              <img className={styles.returny} src={returny} alt=""/>
              <img className={styles.textimg} src={txt3} alt=""/>
              <img className={styles.dutyimg} src={duty} alt=""/>
            </div>
          </div>
          <img className={styles2.animated+" "+styles.slip + " "+styles2.shake + " " +styles2.infinite} onClick={e=>this.nexpage()} src={slip} alt=""/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Introduce)
