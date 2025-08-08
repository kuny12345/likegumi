'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * 네비게이션 컴포넌트
 * PC에서만 표시되는 메인 메뉴와 서브메뉴를 포함한 네비게이션
 */
export default function Navigation() {
  return (
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
  );
}
