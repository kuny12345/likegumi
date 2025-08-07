// app/page.tsx
import SlideGallery from './components/SlideGallery';

export default async function Home() {
 

  return (
    <div className="relative w-full z-[1000] top-0">
      <span className="sound_only">공단치과, 지산동치과, 형곡동치과</span>
      <h1 id = "hd_h1">구미숙면치과, 수면임플란트, 치아교정</h1>
      <div id = "hd_wrapper">
        <ul className="hd_login">
          <li>
            <a href = "#">로그인</a>
          </li>
        </ul>
        <div>
          로고
        </div>
      <div className="gnb_wrapper">
        <ul>
          <li>
            <a href="/">
              <img src="/images/logo.png" alt="구미숙면치과의원" />
            </a>
            <ul>
              <li>
                <a href="/"><img src="/images/gnb_home.png" alt="구미숙면치과의원원" /></a>
              </li>
              <li>
                <a href="/"><img src="/images/gnb_treatment.png" alt="의료진소개" /></a>
              </li>
              <li>
                <a href="/"><img src="/images/gnb_hospital.png" alt="장비소개" /></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">
              <img src="/images/gnb_search.png" alt="의식하진정법 숙면임플라트" />
              <ul>
                <li>
                  <a href="/">
                    <img src="/images/gnb_home.png" alt="구미숙면치과의원원" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/images/gnb_treatment.png" alt="의료진소개" />
                  </a>
                </li>
                
              </ul>
              
            </a>
          </li>
        </ul>

      </div>

      </div> 
      <div className="pmenu_wrapper"></div>
      <hr/>
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
      <div id = "wrapper">
        <div id ="container_wr">
          <div id = "container">
            <div className="main sec1">
              <SlideGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Revalidate every hour
export const revalidate = 3600; 
