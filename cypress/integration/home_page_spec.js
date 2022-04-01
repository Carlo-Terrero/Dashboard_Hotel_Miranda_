describe('The Auth Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/')

        cy.get('.mail')
            .type('carlos@gmail.com')
            .should('have.value', 'carlos@gmail.com')

        cy.get('.pass')
            .type('ponko')
            .should('have.value', 'ponko')

        cy.get('.sumit').click()
    })
})





/* describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        //Seleccionamos y clicamos esta parte
        cy.contains('type').click()

        //afirmamos la dir http a la que estamos clicando
        cy.url().should('include','/commands/actions')

        //Obtenga una entrada, escríbala y verifique que el valor se haya actualizado
        cy.get('.action-email') // seleccionamos un elemento basado en una clase CSS.
            .type('fake@email.com') // para ingresar texto en la entrada seleccionada
            .should('have.value', 'fake@email.com') // podemos verificar que el valor de la entrada refleja el texto que se escribió
    })
    
    
    /* it('Does not do much!', () => {
        expect(true).to.equal(true)
    }) 
}) */