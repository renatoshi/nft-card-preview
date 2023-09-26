import imageHero from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";
import eyeIcon from "./images/icon-view.svg";

function App() {
  return (
    <main className="h-screen flex items-center justify-center md:my-auto">
      <section className=" bg-VeryDarkBlueCardBG w-[340px] rounded-2xl shadow-2xl p-4">
        <div className="relative">
          <img
            src={imageHero}
            alt="imgCenter"
            className="w-full h-auto rounded-3xl p-3 md:w-full md:p-2"
          />
          <div className="absolute inset-3 md:inset-2 flex justify-center items-center hover:bg-cyan-400 transition  opacity-0 hover:opacity-60 hover:rounded-xl">
            <img
              src={eyeIcon}
              alt="eye"
              className="w-[40px] h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col pl-3">
          <h3 className="text-Hite font-bold text-2xl pt-3 md:pt-4 hover:text-Cyan cursor-pointer">
            Equilibrium #3429
          </h3>
          <p className="text-Softblue pt-3 md:pt-5 text-[16px] md:text-[18px]">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center pt-4  md:pt-6 pb-3 md:pb-6 gap-20 md:gap-24">
          <div className="flex flex-row items-center gap-2">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <p className="text-Cyan font-bold">0.041 ETH</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <p className="text-Softblue">3 days left</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <hr className="border-Softblue w-[90%]" />
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-4 pr-10 md:pr-16 pt-4 pb-4 md:pb-5 md:pt-4">
          <img
            src={avatar}
            alt="avatar"
            className="border rounded-full border-Hite w-9 h-9"
          />
          <p className="text-Softblue">
            Creation of{" "}
            <span className="text-Hite hover:text-Cyan cursor-pointer">
              Jules Wyvern
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
