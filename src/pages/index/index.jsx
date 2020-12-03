import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';
import styles2 from './animate.less';
import main from '../../assets/main.png'
import slip from '../../assets/slip.png'
import lefttext from '../../assets/lefttext.png'
import rightbtn from '../../assets/rightbtn.png'
import indextext from '../../assets/indextext.png'
import topimg from '../../assets/topimg.png'
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
    return (
      <div className={styles.homeBox}>
        <div className={styles.indexBox}>
          <Logobox />
          <div className={styles.mainImg}>
            <div className={styles.main} >
              <img src={main} alt=""/>
            </div>
            <Flex className={styles.btnimg}>
              <Flex.Item className={styles.leftLogo}><img src={lefttext} /></Flex.Item>
              <Flex.Item className={styles.rightLogo}><img src={rightbtn} /></Flex.Item>
            </Flex>
          </div>
          <div className={styles.botImg}>
            <img src={indextext} alt=""/>
          </div>
          <img className={styles2.animated + " "+styles2.shake + " " +styles2.infinite} src={slip} alt=""/>
        </div>
        <div className={styles.introduce}>
          <img className={styles.topimg} src={topimg} alt=""/>
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
