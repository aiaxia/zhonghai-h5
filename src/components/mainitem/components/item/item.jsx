import { connect } from 'dva';
// import { Link } from "react-router-dom";
import { Link } from 'dva/router';
import plusImg from '../../../../assets/plus.png'
import reduceImg from '../../../../assets/reduce.png'
import * as React from 'react';
import styles from './item.less';

class Item extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      showmore: false
    };
  }
  componentDidMount=()=>{
    this.props.onRef(this)
  }
  showMore=(show)=>{
    console.log('show',show)
    this.setState({
      showmore: show
    })
  }
  showItemAll=(showAll)=>{
    console.log('showAll=====',showAll)
    console.log(this.child)
    this.setState({
      showmore: showAll
    })
  }
  render() {
    const {icon,title,detail} = this.props
    const {showmore} = this.state
    return (
      <div className={styles.itemBox}>
        <div className={styles.title}>
          <img className={styles.icon} src={icon} alt=""/>
          <span className={styles.text}>·{title}</span>
          {showmore?
            <img className={styles.showMore} onClick={e=>this.showMore(false)} src={reduceImg} alt=""/>:
            <img className={styles.showMore} onClick={e=>this.showMore(true)} src={plusImg} alt=""/>
          }
        </div>
        <div className={styles.main}>
          {showmore&&detail.map((el,i)=>{
            return <div key={i}>
              <p className={styles.mainTitle}>{el.title}</p>
              {el.sercon?
                <div className={styles.mainitem + " " +styles.clearfix}>
                  <div>服务内容：</div>
                  <div className={styles.maincon}>{el.sercon}</div>
                </div>
              :""}
              {el.sertime?
                <div className={styles.mainitem + " " +styles.clearfix}>
                  <div>服务时间：</div>
                  <div className={styles.maincon}>{el.sertime}</div>
                </div>
              :""}
              {el.serphone?
                <div className={styles.mainitem + " " +styles.clearfix}>
                  <div>服务电话：</div>
                  <div className={styles.maincon}>{el.serphone}</div>
                </div>
              :""}
              {el.seradr?
                <div className={styles.mainitem + " " +styles.clearfix}>
                  <div>服务地址：</div>
                  <div className={styles.maincon}>{el.seradr}</div>
                </div>
              :""}
              {el.oflshop?
                <div className={styles.mainitem + " " +styles.clearfix}>
                  <div>线下店铺：</div>
                  <div className={styles.maincon}>{el.oflshop}</div>
                </div>
              :""}
              {el.discont?
                <div className={styles.mainitem + " " +styles.clearfix}>
                  <span>优惠折扣：</span>
                  <span className={styles.maincon}>{el.discont}</span>
                </div>
              :""}
            </div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Item)
