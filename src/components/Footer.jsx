import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-5 dark:bg-gray-900">
      <div className="w-10/12 m-auto">
        <div className="footer grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
          <ul>
            <h2 className="mb-3 font-bold text-xl ">ShopTime</h2>
            <li className="">Biz Kimiz</li>
            <li className="">Kariyer</li>
            <li className="">Sürdürülebilirlik</li>
            <li className="">iletişim</li>
          </ul>
          <ul className="cursor-pointer">
            <h2 className="mb-3 font-bold text-xl ">Kampanyalar</h2>
            <li>Kampanyalar </li>
            <li>Alışveriş Kredisi</li>
            <li>Etik Üyelik </li>
            <li>Hediye Fikirleri</li>
          </ul>
          <ul className="cursor-pointer">
            <h2 className="mb-3 font-bold text-xl ">Satıcı</h2>
            <li>ShopTime'da Satış Yap</li>
            <li>Temel Kavramlar</li>
            <li>ShopTime Akademi </li>
            <li>Güvenlik </li>
          </ul>
          <ul className="cursor-pointer">
            <h2 className="mb-3 font-bold text-xl ">Yardım</h2>
            <li>Sıkça Sorulan Sorular </li>
            <li>Canlı Yayın / Asistan</li>
            <li>Nasıl İade Edebilirim</li>
            <li>İşlem Rehberi</li>
          </ul>
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <h1 className="mb-3 font-bold text-2xl ">Sosyal medya</h1>
        </div>

        <div className="flex justify-center items-center">
          <ul className="flex gap-10 ">
            <li className="rounded-full p-2 text-2xl bg-[#3B5998] text-white hover:bg-[#5f73a0]">
              <a href="https://www.facebook.com/?locale=tr_TR">
                <RiFacebookFill />
              </a>
            </li>
            <li className=" rounded-full p-2 text-2xl bg-[#DB3173] text-white hover:bg-[#b86787]">
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
            <li className=" rounded-full p-2 text-2xl bg-[#E70005] text-white hover:bg-[#e70004d5]">
              <a href="https://www.youtube.com/?app=desktop&hl=tr">
                <FiYoutube />
              </a>
            </li>
            <li className=" rounded-full p-2 text-2xl bg-[#010101] text-white hover:bg-[#141414]">
              <a href="https://x.com/?lang=tr">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
