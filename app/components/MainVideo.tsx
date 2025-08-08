/**
 * 메인 비디오 컴포넌트
 * 홈페이지 상단의 자동재생 비디오 영역
 */
export default function MainVideo() {
  return (
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
  );
}
