import { styled } from "styled-components"

const RightWrapST = styled.div`
  flex: 1;
  background: #e7e4eb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  & > h1 {
    font-size: 20px;
    color: #7645d9;
  }

  & > img {
    width: 198px;
    height: 178px;
  }
`

const ButtonST = styled.div`
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.03rem;
  width: 15rem;
  height: 3rem;
  background-color: #7a6eaa;
  color: #eee;
`

export const RightContent: React.FC = () => {
  return (
    <>
      <RightWrapST>
        <h1>Haven't got a wallet yet?</h1>
        <img
          src="https://cdn.pancakeswap.com/wallets/wallet_intro.png"
          alt=""
        />
        <ButtonST>Learn How to Connect</ButtonST>
      </RightWrapST>
    </>
  )
}
