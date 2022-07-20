import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Genero</th>
            <th>Categora</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/2021</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberlandia</td>
            <td>Crédito</td>
            <td>R$: 4.556,00</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/2021</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberlandia</td>
            <td>Crédito</td>
            <td>R$: 4.556,00</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/2021</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberlandia</td>
            <td>Crédito</td>
            <td>R$: 4.556,00</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/2021</td>
            <td>Feminino</td>
            <td>Roupas</td>
            <td>Uberlandia</td>
            <td>Crédito</td>
            <td>R$: 4.556,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
