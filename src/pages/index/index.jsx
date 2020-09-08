import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import styles from './index.less';
import mainImg from '../../assets/maintext.png'
import startBtn from '../../assets/startBtn.png'
import startBtn2 from '../../assets/startBtn2.png'
import indexrTxt from '../../assets/indexrtxt.png'
import Logobox from '../../components/logobox/logobox'

class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      checked: true
    };
  }
  componentWillUnmount=()=>{
    clearInterval(this.timeout)
  }
  showMenu=()=>{
    let t = this
    this.setState({
      checked: false
    })
    this.timeout = setTimeout(function(){
      t.props.history.push({
        pathname: "/menu"
      })
    },400)
  }

  render() {
    const {checked} = this.state
    return (
      <div className={styles.homeBox}>
        <Logobox />
        <div className={styles.mainImg}>
          <img src={mainImg} alt=""/>
        </div>
        <div className={styles.rtxt}>
          <img src={indexrTxt} alt=""/>
        </div>
        <div className={styles.startBtn} onClick={e=>this.showMenu()}>
          {checked?
          <img src={startBtn} alt=""/>:
          <img src={startBtn2} alt=""/>
          }
          {/* <Link to="/menu"><img src={startBtn} alt=""/></Link> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Index)
