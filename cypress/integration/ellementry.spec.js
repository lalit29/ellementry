describe('ellementry automated test scripts', function () {

    it.skip("Search decor and click category Decor ", function () {
      cy.visit("https://www.ellementry.com/")
      cy.get('._searchIcon').first().click({force: true})
      cy.get('.ais-SearchBox-input').type("decor")
      cy.contains('Categories')
      cy.get('.a-more').first().click()
      cy.url().should('include', 'decor')

      });

      it("Search bowl and click category Serveware / Desserts & Appetisers / Bowl", function () {
        cy.visit("https://www.ellementry.com/")
        cy.get('._searchIcon').first().click({force: true})
        cy.get('.ais-SearchBox-input').type("bowl")
        cy.contains('Categories')
        cy.get('.a-more').first().click()
        cy.url().should('include', 'bowl')
         
        });


        

});