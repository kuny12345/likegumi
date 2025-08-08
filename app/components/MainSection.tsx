import Link from 'next/link';
import Image from 'next/image';
import SlideGallery from './SlideGallery';

/**
 * 메인 섹션 컴포넌트
 * 슬라이드 갤러리와 메인 섹션 2를 포함한 메인 콘텐츠 영역
 */
export default function MainSection() {
  return (
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          {/* 슬라이드 갤러리 섹션 */}
          <div className="main sec1">
            <SlideGallery />
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
  );
}
