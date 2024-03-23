import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', false),
  [SupportedChainId.EDGELESS_TEST]: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // TODO: we dont have this
}
export const MULTICALL2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x2160f151e1FF43230F6df739e867867986230292', false),
  [SupportedChainId.ARBITRUM_ONE]: '0x021CeAC7e681dBCE9b5039d2535ED97590eB395c',
  [SupportedChainId.EDGELESS_TEST]: '0x7e6520bA5FA3eA82280eCF30A9cCcC08fB13C9A6'
}

// we don't need these two
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS, false)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap(
  '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  false
)

// most current governance contract address should always be the 0 index
// only support governance on mainnet
export const GOVERNANCE_ADDRESSES: AddressMap[] = [
  {
    [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
  },
  {
    [SupportedChainId.MAINNET]: '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F',
  },
]
export const TIMELOCK_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V3_FACTORY_ADDRESS, true),
  [SupportedChainId.EDGELESS_TEST]: '0x8a956EDD001FBF1E922cb5c0D11bDB92AFC7e6a0'
}
export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x9B139AD78E6FC69d9677eB40b4B9cB7A1CF54040', true),
  [SupportedChainId.EDGELESS_TEST]: '0x33E85f97983F3EF1E0226f21EDf94092924cd5AF'
}
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xa1a807536B1700aACd3a8A3306Be0028141CeE5B', true),
  [SupportedChainId.EDGELESS_TEST]: '0x8FD0730CaF4ABd7e538Fe3A24d28A7E1E91f6308'
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xf1f2003201225BA8db4b53360E1ca2959Fe24F29', true),
  [SupportedChainId.EDGELESS_TEST]: '0x13DBBc70ef05Dfa71A2F50269177a6B1718F89e9'
}

// Don't need these for now
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap(
  '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  true
)
