//COMPONENTS
import ImageGallery from "react-image-gallery";

const Carousel = () => {
  const images = [
    {
      original: "https://i.ibb.co/nBy6GSb/1.jpg",
      thumbnail: "https://i.ibb.co/nBy6GSb/1.jpg",
      originalAlt: "Bici en la playa",
      description:
        "Este soy yo montando bicicleta en la playa ⛱️🌴. Recuerden utilizar  protector solar🌞",
    },
    {
      original: "https://i.ibb.co/wJbHty1/2.jpg",
      thumbnail: "https://i.ibb.co/wJbHty1/2.jpg",
      originalAlt: "Campamento  en las Cies",
      description: "Acampando en las Cies, ¡el agua está fría!❄️",
    },
    {
      original: "https://i.ibb.co/NWQxmV8/3.jpg",
      thumbnail: "https://i.ibb.co/NWQxmV8/3.jpg",
      originalAlt: "Momento de relax en la piscina",
      description:
        "Nada como una siesta en la piscina 💤, ¿les gusta mi flotador?",
    },

    {
      original: "https://i.ibb.co/q7rmJHW/4.jpg",
      thumbnail: "https://i.ibb.co/q7rmJHW/4.jpg",
      originalAlt: "Atardecer en la playa",
      description: "Atardecer en la playa + agua de coco = 💗",
    },
    {
      original: "https://i.ibb.co/LtczDky/5.jpg",
      thumbnail: "https://i.ibb.co/LtczDky/5.jpg",
      originalAlt: "Vespa Tour",
      description: "Me  fui de Tour con la Vespa 🛵, ¡la pasé genial!",
    },
    {
      original: "https://i.ibb.co/W2VZj1v/6.jpg",
      thumbnail: "https://i.ibb.co/W2VZj1v/6.jpg",
      originalAlt: "En el aeropuerto",
      description: "El tiempo vuela y yo también, ¡ese es mi avión!✈️🛫",
    },
  ];

  return (
    <div className="carousel">
      <ImageGallery items={images} />
    </div>
  );
};
export default Carousel;
