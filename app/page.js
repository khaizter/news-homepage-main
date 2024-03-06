import Image from "next/image";

import HeroImageMobile from "@/assets/images/image-web-3-mobile.jpg";
import HeroImageDesktop from "@/assets/images/image-web-3-desktop.jpg";

import TechImage1 from "@/assets/images/image-retro-pcs.jpg";
import TechImage2 from "@/assets/images/image-top-laptops.jpg";
import TechImage3 from "@/assets/images/image-gaming-growth.jpg";

export default function Home() {
  return (
    <main className="px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        <Image className="lg:hidden" src={HeroImageMobile} alt="hero image" />
        <Image
          className="hidden lg:block col-span-2"
          src={HeroImageDesktop}
          alt="hero image"
        />
        <h1 className="text-5xl font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red text-off-white px-8 py-4 uppercase mt-8">
            Read more
          </button>
        </div>
        <div className="lg:row-start-1 lg:col-start-3 lg:row-span-2 p-4 bg-very-dark-blue text-off-white">
          <h2 className="text-soft-orange text-3xl font-bold">New</h2>
          <div className="divide-y divide-dark-grayish-blue mt-6">
            <div className="py-8 first:pt-0 last:pb-0">
              <h3 className="font-bold text-xl">Hydrogen VS Electrics Cars</h3>
              <p className="text-grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="py-8 first:pt-0 last:pb-0">
              <h3 className="font-bold text-xl">
                The Downsides of AI Artistry
              </h3>
              <p className="text-grayish-blue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="py-8 first:pt-0 last:pb-0">
              <h3 className="font-bold text-xl">Is VC Funding Drying Up?</h3>
              <p className="text-grayish-blue">
                Private funding by VC firms is down 15% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="flex">
          <Image src={TechImage1} alt="retro pcs" />
          <div>
            <h2 className="text-grayish-blue">01</h2>
            <div className="text-very-dark-blue">Reviving Retro PCs</div>
            <p className="text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={TechImage2} alt="top laptops" />
          <div>
            <h2 className="text-grayish-blue">02</h2>
            <div className="text-very-dark-blue">Top 10 Laptops of 2022</div>
            <p className="text-dark-grayish-blue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={TechImage3} alt="gaming growth" />
          <div>
            <h2 className="text-grayish-blue">03</h2>
            <div className="text-very-dark-blue">The growth of Gaming</div>
            <p className="text-dark-grayish-blue">
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
