import Image from "next/image";
import logo from '../../../../public/logo-footer.svg'

import facebookLogo from '../../../../public/facebook_line.svg'
import youtubeLogo from '../../../../public/youtube-line.svg'
import instaLogo from '../../../../public/insta.svg'
import { footerBlock } from "./footer.data";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-bgDark text-white md:flex justify-between md:justify-around">
      <div className="flex flex-col md:justify-center md:items-center">
        <Image src={logo} alt="Logo" width={193} height={72} />
        <span className="flex pt-6 gap-6">
          <Image src={facebookLogo} alt="facebookLogo" width={32} height={32}/>
          <Image src={youtubeLogo} alt="youtubeLogo" width={32} height={32}/>
          <Image src={instaLogo} alt="instaLogo" width={32} height={32}/>
        </span>
      </div>
      <div className="md:flex md:space-x-5">
        {footerBlock.length ? (
          footerBlock.map((item: any) => {
            return (
              <div key={item.head} className="pt-8 md:pt-0">
                <h2 className="pb-6 text-xl text-gray">{item.head}</h2>
                {item.subHeaders.map((el: string[]) => {
                  return <p className="text-base pb-4 last:pb-0">{el}</p>;
                })}
              </div>
            );
          })
        ) : (
          <div>Not Data</div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
