'use client';

// app/page.tsx
import SlideGallery from './components/SlideGallery';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-[1000] top-0">
      <span className="sound_only">공단치과, 지산동치과, 형곡동치과</span>
      <h1 id="hd_h1">구미숙면치과, 수면임플란트, 치아교정</h1>
      
      {/* 헤더 영역 */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            
            {/* 왼쪽 영역 - 로그인 */}
            <div className="flex items-center">
              <ul className="flex gap-4 items-center">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    <Image src="/images/nav/login.png" alt="로그인" width={80} height={80} className="h-6 w-auto" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* 중앙 영역 - 로고 */}
            <div className="flex items-center justify-center flex-1">
              <Link href="/" className="block">
                <Image src="/images/nav/logo.svg" alt="구미숙면치과, 수면임플란트, 치아교정" width={244} height={100} className="h-12 w-auto" />
              </Link>
            </div>
            
            {/* 오른쪽 영역 - 모바일 메뉴 버튼 */}
            <div className="lg:hidden">
              <button 
                className="p-2 text-gray-600 hover:text-gray-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* PC 네비게이션 - 데스크톱에서만 표시, 한 줄 아래에 배치 */}
          <nav className="hidden lg:block mt-4">
            <div className="w-full max-w-6xl mx-auto">
              <ul className="flex items-center justify-center gap-4 list-none m-0 p-0">
                {/* 치과소개 */}
                <li className="relative group">
                  <Link href="/sub/0101" className="block">
                    <Image src="/images/menu1.png" alt="구미숙면치과" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0101" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub1_1_f.png" alt="구미숙면치과의원" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0102" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub1_2_f.png" alt="의료진소개" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0103" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub1_3_f.png" alt="장비소개" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0104" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub1_4_f.png" alt="진료공간" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="/sub/0105" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub1_5_f.png" alt="오시는길/진료시간" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
                
                {/* 의식하진정법 숙면임플란트 */}
                <li className="relative group">
                  <Link href="/sub/0201" className="block">
                    <Image src="/images/menu2.png" alt="의식하진정법 숙면임플란트" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0201" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub2_1_f.png" alt="의식하진정법 숙면임플란트특별함" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0202" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub2_2_f.png" alt="의식하진정법 숙면임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0203" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub2_3_f.png" alt="네비게이션임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0204" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub2_4_f.png" alt="스트라우만임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0205" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub2_5_f.png" alt="포인트임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="/sub/0206" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub2_6_f.png" alt="오스템임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
                
                {/* 임플란트 시술유형 */}
                <li className="relative group">
                  <Link href="/sub/0301" className="block">
                    <Image src="/images/menu3.png" alt="치아교정" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0301" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub3_1_f.png" alt="상악동거상술" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0302" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub3_2_f.png" alt="뼈이식임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0303" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub3_3_f.png" alt="전체임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0304" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub3_4_f.png" alt="재수술임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0305" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub3_5_f.png" alt="앞니임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="/sub/0306" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub3_6_f.png" alt="틀니임플란트" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
                
                {/* 의식하진정법 숙면치과치료 */}
                <li className="relative group">
                  <Link href="/sub/0401" className="block">
                    <Image src="/images/menu4.png" alt="의식하진정법 숙면치과치료" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0401" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_1_f.png" alt="의식하진정법 숙면치과치료특별함" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0402" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_2_f.png" alt="보철치료" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0403" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_3_f.png" alt="사랑니발치" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0404" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_4_f.png" alt="신경치료" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0405" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_5_f.png" alt="충치치료" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0406" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_6_f.png" alt="턱관절 원인/증상" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="/sub/0407" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub4_7_f.png" alt="턱관절 치료방법" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
                
                {/* 무삭제 라미네이트 */}
                <li className="relative group">
                  <Link href="/sub/0801" className="block">
                    <Image src="/images/menu8.png" alt="무삭제 라미네이트" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                </li>
                
                {/* 투명교정 */}
                <li className="relative group">
                  <Link href="/sub/0501" className="block">
                    <Image src="/images/menu5.png" alt="투명교정" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0501" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub5_1_f.png" alt="투명교정특별함" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0502" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub5_2_f.png" alt="슈어스마일" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0503" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub5_3_f.png" alt="MTA부분교정" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0504" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub5_4_f.png" alt="자가결찰교정" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="/sub/0505" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub5_5_f.png" alt="치아교정주의사항" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
                
                {/* 치아보험 */}
                <li className="relative group">
                  <Link href="/sub/0601" className="block">
                    <Image src="/images/menu6.png" alt="치아보험" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0601" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub6_1_f.png" alt="치아보험알아보기" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="/sub/0602" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub6_2_f.png" alt="치아보험구비서류" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
                
                {/* 커뮤니티 */}
                <li className="relative group">
                  <Link href="/bbs/board.php?bo_table=notice" className="block">
                    <Image src="/images/menu7.png" alt="커뮤니티" width={80} height={35} className="h-6 w-auto transition-transform duration-200 hover:scale-105" />
                  </Link>
                  <ul className="fixed top-0 left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-xl rounded-lg py-4 px-4 w-screen max-w-none z-50 list-none m-0 p-0 border border-gray-200 transition-all duration-500 ease-in-out transform origin-top scale-y-0 group-hover:scale-y-100" style={{top: '120px'}}>
                    <div className="flex justify-center gap-8 max-w-7xl mx-auto">
                      <li className="border-r border-gray-300 pr-8"><Link href="/bbs/board.php?bo_table=notice" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub7_1_f.png" alt="공지사항" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/bbs/board.php?bo_table=ba" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub7_2_f.png" alt="치료전후사진" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/bbs/board.php?bo_table=review" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub7_3_f.png" alt="치료후기" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li className="border-r border-gray-300 pr-8"><Link href="/sub/0701" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub7_4_f.png" alt="비급여수가안내" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                      <li><Link href="http://pf.kakao.com/_ZPxbsb" target="_blank" className="block hover:bg-blue-50 transition-colors duration-200 rounded p-2"><Image src="/images/sub/sub7_5_f.png" alt="카카오톡상담" width={600} height={240} className="h-40 w-auto object-contain" /></Link></li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          
          {/* 모바일 메뉴 - 상태에 따라 표시/숨김 */}
          <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white shadow-lg rounded-lg mt-2 p-4">
              <ul className="space-y-2">
                <li><Link href="/sub/0101" className="block py-2 px-4 hover:bg-gray-100 rounded">치과소개</Link></li>
                <li><Link href="/sub/0201" className="block py-2 px-4 hover:bg-gray-100 rounded">의식하진정법 숙면임플란트</Link></li>
                <li><Link href="/sub/0301" className="block py-2 px-4 hover:bg-gray-100 rounded">임플란트 시술유형</Link></li>
                <li><Link href="/sub/0401" className="block py-2 px-4 hover:bg-gray-100 rounded">의식하진정법 숙면치과치료</Link></li>
                <li><Link href="/sub/0801" className="block py-2 px-4 hover:bg-gray-100 rounded">무삭제 라미네이트</Link></li>
                <li><Link href="/sub/0501" className="block py-2 px-4 hover:bg-gray-100 rounded">투명교정</Link></li>
                <li><Link href="/sub/0601" className="block py-2 px-4 hover:bg-gray-100 rounded">치아보험</Link></li>
                <li><Link href="/bbs/board.php?bo_table=notice" className="block py-2 px-4 hover:bg-gray-100 rounded">커뮤니티</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="pmenu_wrapper"></div>
      <hr/>
      
      {/* 메인 비디오 */}
      <div id="mainVideo">
        <div style={{width: '100%', position: 'relative', paddingBottom: '56.25%', zIndex: -1}}>
          <video 
            id="myVideo" 
            loop 
            autoPlay 
            muted 
            playsInline 
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
          >
            <source src="/video/main_pc.mp4?v=1" type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div id="wrapper">
        <div id="container_wr">
          <div id="container">
            <div className="main sec1">
              <SlideGallery />
            </div>
          </div>
        </div>
        
        {/* 의식하진정 사용약물 섹션 */}
        <div className="medication_sec relative">
          <Image src="/images/medication_bg.png" alt="의식하진정법 숙면임플라트" width={1920} height={1080} className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center gap-0">
            {/* 첫 번째 이미지 */}
            <div className="relative group cursor-pointer w-[40%] h-[40%] top-[7%] -mx-2">
              <Image 
                src="/images/img/medi01.png" 
                alt="의료진소개" 
                width={1920} 
                height={1080} 
                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              />
              <Image 
                src="/images/img/medi01_on.png" 
                alt="의료진소개 활성화" 
                width={1920} 
                height={1080} 
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
            
            {/* 두 번째 이미지 */}
            <div className="relative group cursor-pointer w-[30%] h-[30%] top-[5%] -mx-2">
              <Image 
                src="/images/img/medi02.png" 
                alt="치료소개" 
                width={1920} 
                height={1080} 
                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              />
              <Image 
                src="/images/img/medi02_on.png" 
                alt="치료소개 활성화" 
                width={1920} 
                height={1080} 
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
            
            {/* 세 번째 이미지 */}
            <div className="relative group cursor-pointer w-[30%] h-[30%] top-[5%] -mx-2">
              <Image 
                src="/images/img/medi03.png" 
                alt="장비소개" 
                width={1920} 
                height={1080} 
                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              />
              <Image 
                src="/images/img/medi03_on.png" 
                alt="장비소개 활성화" 
                width={1920} 
                height={1080} 
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
            
            {/* 네 번째 이미지 */}
            <div className="relative group cursor-pointer w-[30%] h-[30%] top-[5%] -mx-2">
              <Image 
                src="/images/img/medi04.png" 
                alt="예약안내" 
                width={1920} 
                height={1080} 
                className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              />
              <Image 
                src="/images/img/medi04_on.png" 
                alt="예약안내 활성화" 
                width={1920} 
                height={1080} 
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
        
        {/* 메인 섹션 2 */}
        <div className="main_sec2">
          <Link href="/">
            <Image src="/images/img/sec2.png" alt="의식하진정법 숙면임플라트" width={1920} height={1080} className="w-full h-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
} 
