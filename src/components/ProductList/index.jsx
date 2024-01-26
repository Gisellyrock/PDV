import { Table, Button } from 'react-bootstrap';

const ProductList = () => {
  const products = [
    {
      item: '1873887 - XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      unitPrice: 10.0,
      discount: 2.0,
      quantity: 3,
    },
    {
      item: '1873887 - XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      unitPrice: 15.0,
      discount: 3.0,
      quantity: 2,
    },
    {
      item: '1873887 - XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      unitPrice: 20.0,
      discount: 4.0,
      quantity: 1,
    },
    {
      item: '1873887 - XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      unitPrice: 12.0,
      discount: 2.5,
      quantity: 4,
    },
  ];

  const handleEdit = (index) => {
    // Lógica para editar o item com o índice fornecido
    console.log(`Editar item ${index}`);
  };

  const handleDelete = (index) => {
    // Lógica para excluir o item com o índice fornecido
    console.log(`Excluir item ${index}`);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">R$ UNIT.</th>
            <th scope="col">R$ DESC.</th>
            <th scope="col">QTD</th>
            <th scope="col">TOTAL</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.item}</th>
              <td>{product.unitPrice.toFixed(2)}</td>
              <td>{product.discount.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>
                {(
                  product.unitPrice * product.quantity -
                  product.discount
                ).toFixed(2)}
              </td>
              <td>
                <Button
                  className="mx-2"
                  variant="primary"
                  onClick={() => handleEdit(index)}
                >
                  Editar
                </Button>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
