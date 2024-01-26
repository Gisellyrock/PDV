import { useState } from 'react';
import './style.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    produto: '',
    quantidade: '',
    vendedor: '',
    valorUnitario: 'R$0,00',
    desconto: 'R$0,00',
    observacoes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <form className="product-container" onSubmit={handleSubmit}>
      <div className="d-flex">
        <div className="product-back-green input-space">
          <label htmlFor="produto" className="input-product">
            Produto
            <input
              type="text"
              id="produto"
              name="produto"
              value={formData.produto}
              onChange={handleChange}
              className="form-control"
              autoFocus
            />
          </label>
        </div>
        <div className="product-back-yellow input-space">
          <label htmlFor="quantidade" className="input-others">
            Quantidade
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              value={formData.quantidade}
              onChange={handleChange}
              className="form-control"
            />
          </label>

          <label htmlFor="vendedor" className="input-others">
            Vendedor
            <input
              type="text"
              id="vendedor"
              name="vendedor"
              value={formData.vendedor}
              onChange={handleChange}
              className="form-control"
            />
          </label>

          <label htmlFor="valorUnitario" className="input-others">
            Valor Unitário
            <input
              type="text"
              id="valorUnitario"
              name="valorUnitario"
              value={formData.valorUnitario}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="product-back-red input-space input-descount">
          <label htmlFor="desconto">
            Desconto
            <input
              type="text"
              id="desconto"
              name="desconto"
              value={formData.desconto}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
      </div>
      <div className="input-observation product-back-green input-space ">
        <label htmlFor="observacoes">
          Observações
          <input
            id="observacoes"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <button type="submit" className="btn btn-success btn-plus mt-4">
          +
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
