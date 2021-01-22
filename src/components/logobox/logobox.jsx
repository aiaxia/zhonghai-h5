import { connect } from 'dva';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Flex } from 'antd-mobile';
import leftLogo from '../../assets/leftlogo.png'
import rightLogo from '../../assets/righttoplogo.png'
import styles from './logobox.less';

@connect(({ loading }) => ({ loading }))
class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  render() {
    return (
      <div className={styles.topBox}>
        <Flex>
          <Flex.Item className={styles.leftLogo}>
            <img src={leftLogo} />
          </Flex.Item>
          <Flex.Item className={styles.rightLogo}>
            <img src={rightLogo} />
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}

Index.propTypes = {
	dispatch: PropTypes.func,
	loading: PropTypes.object,
}
function mapStateToProps({index}) {
  return {
    index:index
  };
}

export default connect(mapStateToProps)(Index)
