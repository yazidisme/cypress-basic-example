//Test scenario
describe('instagram login', function(){
    
    //Test case
    it('valid login', function(){
        
        //Visit page at url base from cypress.json
        cy.visit('/')

        //Find an visible element on 'main' that containing 'Sign Up' text
        cy.get('main').should('be.visible').and('contain', 'Sign up')
        
        //Find element with a tag on "_g9ean" paragraph class that containing 'Log in' text
        cy.get('p._g9ean>a')
        .contains('Log in')
        //The element must have attribute href with "/accounts/login/" value
        .should('have.attr', 'href', '/accounts/login/')
        //Click and is that element not in the DOM after the click
        .click().and('not.exist')
        
        //Find an visible element on 'main' that containing 'Log in' text
        cy.get('main').should('be.visible').and('contain', 'Log in')
        
        //Find input element with _ph6vk _jdqpn _o716c class on 1st child of _t296e div tag class on _3jvtb form class
        cy.get('form._3jvtb>div._t296e:nth-child(1)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c')
        //Focus on a DOM element
        .focus()
        //Type "username" into element
        .type('YOUR_USERNAME')
        //Make a focused DOM element blur
        .blur()

        //Find input element with _ph6vk _jdqpn _o716c class on 2nd child of _t296e div tag class on _3jvtb form class
        cy.get('form._3jvtb>div._t296e:nth-child(2)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c')
        //Focus on a DOM element
        .focus()
        //Type "password" into element
        .type('YOUR_PASSWORD')
        //Make a focused DOM element blur
        .blur()

        //Find button element with _qv64e _gexxb _4tgw8 _njrw0 class that containing 'Log in' text
        cy.get('button._qv64e._gexxb._4tgw8._njrw0').contains('Log in')
        //Click and is that element not in the DOM after the click
        .click().and('not.exist')

        //Find an visible element with _dzwdj _rga4h div tag class that containing 'Notifications' text
        cy.get('div._dzwdj._rga4h')
        .should('be.visible')
        .and('contain', 'Notifications')
    })
})
