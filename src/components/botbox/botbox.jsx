import { connect } from 'dva';
import PropTypes from 'prop-types';
import * as React from 'react';
import $ from "jquery";
import "turn.js";
import slip from '../../assets/slip.png'
import indextext from '../../assets/indextext.png';
import text2 from '../../assets/text2.png';
import styles from './botbox.less';
import styles2 from '../../components/animate.less';
import { Link } from 'dva/router';

class Botbox extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }

  nexpage=()=>{
    $("#flipbook").turn("next");
  }
  render() {
    const {indexnum,returnPage} = this.props;
    return (
      <div className={styles.botBox}>
        <div className={styles.botImg+" "+(indexnum==1?styles.botimg2:'')}>
          {indexnum==1?
            <img src={indextext} alt=""/>
            :<img className={styles.text2} src={text2} alt=""/>
          }
        </div>
        {returnPage?
          <Link to={{pathname: '/', state:{page:3}}} className={styles2.animated + " "+styles2.shake + " " +styles2.infinite}><img className={indexnum==2?styles.slip:''} src={slip} alt=""/></Link>
          :
          <img className={indexnum==2?styles.slip:''} className={styles2.animated + " "+styles2.shake + " " +styles2.infinite} onClick={e=>this.nexpage()} src={slip} alt=""/>
        }
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
