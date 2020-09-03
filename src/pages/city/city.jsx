import { connect } from 'dva';
import { Link } from "react-router-dom";
import * as React from 'react';
import returnIcon from '../../assets/return.png';
import bjTitle from '../../assets/bjtitle.png';
import tjTitle from '../../assets/tjtitle.png';
import qdTitle from '../../assets/qdtitle.png';
import tyTitle from '../../assets/tytitle.png';
import jnTitle from '../../assets/jntitle.png';
import bjItem1 from '../../assets/bjitem1.png';
import bjItem2 from '../../assets/bjitem2.png';
import bjItem3 from '../../assets/bjitem3.png';
import bjItem4 from '../../assets/bjitem4.png';
import bjItem5 from '../../assets/bjitem5.png';
import bjItem6 from '../../assets/bjitem6.png';
import tjItem1 from '../../assets/tjitem1.png';
import tjItem2 from '../../assets/tjitem2.png';
import tjItem3 from '../../assets/tjitem3.png';
import qdItem1 from '../../assets/qditem1.png';
import tyItem1 from '../../assets/tyitem1.png';
import jnItem1 from '../../assets/jnitem1.png';
import styles from './city.less';

class City extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      cityName: ''
    };
  }
  componentDidMount(){
    this.setState({
      cityName: this.props.location.state.cityName
    })
  }
  render() {
    const {cityName} = this.state
    return (
      <div className={styles.cityBox}>
        <Link to="/menu" className={styles.returnBtn}>
          <img className={styles.returnIcon} src={returnIcon} alt=""/>
        </Link>
        <div className={styles.cityTitle}>
          {cityName=="bj"&&<img src={bjTitle} alt=""/>}
          {cityName=="tj"&&<img src={tjTitle} alt=""/>}
          {cityName=="qd"&&<img src={qdTitle} alt=""/>}
          {cityName=="ty"&&<img src={tyTitle} alt=""/>}
          {cityName=="jn"&&<img src={jnTitle} alt=""/>}
        </div>
        <div className={styles.itemBox}>
          {cityName=="bj"&&
            <div className={styles.bjBox}>
              <Link to="/detail"><img src={bjItem1} alt=""/></Link>
              <Link to=""><img src={bjItem2} alt=""/></Link>
              <Link to=""><img src={bjItem3} alt=""/></Link>
              <Link to=""><img src={bjItem4} alt=""/></Link>
              <Link to=""><img src={bjItem5} alt=""/></Link>
              <Link to=""><img src={bjItem6} alt=""/></Link>
            </div>
          }
          {cityName=="tj"&&
            <div>
              <Link to=""><img src={tjItem1} alt=""/></Link>
              <Link to=""><img src={tjItem2} alt=""/></Link>
              <Link to=""><img src={tjItem3} alt=""/></Link>
            </div>
          }
          {cityName=="qd"&&
            <div>
              <Link to=""><img src={qdItem1} alt=""/></Link>
            </div>
          }
          {cityName=="ty"&&
            <div>
              <Link to=""><img src={tyItem1} alt=""/></Link>
            </div>
          }
          {cityName=="jn"&&
            <div>
              <Link to=""><img src={jnItem1} alt=""/></Link>
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(City)
