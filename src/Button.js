import PropTypes from 'prop-types';
import styles from './Button.module.css';
//버튼 모듈이라는 css파일 이름을 styles라고 하겠다.
function Button({text}){
    return<button  className={styles.btn}>{text}</button>;
    /*스타일 안에 있는 btn을 호출*/ 
}

//propTypes로 전달받은 prop 데이터의 type을 검사하고 데이터타입을 명시할수있다. 
//text는 string형태로 지정해놓았기에, 만약 다른 형태라면 에러메세지가 출력될 것. 
Button.propTypes = {
    text:PropTypes.string.isRequired, /*필수속성으로 지정  */
};

export default Button;