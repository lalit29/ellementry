describe('ellementry e2e flow', function () {

  it("Visit ellementry Homepage", function () {
    cy.visit("https://www.ellementry.com/")
     
    });


      it("Search bowl and click category Serveware / Desserts & Appetisers / Bowl", function () {
        cy.get('._searchIcon').first().click({force: true})
        cy.get('.ais-SearchBox-input').type("bowl")
        cy.contains('Categories')
        cy.get('.a-more').first().click()
        cy.url().should('include', 'bowl')
         
        });

        it("Goto PDP, Add to bag and goto Bag", function () {
         cy.visit('https://www.ellementry.com/sienna-terracotta-bowl-with-lid-tceta2441')
         cy.get('._waitingTxt').first().click()
         cy.get('.view-bag').last().click({force: true})       
       });

       it("Verify Cart page and goto address", function () {
        cy.url().should('include', 'shopping-bag')  
        cy.get('.btn-continue').first().click()
      });

      it("Add address verify details", function () {
        cy.url().should('include', 'checkout')  
        cy.get('input[name="billing_pincode"]').type('401202')
        cy.get('input[name="billing_firstname"]').type('lalit')
        cy.get('input[name="email"]').type('abc@gmail.com')
        cy.get('input[formcontrolname="mobile"]').type('9999999999')
        cy.get('input[formcontrolname="billing_address"]').type('test')
        cy.get('button[type="submit"]').first().click({force: true})
        
      });

     
        

});