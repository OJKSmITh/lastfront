import { ContentWrapBasicST } from '../../components/contentswrap';
import { Span } from '@/app/components/span/span';
import { Button } from '@/app/components/button/button';

interface Itext{
    text1 :string
    text2 :string
    text3 :string
    img : string
}

export const GovernorA = ({text1, text2, text3, img}:Itext) =>{

    return (
    <>
            <ContentWrapBasicST width={1905} height={280} flex={"true"} back={"true"}>
                    <ContentWrapBasicST width={680} height={200} flex={"true"} direction={"true"} left={9} top={3}>
                        <Span size={4} weight={"true"} text={text1} color={"purple"}></Span>
                        <Span size={1.5} weight={"true"} text={text2}></Span>
                        <Button width={11.5} height={2} text={text3} left={10} top={1}></Button>
                    </ContentWrapBasicST>
                    <ContentWrapBasicST width={680} height={160} flex={"none"}>
                        <img src={`${img}`}/>
                    </ContentWrapBasicST>
            </ContentWrapBasicST>
    </>
    )
}