import localforage from "localforage";

function displayMessage(message, backgroundColor = 'rgba(0, 0, 0, 0.8)', textColor = 'white') {
    cy.document().then((doc) => {
        const messageDiv = doc.createElement('div');
        messageDiv.innerText = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '10px';
        messageDiv.style.left = '10px';
        messageDiv.style.backgroundColor = backgroundColor;
        messageDiv.style.color = textColor;
        messageDiv.style.padding = '10px';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.zIndex = '9999';
        doc.body.appendChild(messageDiv);
    
        // Remove the message after 3 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 3000); // Remove the message after 3 seconds
    });
}
    
describe('Website Landing', () => {

    before(() => {
        cy.window().then(() => {
            localforage.clear().then(() => {
                displayMessage('localForage data cleared successfully!', 'rgba(0, 128, 0, 0.8)', 'white');
            }).catch((err) => {
                displayMessage(`Failed to clear localForage data: ${err.message}`, 'rgba(255, 0, 0, 0.8)', 'white');
            });
        });
    });
    
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    });

    it('Shows welcome greeting', () => {
        cy.contains('Welcome Visitor!');
        cy.contains('Scroll Down');
    });

    it('Shows sections when scrolled', () => {
        cy.get('.content .section').each(($item) => {
            cy.wrap($item).scrollIntoView();

            cy.wait(500);
        });
    });

    it('Shows 2 buttons at the bottom of the page', () => {
        cy.get('.content .menu').last().scrollIntoView()
            .find('ul li').should('be.visible').and('have.length', 2);
    });

    it('Fetches quotes when quotes button is clicked', () => {
        cy.intercept('GET', '/quotes', { fixture: 'quotes.json' }).as('getQuotes');
        
        cy.get('.content .menu').find('ul li').eq(0).click();

        cy.wait('@getQuotes').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });
    });

    it('Fetches jokes when jokes button is clicked', () => {
        cy.intercept('GET', '/jokes', { fixture: 'jokes.json' }).as('getJokes');
        
        cy.get('.content .menu').find('ul li').eq(1).click();

        cy.wait('@getJokes').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });
    });

    it('Shows the punchline of the joke when "Tell me" button is clicked', () => {
        cy.intercept('GET', '/jokes', { fixture: 'jokes.json' }).as('getJokes');
        
        cy.get('.content .menu').find('ul li').eq(1).click();

        cy.get('.joke button').click();

        cy.get('.joke .punchline').should('be.visible');
    });

    it('Decreases the quotes stored locally when quotes button is clicked again', () => {
        cy.intercept('GET', '/quotes', { fixture: 'quotes.json' }).as('getQuotes');
        
        cy.get('.content .menu').find('ul li').eq(0).click();

        cy.get('.content .stats').find('ul li').eq(1).should('have.text', 'Zen Quotes: 24');
    })

    it('Decreases the jokes stored locally when jokes button is clicked again', () => {
        cy.intercept('GET', '/jokes', { fixture: 'jokes.json' }).as('getJokes');
        
        cy.get('.content .menu').find('ul li').eq(1).click();

        cy.get('.content .stats').find('ul li').eq(0).should('have.text', 'Jokes: 23');
    })
});