import "./PaletaLista.css";
import {useState } from "react";
import {useEffect} from 'react';
import PaletaItem from "components/PaletaItem/PaletaItem";
import { PaletaService } from "services/PaletaService";
import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";


function PaletaLista({ paletaCriada }) {
  const [paletas, setPaletas] = useState([]);

  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const [paletaModal, setPaletaModal] = useState(false);

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    setPaletaModal(response);
  };

  
  const adicionaPaletaLista = (paleta) => {
    const lista = [...paletas, paleta];
    setPaletas(lista);
};

useEffect(() => {
    if (paletaCriada) adicionaPaletaLista(paletaCriada);
}, [paletaCriada]);

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaItem
        
          key={`PaletaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(paletaId) => getPaletaById(paletaId)}
        />

        
      ))}
      {paletaModal && ( <PaletaDetalhesModal paleta={paletaModal} closeModal={() => setPaletaModal(false)} />)}
    </div>
  );
}

export default PaletaLista;