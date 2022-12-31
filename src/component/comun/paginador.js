import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin-top: 3rem;

    p {
        color: grey;
    }
`;

export const Paginador = ({limit, elementList, currentPage, setCurrentPage}) => {

    const totalPages = () => {
        return Math.ceil(elementList / limit)
    }

    return(
        <Div>
            <p>Showing {currentPage} of {totalPages()} pages</p>

            <div>
                {currentPage <= 1 ? '' :<button onClick={() => setCurrentPage(currentPage - 1)}>
                    Prev
                </button>}

                {currentPage === totalPages() ? '' : <button onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>}
            </div>
        </Div>
    )
}