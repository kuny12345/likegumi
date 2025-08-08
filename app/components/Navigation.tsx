'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="hidden lg:block relative bg-white z-50" onMouseLeave={handleMouseLeave}>
      {/* 메인 메뉴 */}
      <div className="max-w-7xl mx-auto relative">
        <ul className="flex justify-center text-2xl">
          {/* 병원 홈페이지 메뉴 */}
          <li
            className="relative px-6 py-4 hover:bg-gray-50 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('menu1')}
          >
            <span>병원홈페이지</span>
          </li>

          {/* 변호사 홈페이지 메뉴 */}
          <li
            className="relative px-6 py-4 hover:bg-gray-50 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('menu2')}
          >
            <span>변호사홈페이지</span>
          </li>

          {/* 전문직 홈페이지 메뉴 */}
          <li
            className="relative px-6 py-4 hover:bg-gray-50 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('menu3')}
          >
            <span>전문직홈페이지</span>
          </li>

          {/* SEO/기능 메뉴 */}
          <li
            className="relative px-6 py-4 hover:bg-gray-50 cursor-pointer"
            onMouseEnter={() => handleMouseEnter('menu4')}
          >
            <span>SEO/기능</span>
          </li>

          {/* 기본 메뉴들 - 서브메뉴가 없는 메뉴들 */}
          <li 
            className="px-6 py-4 hover:bg-gray-50"
            onMouseEnter={() => handleMouseEnter('')}
          >
            <Link href="/about">회사소개</Link>
          </li>
          <li 
            className="px-6 py-4 hover:bg-gray-50"
            onMouseEnter={() => handleMouseEnter('')}
          >
            <Link href="/portfolio">포트폴리오</Link>
          </li>
          <li 
            className="px-6 py-4 hover:bg-gray-50"
            onMouseEnter={() => handleMouseEnter('')}
          >
            <Link href="/contact">상담문의</Link>
          </li>
        </ul>
      </div>

      {/* 서브메뉴 오버레이 */}
      {activeMenu && (
        <div className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto py-8">
            {activeMenu === 'menu1' && (
              <ul className="flex justify-center items-start gap-4 divide-x divide-gray-200">
                <li className="px-8">
                  <Link href="/sub/0101" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🦴</span>
                    <span className="text-2xl font-medium text-center">정형외과<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0102" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🧴</span>
                    <span className="text-2xl font-medium text-center">피부과<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0103" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">💉</span>
                    <span className="text-2xl font-medium text-center">성형외과<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0104" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🌿</span>
                    <span className="text-2xl font-medium text-center">한의원<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0105" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">👶</span>
                    <span className="text-2xl font-medium text-center">산부인과<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0106" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🏥</span>
                    <span className="text-2xl font-medium text-center">병원<br/>리뉴얼</span>
                  </Link>
                </li>
              </ul>
            )}

            {activeMenu === 'menu2' && (
              <ul className="flex justify-center items-start gap-4 divide-x divide-gray-200">
                <li className="px-8">
                  <Link href="/sub/0201" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">💔</span>
                    <span className="text-2xl font-medium text-center">이혼 전문<br/>변호사</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0202" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🔒</span>
                    <span className="text-2xl font-medium text-center">형사 전문<br/>변호사</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0203" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">📄</span>
                    <span className="text-2xl font-medium text-center">민사 소송<br/>변호사</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0204" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">💰</span>
                    <span className="text-2xl font-medium text-center">손해배상<br/>변호사</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0205" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🏛️</span>
                    <span className="text-2xl font-medium text-center">로펌<br/>리뉴얼</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0206" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">⚖️</span>
                    <span className="text-2xl font-medium text-center">반응형<br/>홈페이지</span>
                  </Link>
                </li>
              </ul>
            )}

            {activeMenu === 'menu3' && (
              <ul className="flex justify-center items-start gap-4 divide-x divide-gray-200">
                <li className="px-8">
                  <Link href="/sub/0301" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">📊</span>
                    <span className="text-2xl font-medium text-center">세무사<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0302" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">👥</span>
                    <span className="text-2xl font-medium text-center">노무사<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0303" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">💼</span>
                    <span className="text-2xl font-medium text-center">컨설턴트<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0304" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🏠</span>
                    <span className="text-2xl font-medium text-center">부동산<br/>홈페이지</span>
                  </Link>
                </li>
                <li className="px-8">
                  <Link href="/sub/0305" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                    <span className="text-5xl mb-3">🧠</span>
                    <span className="text-2xl font-medium text-center">심리상담<br/>홈페이지</span>
                  </Link>
                </li>
              </ul>
            )}

            {activeMenu === 'menu4' && (
              <div>
                <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto">
                  <div className="text-center">
                    <Link href="/sub/0401" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🛬</span>
                      <span className="text-2xl font-medium text-center">랜딩페이지<br/>제작</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0402" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">📱</span>
                      <span className="text-2xl font-medium text-center">반응형<br/>홈페이지</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0403" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🔄</span>
                      <span className="text-2xl font-medium text-center">홈페이지<br/>리뉴얼</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0404" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🛠️</span>
                      <span className="text-2xl font-medium text-center">유지보수<br/>관리</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0405" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🔍</span>
                      <span className="text-2xl font-medium text-center">SEO<br/>진단</span>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto mt-8">
                  <div className="text-center">
                    <Link href="/sub/0406" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🧠</span>
                      <span className="text-2xl font-medium text-center">키워드<br/>분석</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0407" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🚀</span>
                      <span className="text-2xl font-medium text-center">상위노출<br/>전략</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0408" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🌐</span>
                      <span className="text-2xl font-medium text-center">네이버/구글<br/>SEO</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0409" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">🧩</span>
                      <span className="text-2xl font-medium text-center">구조화<br/>마크업</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/sub/0410" className="flex flex-col items-center hover:bg-blue-50 transition-colors duration-200 rounded p-4">
                      <span className="text-5xl mb-3">📁</span>
                      <span className="text-2xl font-medium text-center">포트폴리오<br/>(사례)</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}