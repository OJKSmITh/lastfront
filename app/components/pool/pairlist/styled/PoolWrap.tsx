import { styled } from "styled-components"
import { PoolWrap } from '../../../component.inteface'


export const PoolWrapST = styled.div<PoolWrap>`
    width: ${(props) => (props.width ? props.width : "100%")}rem;
    height: ${(props) => (props.height ? props.height : "100%")}rem;
    ${(props)=>
    props.flex =="true"? "display:flex; flex-direction:column":"display:flex"};
    margin-left: ${(props)=> (props.left? props.left:"")}rem;
    margin-right: ${(props)=> (props.right? props.right:"")}rem;

`