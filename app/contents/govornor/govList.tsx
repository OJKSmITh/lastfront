import { Span } from '@/app/components/span/span';
import { ContentsWrapST,ContentWrapBasicST } from '@/app/components/contentswrap';

interface IPropose {
    radius1? :number
    radius2 ?:number
    radius3 ?:number
    radius4 ?:number
    text1:string
    text2:string
    text3:string
    text4:string
    text5:string
}

export const Propose =({radius1,radius2,radius3,radius4,text1,text2,text3,text4,text5}:IPropose)=>{
    return (
    <>
        <ContentsWrapST width={80.9} height={4.5} flex={"true"} back={"white"} justify={"true"} top={1} radius1={radius1} radius2={radius2} radius3={radius3} radius4={radius4} left={8} border={1} >
            <Span left={2} text={text1}></Span>
            <Span left={9} right={12} text={text2}></Span>
            <Span left={10} text={text3} color={"skyblue"}></Span>
            <Span right={13} text={text4}></Span>
            <Span right={5} text={text5} color={"skyblue"}></Span>
        </ContentsWrapST>
    </>
    )
}