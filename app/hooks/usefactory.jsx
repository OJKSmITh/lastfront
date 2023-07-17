import { ContractCA } from "@/contractCA"
import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import { ethers } from "ethers"

const factoryABI = require("../../contracts/Factory_v1.sol/Factory_v1.json")

export const useFactory = (provider) => {
  if (!provider) return
  const factoryCA = ContractCA.NEXT_PUBLIC_FACTORY_ADDRESS
  const contract = new ethers.Contract(factoryCA, factoryABI.abi, provider)
  return contract
}
