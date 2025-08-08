import Link from 'next/link';
import Image from 'next/image';

/**
 * 의식하진정 사용약물 섹션 컴포넌트
 * 배경 이미지 위에 4개의 인터랙티브 이미지가 오버레이된 섹션
 */
export default function MedicationSection() {
  return (
    <div className="medication_sec relative">
      {/* 배경 이미지 */}
      <Image src="/images/medication_bg.png" alt="의식하진정법 숙면임플라트" width={1920} height={1080} className="w-full h-auto" />
      
      {/* 오버레이 이미지들 */}
      <div className="absolute inset-0 flex items-center justify-center gap-0">
        {/* 첫 번째 이미지 - 의료진소개 */}
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
        
        {/* 두 번째 이미지 - 치료소개 */}
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
        
        {/* 세 번째 이미지 - 장비소개 */}
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
        
        {/* 네 번째 이미지 - 예약안내 */}
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
  );
}
