'use client';

export default function Carousel() {
  const html = `
<style>
.Item-list{width:100%;display:flex;position:absolute;z-index:-1;overflow:scroll;}
.List-item{flex:1 1 0;}
.List-item img{width:400px;}
</style>
<ul itemscope="" itemtype="https://schema.org/ItemList" class="Item-list">
  <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="List-item">
	<a itemprop="url" href="http://thevuemedia.com/sub1">
		<div class="img"><img src="/images/1.webp" alt="미니1" itemprop="image"></div>
		<div itemprop="name" class="ev_tit">미니1</div>
	</a>
	<meta itemprop="position" content="1">
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="List-item">
	<a itemprop="url" href="http://thevuemedia.com/sub2">
		<div class="img"><img src="/images/2.webp" alt="미니2" itemprop="image"></div>
		<div itemprop="name" class="ev_tit">미니2</div>
	</a>
	<meta itemprop="position" content="2">
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="List-item">
    <a itemprop="url" href="http://thevuemedia.com/sub3">
		<div class="img"><img src="/images/3.webp" alt="미니3" itemprop="image"></div>
		<div itemprop="name" class="ev_tit">미니3</div>
	</a>
	<meta itemprop="position" content="3">
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="List-item">
	<a itemprop="url" href="http://thevuemedia.com/sub4">
		    <div class="img"><img src="/images/4.webp?v=1" alt="미니4" itemprop="image"></div>
		<div itemprop="name" class="ev_tit">미니4</div>
	</a>
	<meta itemprop="position" content="4">
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="List-item">
	<a itemprop="url" href="http://thevuemedia.com/sub5">
		<div class="img"><img src="/images/5.png" alt="미니5" itemprop="image"></div>
		<div itemprop="name" class="ev_tit">미니5</div>
	</a>
	<meta itemprop="position" content="5">
  </li>
</ul>`;

  return (
    <div className="relative w-full overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}