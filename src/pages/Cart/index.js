import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Total, ProductTable, Container } from './styles';

const Cart = () => {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th></th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                        </td>
                        <td>
                            <strong>Tenis Nike</strong>
                            <span>R$ 129.90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159C1" />
                                </button>
                                <input type="number" readonly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159C1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 258,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159C1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 125,00</strong>
                </Total>
            </footer>
        </Container>
    )
}

export default Cart;