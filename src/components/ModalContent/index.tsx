import React, { useState } from "react";
import * as Styles from "./styles";

interface ModalContentProps {
  title: string;
  address: string;
  imgSrc: string;
  reference?: string;
  map: string;
  onCloseModal: () => void;
  googleMapUrl?: string;
  kitDownloadLink?: string;
  galleryImages?: string[];
}

export default function ModalContent({
  title,
  address,
  reference,
  imgSrc,
  map,
  onCloseModal,
  kitDownloadLink,
}: ModalContentProps) {
  const [currentImage, setCurrentImage] = useState(imgSrc);

  // const images = [
  //   imgSrc,
  //   "/img/guaruja.png",
  //   "/img/iguatemi.png",
  //   "/img/nonato.png",
  //   "/img/norte.png",
  //   "/img/redentora.png",
  // ];

  // function handleImageClick(img: string) {
  //   setCurrentImage(img);
  // }

  return (
    <Styles.Wrapper>
      <Styles.CloseButtn onClick={onCloseModal} />
      <Styles.Main>
        <Styles.AsideImage
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <Styles.Content>
          <Styles.ContentText>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>
              <b>Referência: </b>
              {reference}
            </p>
            <Styles.Button
              href={kitDownloadLink}
              download={kitDownloadLink?.split("/").slice(-1)}
            >
              KIT DIGITAL PARA BAIXAR
            </Styles.Button>
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
      {/* <Styles.Gallery>
        {images.map((img) => (
          <Styles.GalleryItem
            key={img}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => handleImageClick(img)}
            className={img === currentImage ? "gallery__image-active" : ""}
          />
        ))}
      </Styles.Gallery> */}
      <iframe
        // src={`https://www.google.com/maps/?q=${map}&output=embed`}
        src={`https://maps.google.com/maps?q=${map}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
        className="modal__map-mobile"
      />
    </Styles.Wrapper>
  );
}
