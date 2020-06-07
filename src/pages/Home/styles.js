import styled from 'styled-components';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #FFF;
        border-radius: 4px;
        padding: 20px;
    }

    img {
        max-width: 250px;
        align-self: center;
    }

    > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
    }

    > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
    }

    button {
        background: #7159C1;
        color: #FFF;
        border-radius: 4px;
        border: none;
        overflow: hidden;
        margin-top: auto;
    }
`;