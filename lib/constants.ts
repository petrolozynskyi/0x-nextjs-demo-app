import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  {
    chainId: 137,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  {
    chainId: 137,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
  },
  {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  {
    chainId: 137,
    name: "Binance USB",
    symbol: "BUSD",
    decimals: 18,
    address: "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
    logoURI: "data:image/jpeg;base64,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в",
  },
  {
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI: "https://wallet-asset.matic.network/img/tokens/matic.svg",
  }
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  wmatic: {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  dai: {
    chainId: 137,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  usdc: {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  uni: {
    chainId: 137,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
  },
  usdt: {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  busd: {
    chainId: 137,
    name: "Binance USB",
    symbol: "BUSD",
    decimals: 18,
    address: "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
    logoURI: "data:image/jpeg;base64,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",
  },
 matic: {
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI: "https://wallet-asset.matic.network/img/tokens/matic.svg",
  }
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": {
    chainId: 137,
    name: "Wrapped Matic",
    symbol: "WMATIC",
    decimals: 18,
    address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": {
    chainId: 137,
    name: "DAI - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359": {
    chainId: 137,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  "0xb33eaad8d922b1083446dc23f610c2567fb5180f": {
    chainId: 137,
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg",
  },
  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": {
    chainId: 137,
    name: "Tether USD - PoS",
    symbol: "USDT",
    decimals: 6,
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg",
  },
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE": {
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    logoURI: "https://wallet-asset.matic.network/img/tokens/matic.svg",
  }
};
