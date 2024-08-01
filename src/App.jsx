import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";

import cardImg1 from "./assets/img/card/card-4col-img1.png";
import cardImg2 from "./assets/img/card/card-4col-img2.png";
import cardImg3 from "./assets/img/card/card-4col-img3.png";
import cardImg4 from "./assets/img/card/card-4col-img4.png";

import cardImgCol1 from "./assets/img/card/card-3col-img1.png";
import cardImgCol2 from "./assets/img/card/card-3col-img2.png";
import cardImgCol3 from "./assets/img/card/card-3col-img3.png";
import Section from "./components/Section";
import Accordion from "./components/Accordion";
import Form from "./components/Form";
import Footer from "./components/Footer";

const cardData = [
  {
    id: 1,
    imgSrc: cardImg1,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
  {
    id: 2,
    imgSrc: cardImg2,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
  {
    id: 3,
    imgSrc: cardImg3,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
  {
    id: 4,
    imgSrc: cardImg4,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
];
const cardDataCol3 = [
  {
    id: 1,
    imgSrc: cardImgCol1,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
  {
    id: 2,
    imgSrc: cardImgCol2,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
  {
    id: 3,
    imgSrc: cardImgCol3,
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos totam quasi laboriosam aspernatur ex!",
  },
  
];
const accordionData = [
  {
    title: "Accordion Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Accordion Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Accordion Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Accordion Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Accordion Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Accordion Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <h1>Carousel</h1>
      </div>
      <Carousel />
      <div className="container">
          <h1>Card</h1>
          <h3>4 Column card on PC</h3>
        <div className="grid">
          {cardData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
          <h3>3 Column card on PC</h3>
        <div className="grid2">
        {cardDataCol3.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
        <Section />
        <h1>Accordion</h1>
        <div>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;
