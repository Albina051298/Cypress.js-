describe('Покупка аватара', function () 
{                                
   it('e2e тест на покупку нового аватара для тренера', function () {  
        cy.visit('https://pokemonbattle.ru/');                             
        cy.get('input[type="email"]').type('albina.sardaryan@yandex.ru');    
        cy.get('input[type="password"]').type('1232D');      
        cy.get('button[type="submit"]').click();                      
        cy.get('.header__btns > [href="/shop"]').click();               
        cy.get('.available > button').first().click();                  
        cy.get('.credit').type('4620869113632996');                     
        cy.get('.k_input_ccv').type('125');                             
        cy.get('.k_input_date').type('1225');                           
        cy.get('.k_input_name').type('NAME');                         
        cy.get('.pay-btn').click();                                     
        cy.get('#cardnumber').type('56456');                           
        cy.get('.payment__submit-button').click();                 
        cy.contains('Покупка прошла успешно').should('be.visible');     
    });
});


