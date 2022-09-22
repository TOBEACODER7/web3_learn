import { DeployFunction } from "hardhat-deploy/dist/types";
//从uniswap提供的官方包中，引入bytecode和abi数据
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments,ethers} = hre
  const [deployer] = await ethers.getSigners()
  //部署V3Factory合约；
  //其中deploy是hardhat-deploy插件提供的函数
  //在第二个参数中指定了合约的bytecode和abi，两者都必须要有
  await deployments.deploy("UniswapV3Factory", {
    from: deployer.address,
    contract:{
      bytecode: FACTORY_BYTECODE,
      abi: FACTORY_ABI
    },
  })
}
export default func;
