import { connect } from 'dva';
import * as React from 'react';
import styles from './introduce.less';
import styles2 from '../../components/animate.less';
import topimg from '../../assets/topimg.png';
import txt3 from '../../assets/txt3.png';
import returny from '../../assets/returny.png';
import Botbox from '../../components/botbox/botbox';
import { Link } from 'dva/router';

class Introduce extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount=()=>{
  }

  render() {
    return (
      <div className={styles.introduceBox}>
        <img className={styles.topimg} src={topimg} alt=""/>
        <div className={styles.textBox}>
          <div className={styles.lefttxt}>
            <Link to={{pathname:'/',state:{page:2}}}><img className={styles.returny+" "+styles2.animated+" "+styles2.shake + " " +styles2.infinite} src={returny} alt=""/></Link>
            <img className={styles.textimg} src={txt3} alt=""/>
          </div>
        </div>
        <div className={styles.botbox}>
          <Botbox returnPage={3} indexnum={2} />
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
