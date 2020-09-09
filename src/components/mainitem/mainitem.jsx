import { connect } from 'dva';
import * as React from 'react';
import plusImg from '../../assets/plus.png'
import reduceImg from '../../assets/reduce.png'
import styles from './mainitem.less';

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
  showMore=(show,i)=>{
    const {ifshowList} = this.state
    let showlist  = ifshowList.concat([])
    showlist[i] = show
    this.setState({
      ifshowList: showlist
    })
  }
  render() {
    const {ifshowList} = this.state
    const {list} = this.props
    return (
      <div className={styles.mainitemBox}>
        {list&&list.map((el,i)=>{
          return <div key={i}>
            <div className={styles.title}>
              <img className={styles.icon} src={el.icon} alt=""/>
              <span className={styles.text}>·{el.title}</span>
              {ifshowList[i]?
                <img className={styles.showMore} onClick={e=>this.showMore(false,i)} src={reduceImg} alt=""/>:
                <img className={styles.showMore} onClick={e=>this.showMore(true,i)} src={plusImg} alt=""/>
              }
            </div>
            <div className={styles.main}>
              {ifshowList[i]&&el.data&&el.data.map((el2,i2)=>{
                return <div key={i2}>
                  <p className={styles.mainTitle}>{el2.title}</p>
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
                  {el2.serphone?
                    <div className={styles.mainitem + " " +styles.clearfix + " "+ styles.phone}>
                      <div>服务电话：</div>
                      <div className={styles.maincon}><a href={"tel:"+el2.serphone}>{el2.serphone}</a></div>
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
                      <div className={styles.maincon}>{el2.discont}</div>
                    </div>
                  :""}
                </div>
              })}
            </div>
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
