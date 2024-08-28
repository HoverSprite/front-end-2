"use client";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    // <div className="fixed top-0 left-0 w-full bg-white shadow-md z-1000 flex justify-center items-center h-16">
    //   <div className="nav-container flex justify-between items-center px-4 w-full max-w-screen-xl">
    //     <Nav className="">
    //       <Nav.Item>
    //         <Nav.Link href="/">Name</Nav.Link>
    //       </Nav.Item>
    //     </Nav>

    //     <Nav className="flex justify-center space-x-4">
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-services">Services</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-api">API</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-pricing">Pricing</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-about">About</Nav.Link>
    //       </Nav.Item>
    //     </Nav>

    //     <Nav className="flex justify-end">
    //       <Nav.Item>
    //         <Nav.Link href="/login">Sign In</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="/signup">Sign Up</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </div>
    // </div>

    <>
      <header className="self-stretch flex flex-row items-start justify-between py-0 pl-12 pr-[46px] box-border sticky top-[0] z-[99] max-w-full gap-5 text-left text-31xl text-white font-roboto mq975:pl-6 mq975:pr-[23px] mq975:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-teal" />
        <h2 className="m-0 h-[120px] w-[333px] relative text-inherit tracking-[0.1px] leading-[20px] font-black font-[inherit] flex items-center shrink-0 whitespace-nowrap max-w-full z-[1]">
          HoverSprite
        </h2>
        <div className="w-[238px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border text-right text-16xl">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="flex flex-row items-end justify-start gap-[9px]">
                <Image
                  className="relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/list-icon.svg"
                  width={23}
                  height={29.6}
                />

                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.6px]">
                  <a className="[text-decoration:none] relative tracking-[0.1px] leading-[20px] font-medium text-[inherit] inline-block min-w-[106px] z-[1]">
                    Orders
                  </a>
                </div>
              </div>
            </div>
            <Image
              className="h-[50px] w-[50px] relative z-[1]"
              loading="lazy"
              alt=""
              width={50}
              height={50}
              src="/profile-icon.svg"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
