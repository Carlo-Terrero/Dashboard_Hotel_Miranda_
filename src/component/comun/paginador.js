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

export const Paginador = (props) => {

    return(
        <Div>
            <p>Showing {props.paginas} of ---- Data</p>

            <div>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </Div>
    )
}