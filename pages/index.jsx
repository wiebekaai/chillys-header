import styled from "styled-components";
import Header from "../components/header";

const BigContent = styled.main`
  height: 3000px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <BigContent id="content">
        {/* Copy pasted image from original */}
        <picture>
          <source
            srcSet="https://www.datocms-assets.com/11645/1639151996-sportbannereng9x16.png?q=80&amp;auto=format&amp;dpr=1&amp;w=400&amp;fit=crop 400w,
                https://www.datocms-assets.com/11645/1639151996-sportbannereng9x16.png?q=80&amp;auto=format&amp;dpr=1&amp;w=600&amp;fit=crop 600w,
                https://www.datocms-assets.com/11645/1639151996-sportbannereng9x16.png?q=80&amp;auto=format&amp;dpr=1&amp;w=799&amp;fit=crop 799w,
                https://www.datocms-assets.com/11645/1639151996-sportbannereng9x16.png?q=80&amp;auto=format&amp;dpr=1&amp;w=1200&amp;fit=crop 1200w,
                https://www.datocms-assets.com/11645/1639151996-sportbannereng9x16.png?q=80&amp;auto=format&amp;dpr=1&amp;w=1600&amp;fit=crop 1600w,
                https://www.datocms-assets.com/11645/1639151996-sportbannereng9x16.png?q=80&amp;auto=format&amp;dpr=1&amp;w=2000&amp;fit=crop 2000w"
            media="(orientation: portrait)"
            sizes="100vw"
          />
          <source
            srcSet="https://www.datocms-assets.com/11645/1639139605-sportbannereng16x9.png?q=80&amp;auto=format&amp;dpr=1&amp;w=1200&amp;fit=crop 1200w,
                https://www.datocms-assets.com/11645/1639139605-sportbannereng16x9.png?q=80&amp;auto=format&amp;dpr=1&amp;w=1600&amp;fit=crop 1600w,
                https://www.datocms-assets.com/11645/1639139605-sportbannereng16x9.png?q=80&amp;auto=format&amp;dpr=1&amp;w=2000&amp;fit=crop 2000w,
                https://www.datocms-assets.com/11645/1639139605-sportbannereng16x9.png?q=80&amp;auto=format&amp;dpr=1&amp;w=2400&amp;fit=crop 2400w"
            media="(orientation: landscape)"
            sizes="100vw"
          />
          <img
            alt="Sports Lids"
            src="https://www.datocms-assets.com/11645/1639139605-sportbannereng16x9.png?q=80&amp;auto=format&amp;dpr=1&amp;w=1600&amp;fit=crop"
          />
        </picture>
      </BigContent>
    </>
  );
}
