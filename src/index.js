import dva from 'dva';
import './index.css';
// import {createBrowserHistory} from "history";
// import createHistory from 'history/createBrowserHistory';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva();
// const app =dva({history:createBrowserHistory()});
// const app = dva({
//     ...createLoading({
//         effects: true
//     }),
//     history: createHistory()
// });
getmobiletype()
function getmobiletype(){
  var events = navigator.userAgent;
  localStorage.setItem("iphone7p", '')
  if(events.indexOf('Android')>-1 || events.indexOf('Linux')>-1 || events.indexOf('Adr')>-1){
      console.log("安卓手机");
  }else if(events.indexOf('iPhone')>-1){
      //根据尺寸进行判断 苹果的型号
      if(window.screen.height == 812 && window.screen.width == 375){
          console.log("苹果X");
      }else if(window.screen.height == 736 && window.screen.width == 414){
          console.log("iPhone7P - iPhone8P - iPhone6");
          localStorage.setItem("iphone7p", 'iphone7p')
      }else if(window.screen.height == 667 && window.screen.width == 375){
          console.log("iPhone7 - iPhone8 - iPhone6");
      }else if(window.screen.height == 568 && window.screen.width == 320){
          console.log("iPhone5");
      }else{
          console.log("iPhone4");
      }
  }else if(events.indexOf('Windows Phone')>-1){
      console.log("诺基亚手机");

  }else if(events.indexOf("iPad")>-1){
      console.log("平板");
  }
}

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
