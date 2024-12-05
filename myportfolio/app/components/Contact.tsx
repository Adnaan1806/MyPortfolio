import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:max-[42px]:"
    >
      <div className="flex flex-col md:flex-row gap-5 md:justify-between md:w-full">
        <h2 className="font-semibold text-[22px] md:text-[40px] md:max-w-[462px]">
          Want me on your team? Let&#8217;s make it happen ✨
        </h2>
        <div className="flex flex-col gap-5 items-center md:items-end">
          <a
            href="mailto:adnaanjanees0@gmail.com"
            className="self-center md:self-start bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/l font-normal"
          >
            Let's get in touch <img src="/mail_icon.svg" alt="mail icon" />
          </a>
          <div className="flex flex-row gap-1">
            <a href="https://github.com/Adnaan1806" className="contact-button">
              <Image
                src="/github_logo_dark.svg"
                alt="Github icon"
                height={16}
                width={17}
                className="hidden dark:block"
              />
               <Image
                src="/github_logo.svg"
                alt="Github icon"
                height={16}
                width={17}
                className="dark:hidden"
              />
            </a>
            <a href="https://x.com/home" className="contact-button">
              <Image
                src="/twitter_icon_dark.svg"
                alt="twitter icon"
                height={14}
                width={17}
                className="hidden dark:block"
              />
               <Image
                src="/twitter_icon.svg"
                alt="twitter icon"
                height={14}
                width={17}
                className="dark:hidden"
              />
            </a>
            <a href="https://stackoverflow.com/" className="contact-button">
              <Image
                src="/stackoverflow_icon_dark.svg"
                alt="Stackoverflow icon"
                height={14}
                width={17}
                className="hidden dark:block"
              />
               <Image
                src="/stackoverflow_icon.svg"
                alt="Stackoverflow icon"
                height={14}
                width={17}
                className="dark:hidden"
              />
            </a>
          </div>
        </div>
      </div>
      <small>Copyright &copy; Adnaan Janees 2024</small>
    </section>
  );
};

export default Contact;
