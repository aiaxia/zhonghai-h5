import { connect } from 'dva';
import PropTypes from 'prop-types';
import * as React from 'react';
import $ from "jquery";
import "turn.js";
import slip from '../../assets/slip.png'
import indextext from '../../assets/indextext.png';
import text2 from '../../assets/text2.png';
import txt4 from '../../assets/txt4.png';
import styles from './botbox.less';
import styles2 from './animate.less';

@connect(({ loading }) => ({ loading }))
class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }

  nexpage=()=>{
    $("#flipbook").turn("next");
  }
  render() {
    const {indexnum,color} = this.props;
    console.log(color)
    return (
      <div className={styles.botBox}>
        <div className={styles.botImg+" "+(color?styles.bluebox:'')}>
          {indexnum==1?
            <img src={indextext} alt=""/>
            :(color?<img className={styles.text2} src={txt4} alt=""/>:<img className={styles.text2} src={text2} alt=""/>)
          }
        </div>
        {color?"":
          <img className={indexnum==2?styles.slip:''} className={styles2.animated + " "+styles2.shake + " " +styles2.infinite} onClick={e=>this.nexpage()} src={slip} alt=""/>
        }
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
