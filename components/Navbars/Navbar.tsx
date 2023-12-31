import Search from "../Search";
import styles from "./navbar.module.css";
import ConnectWallet from "./ConnectWallet";
import { BaseLogoBlack } from "../../lib/utils/logos";

const Navbar = (props: any) => {

  return (
    <>
      <nav className={`${styles.navbar} w-full flex flex-wrap items-center sm:justify-between justify-center`} >
        <div className="hidden sm:flex items-center w-1/5">
          <Search nav={true} />
        </div>
  
        <div className="flex gap-2 w-1/5 hidden md:flex">
          <p className="text-xs flex items-center">1 day <span className="text-2xl font-light"> {" {"}</span></p>
          <div>
            <p className="text-[13px] text-[#0052FF]">{!props.isLoading ? props.oneDay?.mintCount?.toLocaleString(): "..."} <span className="text-[12px] text-black">minted</span></p>
            <p className="text-[13px] text-[#0052FF]">{!props.isLoading ? Math.ceil(props.oneDay?.mintVolume)?.toLocaleString() : "..."} ETH <span className="text-[12px] text-black">mint vol.</span></p>
          </div>
        </div>

        <div className="hidden sm:flex items-center w-1/5">
          {BaseLogoBlack("25", "25")} <p className="pl-4 text-2xl font-medium">NFTs</p>
        </div>

        <div className="flex gap-2 w-1/5 hidden md:flex">
          <p className="text-xs flex items-center">7 day <span className="text-2xl font-light"> {" {"}</span></p>
          <div>
            <p className="text-[13px] text-[#0052FF]">{!props.isLoading ? props.sevenDay?.mintCount?.toLocaleString() : "..."} <span className="text-[12px] text-black">minted</span></p>
            <p className="text-[13px] text-[#0052FF]">{!props.isLoading ? Math.ceil(props.sevenDay?.mintVolume)?.toLocaleString() : "..."} ETH <span className="text-[12px] text-black">mint vol.</span></p>
          </div>
        </div>

        <ConnectWallet />
      </nav>
    </>

  );
};

export default Navbar;