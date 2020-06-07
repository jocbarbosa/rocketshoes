import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

const Home = () => {
    return (
        <ProductList>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                <strong>Tenis Nike</strong>
                <span>R$ 150,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                <strong>Tenis Nike</strong>
                <span>R$ 150,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                <strong>Tenis Nike</strong>
                <span>R$ 150,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                <strong>Tenis Nike</strong>
                <span>R$ 150,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                <strong>Tenis Nike</strong>
                <span>R$ 150,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis Nike" />
                <strong>Tenis Nike</strong>
                <span>R$ 150,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    )
}

export default Home;