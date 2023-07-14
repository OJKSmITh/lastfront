import { Button } from '@/app/components/button/button';
import { CustomModal } from '@/app/components/modal2/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IDepositModal {
    token?:string
}

export const ClaimModal = ({token}:IDepositModal) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <>
        <Button width={4.503} height={2.2}  top={0.5} onclick={() => setModalIsOpen(true)} text={"claim"}></Button>
        <CustomModal isOpen={modalIsOpen} onClose={()=>setModalIsOpen(false)} width={340} height={350} left={17} content={<></>}/>
      </>
    );
  };