import { ContentWrapBasicST } from '../../components/contentswrap';
import { Span } from '@/app/components/span/span';
import { Propose } from './govList';

export const GovernorB = () =>{
    return (
    <>
        <ContentWrapBasicST width={1905} height={280} flex={"true"} direction={"true"}>
                    <ContentWrapBasicST width={680} height={100} flex={"true"} direction={"true"} left={9} top={1}>
                        <Span size={3.5} weight={"true"} text={"Proposal"} ></Span>
                    </ContentWrapBasicST>
                    <Propose text1={'1'} text2={'ASD Token level'} text3={'progress'} text4={'23.07.10~23.07.15'} text5={"참여완료"} radius1={3} radius2={3}></Propose>
        </ContentWrapBasicST>
    </>
    )
}