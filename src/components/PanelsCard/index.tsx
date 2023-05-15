import * as S from "./styles";
import painels from "../../utils/mocks";
import { useState } from "react";
import SimpleModal from "../SimpleModal";
import ModalContent from "../ModalContent";

type ModalsType = {
  [key: string]: boolean;
};

const PanelsCard = () => {
  const [modals, setModals] = useState<ModalsType>(
    painels.reduce((antPainel, painel) => {
      return { ...antPainel, [painel.title]: false };
    }, {}),
  );

  function handleOnCloseModal(painelName: string) {
    setModals({ ...modals, [painelName]: false });
  }

  function handleOpenModal(painelName: string) {
    setModals({ ...modals, [painelName]: true });
  }

  return (
    <S.ContainerPanelsCard>
      {painels.map((painel, index) => (
        <S.PanelsWrapper key={index}>
          <S.Painel
            backgroundImg={painel.backgroundImg!}
            onClick={() => handleOpenModal(painel.title)}
          >
            <S.ContentPainel>
              <h1>{painel.title}</h1>
              <p>{painel.address}</p>
            </S.ContentPainel>
          </S.Painel>
          <SimpleModal
            isOpen={modals[painel.title]}
            onCloseModal={() => handleOnCloseModal(painel.title)}
          >
            <ModalContent
              address={painel.address}
              title={painel.title}
              reference={painel.reference}
              imgSrc={painel.backgroundImg!}
              map={painel.map}
              kitDownloadLink={painel.download}
              onCloseModal={() => handleOnCloseModal(painel.title)}
            />
          </SimpleModal>
        </S.PanelsWrapper>
      ))}
    </S.ContainerPanelsCard>
  );
};

export default PanelsCard;
