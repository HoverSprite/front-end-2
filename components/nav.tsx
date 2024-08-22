import type { NextPage } from "next";

export type NavType = {
  className?: string;
};

const Nav: NextPage<NavType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between py-0 pl-12 pr-[46px] box-border sticky top-[0] z-[99] max-w-full gap-5 text-left text-31xl text-white font-roboto mq975:pl-6 mq975:pr-[23px] mq975:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-teal" />
      <h2 className="m-0 h-[120px] w-[333px] relative text-inherit tracking-[0.1px] leading-[20px] font-black font-[inherit] flex items-center shrink-0 whitespace-nowrap max-w-full z-[1]">
        HoverSprite
      </h2>
      <div className="w-[238px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border text-right text-16xl">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <div className="flex flex-row items-end justify-start gap-[9px]">
              <img
                className="h-[29.6px] w-[23px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/list-icon.svg"
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.6px]">
                <a className="[text-decoration:none] relative tracking-[0.1px] leading-[20px] font-medium text-[inherit] inline-block min-w-[106px] z-[1]">
                  Orders
                </a>
              </div>
            </div>
          </div>
          <img
            className="h-[50px] w-[50px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/profile-icon.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
