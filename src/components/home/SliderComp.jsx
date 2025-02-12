import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="!flex items-center justify-between px-6 mt-20">
          <div>
            <div className="text-5xl font-bold">Carle Kadın Çanta</div>
            <div className="text-xl my-3">
              Tüm kombinlerinize uyum sağlayacak, 2 adet fermuarlı gözlü çapraz
              çanta. En son fiyatları ve oda durumunu öğrenmek için web sitesini
              kontrol edin.
            </div>
            <button className=" rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 mb-3">
              İncele
            </button>
          </div>
          <img
            src="https://png.pngtree.com/png-clipart/20231008/ourmid/pngtree-luxury-designer-handbag-a-symbol-of-exquisite-transparent-background--2-png-image_10197274.png"
            alt=""
            width={300}
          />
        </div>
        <div className="!flex items-center justify-between px-6 mt-16">
          <div>
            <div className="text-5xl font-bold">
              Mini Android Akıllı Telefon
            </div>
            <div className="text-xl my-3">
              Kilitsiz Android Telefon Çift SIM, SOYES MTK6580 Dört Çekirdekli
              1GB 8GB 5MP (Siyah) Super Mini Android akıllı telefonla, avucunuza
              sorunsuz bir şekilde uyan kompakt bir boyuta sahip eşsiz bir
              taşınabilirlik yaşayın.
            </div>
            <button className=" rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 mb-3">
              İncele
            </button>
          </div>
          <img
            src="https://mini-telefon.com/wp-content/uploads/2025/01/Mini_Telefon_Android_siyah-removebg-preview.png"
            alt=""
            width={300}
          />
        </div>
        <div className="!flex items-center justify-between px-6 mt-18">
          <div>
            <div className="text-5xl font-bold">Kadın Aksesuar Yüzük</div>
            <div className="text-xl my-3">
              Özel günlerinizde sevdiklerinizi mutlu etmek veya kendinizi
              şımartmak için aksesuar setlerimize göz at. Daha fazla model için
              mağazamızı ziyaret etmeyi unutma.
            </div>
            <button className=" rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 mb-3">
              İncele
            </button>
          </div>
          <img
            src="https://static.ticimax.cloud/61576/uploads/urunresimleri/buyuk/tamtur-setina-kadin-alyans-ae2-4c.png"
            alt=""
            width={300}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
