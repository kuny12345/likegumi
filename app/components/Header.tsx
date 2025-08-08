'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* 상단 로고 및 로그인 영역 */}
        <div className="flex items-center justify-between">
          {/* 왼쪽 로그인 버튼 */}
          <div className="flex items-center">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <Image
                    src="/images/nav/login.png"
                    alt="로그인"
                    width={80}
                    height={80}
                    className="h-6 w-auto"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* 중앙 로고 */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/" className="block">
              <Image
                src="/images/nav/logo.png"
                alt="홈페이지제작, 병원홈페이지, 변호사홈페이지"
                width={244}
                height={100}
                className="h-8 lg:h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="lg:hidden">
            <button 
              className="p-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 네비게이션 메뉴 */}
        <Navigation />

        {/* 모바일 메뉴 */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white shadow-lg rounded-lg mt-2 p-4">
            <ul className="space-y-2">
              <li><Link href="/sub/0101" className="block py-2 px-4 hover:bg-gray-100 rounded">병원 홈페이지</Link></li>
              <li><Link href="/sub/0201" className="block py-2 px-4 hover:bg-gray-100 rounded">변호사 홈페이지</Link></li>
              <li><Link href="/sub/0301" className="block py-2 px-4 hover:bg-gray-100 rounded">전문직 홈페이지</Link></li>
              <li><Link href="/sub/0801" className="block py-2 px-4 hover:bg-gray-100 rounded">로컬 비지니스 홈페이지</Link></li>
              <li><Link href="/sub/0501" className="block py-2 px-4 hover:bg-gray-100 rounded">SEO 최적화</Link></li>
              <li><Link href="/sub/0601" className="block py-2 px-4 hover:bg-gray-100 rounded">네이버 구글 SEO</Link></li>
              <li><Link href="/bbs/board.php?bo_table=notice" className="block py-2 px-4 hover:bg-gray-100 rounded">포트폴리오</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}