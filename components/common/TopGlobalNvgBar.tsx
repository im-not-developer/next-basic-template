import {MainLogo} from '~/public/common';
// import MainLogo from '~/public/common';
import React from 'react';

const TopGlobalNvgBar = () => (
  <div className="flex w-full flex-row bg-[#000000] pl-[24.07px] pt-[25.09px] pb-[14.16px] 3xl:max-w-[1920px]">
    <div className="flex items-center justify-center">
      <MainLogo className="h-[60.76px] w-[56.45px]" />
    </div>
    <div className="flex w-full">
      <div className="flex flex-row text-[#ffffff]">
        <button className="mr-[49px]">로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  </div>
);

export default TopGlobalNvgBar;
