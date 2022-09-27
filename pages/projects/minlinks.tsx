import * as React from "react";
import type { NextPage } from "next";
import CloseNav from "../../components/navigation/CloseNav";
import MinlinksHome from "../../public/images/minlinks-home.png"
const Minlinks: NextPage = () => {
  return (
    <div className="container mx-auto p-8 text-black dark:text-[#f0f2f8]">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-5xl text-black dark:text-[#f0f2f8]">
            Minlinks
          </h2>
          <a className="underline block" href="https://Minlinks.vercel.app/">
            Visit Minlinks
          </a>
        </div>
        <h3 className="text-2xl font-medium text-black dark:text-[#f0f2f8] py-6">
          A public bookmark for resources I have found across the web.
        </h3>

        <div className="flex items-center">
          <p className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
            Web Application
          </p>
          <p className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
            React
          </p>
          <p className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
            Typescript
          </p>
          <p className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
            TailwindCSS
          </p>
        </div>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>

        <img src={MinlinksHome.src} alt="minlinks-homepage" />

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Purpose and Goal.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Problems and Thought Process.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Lessons Learned.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Next Steps.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>
      </div>
    </div>
  );
};

export default Minlinks;