import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;

    p {
        color: grey;
    }

    div{
        display: flex;
        gap: 1rem;
    }
`;

const ButtonMove = styled.button`
    height: 2.5rem;
    width: 5rem;
    border-radius: 5px;
    border: 1px #115a11ad solid;
    color: #013401;
    background-color: white;
    cursor: pointer;
`;

const ButtonPage = styled(ButtonMove)`
    width: 2.5rem;
    color: ${props => props.active ? "#013401" : "white"};
    background-color: ${props => props.active ? "white" : "#013401"} ;
    /* background-color: red; */

`;


export const Paginador = ({limit, elementList, currentPage, setCurrentPage}) => {

    const pageNumbers = [];

    const totalPages = () => {
        return Math.ceil(elementList / limit)
    }

    for (let i = 1; i <= totalPages(); i++) {
        pageNumbers.push(i)
    }

    return(
        <Div>
            <p>Showing {currentPage} of {totalPages()} pages</p>

            <div>
                {currentPage <= 1 ? '' :<ButtonMove onClick={() => setCurrentPage(currentPage - 1)}>
                    Prev
                </ButtonMove>}

                {
                    pageNumbers.map((noPage, i) => 
                        <ButtonPage active={currentPage === noPage} key={i} onClick={() => setCurrentPage(noPage)}>{noPage}</ButtonPage>
                    )
                }

                {currentPage === totalPages() ? '' : <ButtonMove onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </ButtonMove>}
            </div>
        </Div>
    )
}