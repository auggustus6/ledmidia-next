import React, { useState } from "react";
import * as Styles from "./styles";

export default function ModalContent() {
  const [currentImage, setCurrentImage] = useState("/img/guaruja.png");

  const images = [
    "/img/guaruja.png",
    "/img/iguatemi.png",
    "/img/nonato.png",
    "/img/norte.png",
    "/img/redentora.png",
  ];

  function handleImageClick(img: string) {
    setCurrentImage(img);
  }

  return (
    <Styles.Wrapper>
      <Styles.Main>
        <Styles.AsideImage
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <Styles.Content>
          <Styles.ContentText>
            <h2>Redentora</h2>
            <h3>Rua bernardino de Campos</h3>
            <Styles.Button>KIT DIGITAL PARA BAIXAR</Styles.Button>
          </Styles.ContentText>
          <Styles.ContentMap
          // style={{ backgroundImage: `url(/img/guarujaHover.png)` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.9725595030973!2d-49.38576947027319!3d-20.822700319409243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb3d09556c195%3A0x7f88c06355b215a2!2sPosto%20Monte%20Carlo%20Guaruj%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1673996838521!5m2!1spt-BR!2sbr"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Styles.ContentMap>
        </Styles.Content>
      </Styles.Main>
      <Styles.Gallery>
        {images.map((img) => (
          <Styles.GalleryItem
            key={img}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => handleImageClick(img)}
            className={img === currentImage ? "gallery__image-active" : ""}
          />
        ))}
      </Styles.Gallery>
    </Styles.Wrapper>
  );
}
