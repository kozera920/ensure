import React from "react";
import { Icon } from "@iconify/react";

const PremiumBreakDownModal = () => {
  return (
    <div className="w-full max-w-md sm:max-w-lg px-4 sm:px-10 pb-5 sm:pb-7 bg-white flex flex-col justify-center items-start gap-5 rounded-lg shadow-lg mx-auto">
      <div className="w-full px-1 py-2 rounded-lg flex justify-between items-center">
        <div className="rounded-lg flex justify-start items-center">
          <div className="text-stone-900 text-xl sm:text-2xl font-bold font-['Open_Sans']">
            Premium Breakdown
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-5">
        <div className="w-full text-black text-sm font-semibold font-['Open_Sans'] leading-relaxed">
          Optional Coverages Premium{" "}
        </div>
        <div className="w-full pb-4 flex flex-col justify-start items-start gap-4">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full py-2.5 border-b border-zinc-300 flex justify-between items-center gap-2.5">
              <div className="flex-1 flex flex-col justify-center items-start gap-2.5">
                <div className="w-full text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-relaxed">
                  Passenger to be covered
                </div>
              </div>
              <div className="relative">
                <button className="text-custom-blue cursor-pointer">
                  <Icon icon="basil:edit-outline" width="24" height="24" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full py-2.5 border-b border-zinc-300 flex justify-between items-center gap-2.5">
              <div className="flex-1 flex flex-col justify-center items-start gap-2.5">
                <div className="w-full text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-relaxed">
                  Coverage for COMESA countries
                </div>
              </div>
              <div className="relative">
                <button className="text-custom-blue cursor-pointer">
                  <Icon icon="basil:edit-outline" width="24" height="24" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-5">
        <div className="w-full text-black text-sm font-semibold font-['Open_Sans'] leading-relaxed">
          Premium Breakdown
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full py-2.5 border-b border-zinc-300 flex justify-between items-center gap-2.5">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="flex-1 text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-relaxed">
                  Net Premium
                </div>
                <div className="flex justify-start items-start gap-2">
                  <div className="py-1.5 rounded-[10px] flex justify-start items-start gap-2.5">
                    <div className="text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-snug">
                      180,000 RWF
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-2.5 border-b border-zinc-300 flex justify-between items-center gap-2.5">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="flex-1 text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-relaxed">
                  VAT
                </div>
                <div className="flex justify-start items-start gap-2">
                  <div className="py-1.5 rounded-[10px] flex justify-start items-start gap-2.5">
                    <div className="text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-snug">
                      18%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-2.5 border-b border-zinc-300 flex justify-between items-center gap-2.5">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="flex-1 text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-relaxed">
                  Special guarantee fee
                </div>
                <div className="flex justify-start items-start gap-2">
                  <div className="py-1.5 rounded-[10px] flex justify-start items-start gap-2.5">
                    <div className="text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-snug">
                      18%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-2.5 border-b border-zinc-300 flex justify-between items-center gap-2.5">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="flex-1 text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-relaxed">
                  Admin fees
                </div>
                <div className="flex justify-start items-start gap-2">
                  <div className="py-1.5 rounded-[10px] flex justify-start items-start gap-2.5">
                    <div className="text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-snug">
                      2,500 RWF
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-5">
            <div className="flex-1 text-black text-sm font-semibold font-['Open_Sans'] leading-relaxed">
              Total Premium
            </div>
            <div className="px-4 py-1 bg-blue-100 rounded-[50px] text-black text-sm font-semibold">
              250,000 RWF
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="px-8 py-1 bg-custom-blue rounded-[50px] text-white text-sm font-semibold w-full sm:w-auto cursor-pointer"
      >
        Proceed to payment
      </button>
    </div>
  );
};

export default PremiumBreakDownModal;
