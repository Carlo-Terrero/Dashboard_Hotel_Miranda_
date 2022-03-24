import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
    margin-top: 3rem;
    background: green;
`;

export const Paginador = (props) => {

    return(
        <Div>
            Soy paginador con {props.paginas} pgs
        </Div>
    )
}