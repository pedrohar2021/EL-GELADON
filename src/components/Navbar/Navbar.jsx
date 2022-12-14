import "./Navbar.css";
import { ActionMode } from "constants/index";
import sacola from "assets/icons/sacola.svg";
import criar from "assets/icons/criar.svg";
import atualizar from "assets/icons/atualizar.svg";
import deletar from "assets/icons/deletar.svg";
import logo from "assets/logo.svg";

function Navbar({ createPaleta, updatePaleta, mode, deletePaleta, openBag }) {
  return (

    <div className="Home__header Header">

      <div className="row">

      <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__paleta Paleta ${
              mode === ActionMode.ATUALIZAR && "Paleta--ativa"
            }`}
            onClick={() => updatePaleta()}
          >
            <img
              src={atualizar}
              width="40px"
              className="Paleta__icone"
              alt="Editar Paleta"
            />
          </button>

          <button
            type="button"
            className={`Opcoes__paleta Paleta ${
              mode === ActionMode.DELETAR && "Paleta--deletar"
            }`}
            onClick={() => deletePaleta()}
          >
            <img
              src={deletar}
              width="40px"
              className="Paleta__icone"
              alt="Deletar paleta"
            />
          </button>

          <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => createPaleta()}
          >
            <img
              src={criar}
              width="40px"
              className="Paleta__icone"
              alt="Adicionar Paleta"
            />
          </button>
          </div>


          <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
          
          <div className="Opcoes__sacola Sacola" onClick={openBag}>
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        
      </div>
      
    </div>
  );
}

export default Navbar;