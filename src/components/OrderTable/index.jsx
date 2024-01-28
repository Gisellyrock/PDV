import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  faDollarSign,
  faXmark,
  faMoneyBill,
  faSync,
  faUser,
  faPrint,
  faEnvelope,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const OrderTable = () => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR');
    const formattedTime = currentDate.toLocaleTimeString('pt-BR');
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div>
      <div className="box-order box-order-top">
        <p className="box-order-text">Pedido/Venda #</p>
        <p>{getCurrentDateTime()}</p>
        <hr className="box-order-divider" />
      </div>
      <div className="box-order boder-order icon-order">
        <FontAwesomeIcon icon={faMoneyBill} className="mx-2" />
        <p className="box-total">R$ 260,00</p>
      </div>
      <div className="box-client">
        <div>
          <p>Cliente Balcão</p>
          <hr className="box-order-divider" />
        </div>
        <div>
          <ul className="box-order-data">
            <li>CPF/CNPJ:</li>
            <li>RG/IE: </li>
            <li>FONE/CEL: </li>
            <li>END. N. COMPLEM. BAIRRO:</li>
          </ul>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <hr className="box-order-divider-white" />
          <button className="btn-order btn-order-green">
            <FontAwesomeIcon icon={faDollarSign} className="mx-2" />
            Concluir
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faPrint} className="mx-2" />
            Recibo
          </button>
          <button className="btn-order btn-order-red">
            <FontAwesomeIcon icon={faXmark} className="mx-2" />
            Cancelar
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faPrint} className="mx-2" />
            Resumo
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faMoneyBill} className="mx-2" />
            Desconto
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
            Enviar Resumo
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faMoneyBill} className="mx-2" />
            Desc. Gerencial
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faSync} className="mx-2" />
            Troca Cliente
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faSync} className="mx-2" />
            Transferir
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faPlus} className="mx-2" />
            Incluir Cliente
          </button>
          <button className="btn-order">
            <FontAwesomeIcon icon={faUser} className="mx-2" />
            Alterar vendedor
          </button>
          <button className="btn-order">Sobre Cliente</button>
        </div>
        <hr className="box-order-divider-white" />
      </div>
    </div>
  );
};
