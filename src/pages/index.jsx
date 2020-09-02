import { connect } from 'dva';
import PropTypes from 'prop-types';
import * as React from 'react';

@connect(({ loading }) => ({ loading }))
class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  render() {
    return (
      <div>
        <div>
          jfldjflkd
        </div>
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
