import { connect } from 'dva';
import * as React from 'react';
import styles from './detail.less';

class Detail extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount=()=>{
  }

  render() {
    return (
      <div className={styles.detailBox}>
        <div>
          {/* <img src={} alt=""/> */}
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
