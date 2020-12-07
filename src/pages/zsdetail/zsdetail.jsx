import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import { Flex } from 'antd-mobile';
import styles from './zsdetail.less';

class Zsdetail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount=()=>{
  }

  render() {
    return (
      <div className={styles.zsdetailBox}>
fdsjlfdjslj
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Zsdetail)
