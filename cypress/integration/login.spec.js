describe('ellementry e2e Logged in Flow', function () {

      it("Login ", function () {
        cy.visit("https://www.ellementry.com/")
        cy.get('.dropdown-toggle').first().click()
        cy.get('.btn-primary').first().click()
        //cy.get('.pointer').first().click({force: true})
        cy.get('.form-container').children('div').children('strong').contains('Email').click()
        cy.get('input[formcontrolname="emailMobile"]').type('lalitsukhwal296@gmail.com')
        cy.wait(1000)
        cy.get('input[formcontrolname="password"]').type('123O@ngo.')
        cy.get('.login-with-password').children('form').children('button').click({force: true})
        //cy.get('.btn-primary').first().click()
    
        });
        it("Search decor and click category Decor ", function () {
         // cy.visit("https://www.ellementry.com/")
          cy.get('._searchIcon').first().click({force: true})
          cy.get('.ais-SearchBox-input').type("decor")
          cy.contains('Categories')
          cy.get('.a-more').first().click()
          cy.url().should('include', 'decor')
    
          });

});