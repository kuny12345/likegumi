'use client';

// 컴포넌트 임포트
import Header from './components/Header';
import MainVideo from './components/MainVideo';
import MainSection from './components/MainSection';
import MedicationSection from './components/MedicationSection';

/**
 * 홈페이지 메인 컴포넌트
 * 전체 페이지 구조를 관리하고 각 섹션 컴포넌트들을 조합
 */
export default function Home() {
  return (
    <div className="relative w-full z-[1000] top-0">
      {/* 스크린 리더용 텍스트 */}
      <span className="sound_only">홈페이지제작, 병원홈페이지, 변호사홈페이지, 홈페이지SEO, 로컬비지니스홈페이지</span>
      <h1 id="hd_h1">홈페이지제작, 병원홈페이지, 변호사홈페이지, 홈페이지SEO, 로컬비지니스홈페이지</h1>
      
      {/* 헤더 영역 */}
      <Header />

      {/* 메뉴 래퍼 */}
      <div className="pmenu_wrapper"></div>
      <hr/>
      
      {/* 메인 비디오 */}
      <MainVideo />
      
      {/* 메인 콘텐츠 */}
      <MainSection />
      
      {/* 의식하진정 사용약물 섹션 */}
      <MedicationSection />
    </div>
  );
} 
