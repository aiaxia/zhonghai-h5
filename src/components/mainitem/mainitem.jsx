import { connect } from 'dva';
import * as React from 'react';
import styles from './mainitem.less';
import { Link } from 'dva/router';

class Mainitem extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      ifshowList: [false,false,false,false,false]
    };
  }
  componentDidMount(){
    this.props.onRef(this)
  }
  showAll=(showAll)=>{
    this.setState({
      ifshowList: [showAll,showAll,showAll,showAll,showAll]
    })
  }
  onRef = (ref) => {
    this.child = ref
  }
  showMore=(i)=>{
    const {ifshowList} = this.state
    let showlist  = ifshowList.concat([])
    showlist[i] = !showlist[i]
    this.setState({
      ifshowList: showlist
    })
  }
  onjump=()=>{
    let linkhref = localStorage.getItem("linkhref")
    window.location.replace(linkhref+'zsdetail')
  }
  render() {
    const {ifshowList} = this.state
    const {list} = this.props
    return (
      <div className={styles.mainitemBox}>
        {list&&list.map((el,i)=>{
          return <div key={i}>
            <div className={styles.title}>
              <img className={styles.icon} onClick={e=>this.showMore(i)} src={el.icon} alt=""/>
            </div>
            {ifshowList[i]?
              <div className={styles.downBox}>
                {el.data&&el.data.map((el2,i2)=>{
                  return <div key={i2} className={styles.itemBox}>
                    <p className={styles.mainTitle}>{el2.title}</p>
                    <div className={styles.main}>
                    {el2.sercon?
                      <div className={styles.mainitem + " " +styles.clearfix}>
                        <div>服务内容：</div>
                        <div className={styles.maincon}>{el2.sercon}</div>
                      </div>
                    :""}
                    {el2.sertime?
                      <div className={styles.mainitem + " " +styles.clearfix}>
                        <div>服务时间：</div>
                        <div className={styles.maincon}>{el2.sertime}</div>
                      </div>
                    :""}
                    {el2.zs?
                      <div className={styles.mainitem + " " +styles.clearfix + " "+ styles.phone}>
                        <div>服务电话：</div>
                          <div className={styles.maincon + " " + styles.jump} onClick={e=>this.onjump()}>见北京中海商务写字楼客户专享合作方案</div>
                      </div>
                    :""}
                    {el2.seradr?
                      <div className={styles.mainitem + " " +styles.clearfix}>
                        <div>服务地址：</div>
                        <div className={styles.maincon}>{el2.seradr}</div>
                      </div>
                    :""}
                    {el2.oflshop?
                      <div className={styles.mainitem + " " +styles.clearfix}>
                        <div>线下店铺：</div>
                        <div className={styles.maincon}>{el2.oflshop}</div>
                      </div>
                    :""}
                    {el2.discont?
                      <div className={styles.mainitem + " " +styles.clearfix}>
                        <div>优惠折扣：</div>
                        {el2.zs?
                          <div className={styles.maincon + " " + styles.jump} onClick={e=>this.onjump()}>见北京中海商务写字楼客户专享合作方案</div>
                          :
                          <div className={styles.maincon}>{el2.discont}</div>
                        }
                      </div>
                    :""}
                    </div>
                  </div>
                })}
              </div>
            :''}
          </div>
        })}
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Mainitem)
