import mobilebg from "../images/mobilebg.png";
import mainbg from "../images/mainbg.jpg";
import img1 from "../images/Bitmap.jpg";
import img2 from "../images/Bitmap-1.jpg";
import img3 from "../images/Bitmap-2.jpg";

const HeroPage = () => {
  return (
    <>
      <div className="md:flex md:justify-start ">
        <div>
          <img
            className="mt-3 w-[72%] hidden md:block"
            src={mainbg}
            alt="Main Background"
          />
          <img
            className="mt-3 w-full md:hidden"
            src={mobilebg}
            alt="Mobile Background"
            height={800}
          />
          <div className="pt-3 md:flex md:flex-row  md:justify-center md:items-center ">
            <h1 className="text-[40px] font-[800] md:w-[50%] leading-10 md:leading-tight inter800">
              The Bright <br /> Future of Web <br /> 3.0?
            </h1>

            <div className="md:flex md:flex-col md:justify-end md:w-[55%] md:mr-[5%]">
              <div className="w-[50%]">
                <p className="text-sm text-gray-600 mt-2 leading-6">
                  We dive into the next evolution of the web that claims to put
                  the power of platforms back into the hands of the people. But
                  is it really fulfilling its promise?
                </p>
                <button className="bg-[#F15D51] inter mt-4 md:mt-6 font-bold md:w-[200px] tracking-widest px-5 md:px-4 md:py-2 py-3 text-[#00001A] hover">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Black Box */}

        <div className="bg-[#00001A] my-5  md:mt-3 md:ml-[-25%]   md:w-[20%]  md:my-0 p-3 md:p-5 ">
          <h1 className="text-[#E9AA52] text-[32px] pb-5 inter">New </h1>
          <div className="">
            <h1 className="font-bold text-white text-xl py-2">
              Hydrogen VS Electric Cars
            </h1>
            <p className="text-[#C5C6CE] text-[13px]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr className="bg-[#5E607A] my-4 md:my-[38px]" />

          {/* ikaduha */}
          <div className="">
            <h1 className="font-bold text-white text-xl py-2">
              The Downsides of AI Artistry
            </h1>
            <p className="text-[#C5C6CE] text-[13px]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr className="bg-[#5E607A] my-4 md:my-[38px]" />

          {/**ikatulo */}
          <div className="pb-4">
            <h1 className="font-bold text-white text-xl py-2">
              Is VC Funding Drying Up?
            </h1>
            <p className="text-[#C5C6CE] text-[13px]">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>

      {/* katong tulo ka pic sa ubos lain */}

      <div className="pt-8 md:w-full md:flex md:flex-row md:pt-10 md:justify-around md:items-start">
        {/* First Item */}
        <div className="flex w-full mb-4">
          <img className="mt-3" src={img1} alt="Logo" width={100} />
          <div className="pl-4 flex flex-col justify-between">
            <div>
              <h1 className="text-[#F15D51] inter text-[32px]">01</h1>
              <h1 className="inter800 text-[18px]">Reviving Retro PCs</h1>
            </div>
            <p className="inter400 text-[13px] md:w-[200px]  text-[#5E607A]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex w-full mb-4">
          <img className="mt-3" src={img2} alt="Logo" width={100} />
          <div className="pl-4 flex flex-col justify-between">
            <div>
              <h1 className="text-[#F15D51] inter text-[32px]">02</h1>
              <h1 className="inter800 text-[18px]">Top 10 Laptops of 2022</h1>
            </div>
            <p className="inter400 text-[13px] md:w-[200px]  text-[#5E607A]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex w-full pb-4">
          <img className="mt-3" src={img3} alt="Logo" width={100} />
          <div className="pl-4 flex flex-col justify-between">
            <div>
              <h1 className="text-[#F15D51] inter text-[32px]">03</h1>
              <h1 className="inter800 text-[18px]">The Growth of Gaming</h1>
            </div>
            <p className="inter400 text-[13px]  md:w-[200px]  text-[#5E607A]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroPage;
