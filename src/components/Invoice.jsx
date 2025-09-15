import React from "react";
import Chart from "./Chart";
const Invoice = () => {
  return (
    <>
      <div className="flex w-full rounded-4xl  bg-white  flex-col gap-4 py-4 items-center">
        <div className="h-[160px] w-full bg-[#F2F2F2] rounded-4xl flex flex-col gap-2 items-center justify-center">
          <div className="p-[2px] rounded-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 cursor-pointer">
            <div className="flex justify-center items-center w-10 h-10 bg-[#F2F2F2] rounded-full">
              <span className="text-purple-500 text-2xl font-bold">+</span>
            </div>
          </div>
          <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA]  ">
            Create New Invoice
          </span>
          <span className="text-xs font-light text-neutral-500  ">
            Start by creating and sending new invoice
          </span>
        </div>
        <p className="text-xs text-[#8134AF] font-medium">
          Or Upload an existing invoice and set payment reminder
        </p>
        <div className="">
          <div className="bg-white rounded-2xl   min-w-[350px] flex flex-col gap-4">
            {/* Time Period Selection */}
            <div className="border border-gray-300 rounded-xl p-3">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600 text-sm font-medium">
                  Time Period
                </span>
                <span className="text-gray-400 text-xs">
                  dd:mm:yyyy - dd:mm:yyyy
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-neutral-400">
                <button className="text-xs border border-gray-300 rounded-2xl hover:border-purple-500 hover:bg-purple-100 hover:text-purple-600  px-2 ">
                  1Month
                </button>

                <button className="text-sm border hover:border-purple-500 hover:bg-purple-100 hover:text-purple-600 rounded-2xl py-1 px-2">
                  3Months
                </button>

                <button className="text-sm border flex items- hover:border-purple-500 hover:bg-purple-100 hover:text-purple-600  border-gray-300 rounded-2xl py-1 px-2  justify-center">
                  1Year
                  <span className="text-yellow-500">👑</span>
                </button>

                <button className="text-sm hover:border-purple-500 hover:bg-purple-100 hover:text-purple-600  border border-gray-300 rounded-2xl py-1 px-2 flex items-center justify-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="gray"
                    height={"1em"}
                  >
                    <path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z" />
                  </svg>
                  Custom
                </button>
              </div>
            </div>

            {/* Total Earnings */}
            <div className="border border-gray-300 rounded-xl p-4 flex flex-col gap-1">
              <span className="text-gray-600 text-sm">Total Earnings</span>
              <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA]  ">
                $1,25,000
              </span>
            </div>

            {/* Payment Awaited + Overdue */}
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-300 rounded-xl p-3 flex flex-col ">
                <span className="text-gray-600 text-xs">Payment Awaited</span>
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA]  ">
                  $25,000
                </span>
              </div>

              <div className="border border-gray-300 rounded-xl p-3 flex flex-col ">
                <span className="text-gray-600 text-xs">Payment Overdue</span>
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA]  ">
                  $25,000
                </span>
              </div>
            </div>
          </div>
        </div>
        <Chart />
      </div>
    </>
  );
};

export default Invoice;
