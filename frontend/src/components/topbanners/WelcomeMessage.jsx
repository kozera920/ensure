import React from 'react'

const WelcomeMessage = () => {
  return (
    <div className="w-[1090px] min-h-32 inline-flex justify-center items-start flex-wrap content-start">
        <div className="flex-1 self-stretch max-w-[1090px] inline-flex flex-col justify-start items-start">
            <div className="self-stretch h-24 p-5 bg-white rounded-lg shadow-[0px_8px_16px_0px_rgba(226,190,253,0.15)] shadow-[0px_2px_8px_0px_rgba(226,190,253,0.15)] flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start gap-56">
                <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch inline-flex justify-start items-center">
                        <div className="flex justify-center items-center"
                            style={{
                                width: '59px',
                                height: '56.562px',
                                padding: '9.264px 7.314px 9.752px 7.314px',
                                aspectRatio: '59 / 56.56',
                                borderRadius: '29.256px',
                                background: '#064E89',
                            }}
                            >
                            <div
                                className="flex justify-center items-center"
                                style={{
                                    width: '41px',
                                    height: '24px',
                                    borderRadius: '8px',
                                }}
                            >
                                <svg
                                    className="w-full h-full"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="pl-5 inline-flex flex-col justify-start items-start">
                            <div className="flex flex-col justify-start items-start">
                                <div className="self-stretch pb-[0.56px] flex flex-col justify-start items-start">
                                <div className="justify-start text-black text-3xl font-semibold font-opensans">Welcome to E-nsure</div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                <div className="justify-start text-slate-600 text-sm font-normal font-opensans">Your account has been successfully created</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeMessage