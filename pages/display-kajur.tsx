import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from 'next/router';
import FrameComponent2 from "../components/frame-component2";
import CardBlog from "../components/card-blog";
import CardBlog2 from "../components/card-blog2";
import CardBlog3 from "../components/card-blog3";

const DisplayKajur: NextPage = () => {
  const router = useRouter();
  const onImage2IconClick = useCallback(() => {
    router.push('/')
  }, [router]);

  const onCardBlog2Click = useCallback(() => {
    router.push("/detail-dosen");
  }, [router]);

  const onComponent6ContainerClick = useCallback(() => {
    router.push("display-kajur3");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("display-kajur4");
  }, [router]);

  const onGENERATEREPORTClick = useCallback(() => {
    router.push("/report")
  }, [router]);

  return (
    <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-start justify-start gap-[73px] tracking-[normal] mq450:gap-[18px_73px] mq750:gap-[36px_73px]">
      <FrameComponent2 onImage2IconClick={onImage2IconClick} />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[69px] pl-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <section className="flex-1 flex flex-col items-end justify-start max-w-full text-center text-45xl text-black font-roboto">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[66px] pl-[68px] box-border max-w-full lg:pl-[34px] lg:pr-[33px] lg:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[72px] max-w-full lg:gap-[36px_72px] mq750:gap-[18px_72px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                <h1 className="m-0 h-[66px] w-[796px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
                  Lecturer Monitoring System
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-xl mq1050:flex-wrap mq1050:justify-center">
                <div className="w-[567px] flex flex-row items-start justify-center gap-[31px] max-w-full mq750:flex-wrap mq750:gap-[31px_15px]">
                  <div className="flex-1 flex flex-row items-start justify-start py-[18px] px-0 box-border relative min-w-[127px] whitespace-nowrap">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)]" />
                    <div className="flex-1 relative z-[1]">Lecturer Room 1</div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start py-[18px] pr-0 pl-px box-border relative min-w-[127px] whitespace-nowrap cursor-pointer">
                    <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] [background:linear-gradient(rgba(70,_109,_211,_0.1),_rgba(70,_109,_211,_0.1)),_linear-gradient(rgba(211,_70,_109,_0),_rgba(211,_70,_109,_0)),_rgba(109,_211,_70,_0.34)]" />
                    <div className="flex-1 relative z-[1]">Lecturer Room 3</div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[127px]">
                    <div className="flex-1 flex flex-row items-start justify-start py-[18px] px-0 relative whitespace-nowrap cursor-pointer">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(rgba(70,_109,_211,_0.1),_rgba(70,_109,_211,_0.1)),_linear-gradient(rgba(211,_70,_109,_0),_rgba(211,_70,_109,_0)),_rgba(109,_211,_70,_0.34)]" />
                      <div className="flex-1 relative z-[1]">
                        Lecturer Room 4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[243px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-5xl text-crimson">
                  <div
                    className="self-stretch relative cursor-pointer mq450:text-lgi"
                    onClick={onGENERATEREPORTClick}
                  >{`GENERATE REPORT >>`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1303px] h-[638px] [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[65px] pr-[65px] pl-[68px] box-border gap-[30px] max-w-full lg:pl-[34px] lg:pr-8 lg:box-border mq750:gap-[30px_15px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border">
            <div className="h-[638px] w-[1303px] relative [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] shrink-0 hidden max-w-full" />
            <CardBlog propMinWidth="41px"/>
            <CardBlog2 propMinWidth="41px"/>
            <CardBlog3 propMinWidth="41px"/>
            <CardBlog propMinWidth="41px"/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DisplayKajur;
