const MintFooter = (props: any) => {
  const { contractData, inputs } = props;

  console.log(contractData)

  return <>
    <div className="sm:absolute sm:bottom-0 sm:mt-0 mt-12 w-full h-24 py-[12px] px-[24px]">
      <div className="flex justify-between font-thin text-xs">
        <p className="w-1/4 text-left">Total Minted</p>
        <p className="w-1/4 text-center">Mint Volume</p>
        <p className="w-1/4 text-center">Floor Price</p>
        <p className="w-1/4 text-right">Unique Owners</p>
      </div>
      {contractData && 
        <div className="flex items-center justify-between pt-1">
          <p className="w-1/4 text-left text-[#0052FF]"> 
          
            {/* | {inputs.maxTokens */}
            {parseInt(contractData[0].tokenCount).toLocaleString()}  
          </p>
          <p className="w-1/4 text-center text-[#0052FF]">
            
            {/* * inputs.price */}
            {parseInt(contractData[0].tokenCount)}
          </p>
          <p className="w-1/4 text-center text-[#0052FF]">
            {contractData[0].floorAsk?.price?.amount?.decimal || 0} ETH
          </p>
          <p className="w-1/4 text-right text-[#0052FF]">
            {contractData[0].ownerCount.toLocaleString()}
          </p>
        </div>
      }
    </div>
  </>
}

export default MintFooter;