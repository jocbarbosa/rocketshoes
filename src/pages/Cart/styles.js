import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #FFF;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background: #7159C1;
        color: #FFF;
        border: none;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        text-transform: uppercase;

        &:hover {
            background: ${darken(0.13, '#7159C1')};
            transition: 0.5s;
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        vertical-align: middle;
        border-bottom: 1px solid #EEE;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        margin-top: 5px;
        font-size: 16px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
    }

    input {
            border: 1px solid #DDD;
            color: #777;
            padding: 6px;
            width: 50px;
    }

    button {
        background: none;
        border: none;
        padding: 6px;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;