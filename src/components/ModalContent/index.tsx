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
              src={map}
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
        src={map}
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
        className="modal__map-mobile"
      />
    </Styles.Wrapper>
  );
}
