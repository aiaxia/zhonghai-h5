import { connect } from 'dva';
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './blank.less'
import "turn.js";

class Botbox extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      device_type: ''
    };
  }
  componentDidMount=()=>{
    this.getmobiletype()
  }
  getmobiletype=()=>{
    let device_type = navigator.userAgent;//获取userAgent信息
    console.log('device_type',device_type)
    // document.write(device_type);//打印到页面
    // let md = new MobileDetect(device_type);//初始化mobile-detect
    // let os = md.os();//获取系统
    // let model = "";
    // if (os == "iOS") {//ios系统的处理
    //   os = md.os() + md.version("iPhone");
    //   model = md.mobile();
    // } else if (os == "AndroidOS") {//Android系统的处理
    //   os = md.os() + md.version("Android");
    //   let sss = device_type.split(";");
    //   let i = sss.contains("Build/");
    //   if (i > -1) {
    //     model = sss[i].substring(0, sss[i].indexOf("Build/"));
    //   }
    // }
    this.setState({
      device_type: device_type
    })
    // console.log(os + "---" + model);//打印系统版本和手机型号
  }

  render() {
    return (
      <div className={styles.blankBox}>
        手机型号：------   {this.state.device_type}
      </div>
    )
  }
}

Botbox.propTypes = {
	dispatch: PropTypes.func,
	loading: PropTypes.object,
}
function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Botbox)
