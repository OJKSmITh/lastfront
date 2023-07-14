import { styled } from 'styled-components';
import { modalWrap } from '../../component.inteface';

export const ModalWrapST =styled.div<modalWrap>`
    width: ${(props)=> (props.width? props.width:"")}px;
    height: ${(props) => (props.height ? props.height : "100%")}px;
    ${(props) =>
    props.flex == "true"
      ? "display: flex; justify-content: center; align-items:center;"
      : ""};
`