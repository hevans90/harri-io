/**
 * This spec file is driven by the mock-core. Setting the mock core to different
 * modes via its external API will make it behave differently. These tests check
 * that based on these behaviours, the UI reacts correctly.
 */

// This interface currently has to be copied from mock-core thanks to this evil bug
// https://github.com/nrwl/nx/issues/883
interface MockMode {
  gameFlow?: 'happy' | 'sad';
  termsRequired?: boolean;
  acceptedTerms?: boolean;
  hasFunds?: boolean;
  hasFunPass?: boolean;
  funPassRequired?: boolean;
  web3Status?: number;
  address?: string;
  checkMarketingOptIn?: boolean;
  optedInToMarketing?: boolean;
  geolocationAllowed?: boolean;
}

const setMockMode = (mode: MockMode) =>
  cy
    .window()
    .then(win =>
      win['localStorage']['setItem']('mockCoreMode', JSON.stringify(mode)),
    );

describe('marketing opt-in', () => {
  afterEach(() => {
    cy.visit('/');
  });

  it('should open a marketing opt-in dialog if applicable', () => {
    setMockMode({
      checkMarketingOptIn: true,
      funPassRequired: true,
      hasFunPass: true,
      optedInToMarketing: false,
    });
    cy.visit('/');
    cy.get('fun-marketing-opt-in-dialog').should('be.visible');
    cy.get('#acceptMarketingOptInButton').should('be.disabled');
    cy.get('#acceptMarketingOptInCheckBox > label').click();
    cy.get('#acceptMarketingOptInButton').should('not.be.disabled');
    cy.get('#acceptMarketingOptInButton').click();
    cy.get('fun-marketing-opt-in-dialog').should('not.exist');
  });

  it('should NOT open a marketing opt-in dialog if not applicable', () => {
    setMockMode({
      checkMarketingOptIn: false,
      funPassRequired: false,
      hasFunPass: false,
      optedInToMarketing: false,
    });
    cy.visit('/');
    cy.get('fun-marketing-opt-in-dialog').should('not.exist');
  });
});

describe('games', () => {
  afterEach(() => {
    cy.visit('/');
  });
  it('should route to sign up if user does not have funds', () => {
    setMockMode({ hasFunds: false });
    cy.visit('/');

    cy.get('#play-button')
      .first()
      .click({ force: true });

    cy.url().should('include', 'sign-up');
  });

  it('should route to sign up if user has not accepted terms', () => {
    setMockMode({ acceptedTerms: false });
    cy.visit('/');

    cy.get('#play-button')
      .first()
      .click({ force: true });

    cy.url().should('include', 'sign-up');
  });

  it('should route to game if sign up complete', () => {
    setMockMode({});
    cy.visit('/');

    cy.get('#play-button')
      .first()
      .click({ force: true });

    cy.url().should('include', 'play');
  });
});

describe('[blockchain] in game dialogs', () => {
  describe('happy path', () => {
    afterEach(() => {
      cy.visit('/');
    });
    it('should display dialogs and update account bar correctly in response to happy CORE events', () => {
      setMockMode({ gameFlow: 'happy' });

      cy.visit('/');

      cy.get('#play-button')
        .first()
        .click({ force: true });

      cy.get('fun-setup-game').should('exist');
      cy.get('#startGameButton').should('be.visible');
      cy.get('#startGameButton').click();

      cy.get('fun-metamask-prompt').should('be.visible');
      cy.get('fun-game-loading').should('be.visible');
      cy.get('fun-game-loading').should('not.exist');
      cy.get('fun-in-game-bar').should('be.visible');

      cy.get('#totalBet').should('be.visible');
      cy.get('#totalBet').contains('3400');

      cy.get('#playerBalanceAmount').should('be.visible');
      cy.get('#playerBalanceAmount').contains('5,000,000');

      cy.get('#houseBalanceAmount').should('be.visible');
      cy.get('#houseBalanceAmount').contains('10,000');

      cy.get('#closeGameButton').click();
      cy.get('fun-confirm-end-game').should('be.visible');
      cy.get('#cashoutPlayerBalance').contains('5000000');
      cy.get('#confirmEndGameButton').click();
      cy.get('fun-cashing-out').should('be.visible');

      cy.url().should('include', '/home');
      cy.get('fun-lobby-bar').should('exist');
      cy.get('fun-game-bar').should('not.exist');
    });
  });

  describe('unhappy path', () => {
    afterEach(() => {
      cy.visit('/');
    });
    it('should display dialogs and update account bar correctly in response to unhappy CORE events', () => {
      setMockMode({ gameFlow: 'sad' });
      cy.visit('/');

      cy.get('#play-button')
        .first()
        .click({ force: true });

      cy.get('fun-setup-game').should('exist');
      cy.get('#startGameButton').should('be.visible');
      cy.get('#startGameButton').click();

      cy.get('fun-metamask-prompt').should('be.visible');
      cy.get('fun-game-loading').should('be.visible');
      cy.get('fun-game-loading').should('not.exist');

      cy.get('fun-network-delay').should('be.visible');
      cy.get('fun-network-delay').should('not.exist');

      cy.get('fun-resuming-game').should('be.visible');
      cy.get('fun-resuming-game').should('not.exist');

      cy.get('fun-dispute').should('be.visible');
      cy.contains('resolve1').click();

      cy.get('fun-dispute').should('be.visible');
      cy.contains('reject2').click();

      cy.get('fun-dispute-cash-out').should('be.visible');
      cy.get('fun-dispute-cash-out').should('not.exist');

      cy.url().should('include', '/home');
      cy.get('fun-lobby-bar').should('exist');
      cy.get('fun-game-bar').should('not.exist');
    });
  });
});

describe('[demo] in game dialogs', () => {
  describe('happy path', () => {
    afterEach(() => {
      cy.visit('/');
    });
    it('should work', () => {
      cy.visit('/');

      cy.get('#demo-button')
        .first()
        .click({ force: true });

      cy.get('fun-in-game-bar').should('be.visible');

      cy.get('#closeGameButton').click();

      cy.url().should('include', '/home');
      cy.get('fun-lobby-bar').should('exist');
      cy.get('fun-game-bar').should('not.exist');
    });
  });
});

describe('autocomp', () => {
  describe('after signing terms', () => {
    afterEach(() => {
      cy.visit('/');
    });
    it('should display a snackbar and dialog at the correct time in response to CORE events, and persist on app reload', () => {
      setMockMode({ acceptedTerms: false });
      cy.visit('/');
      cy.get('fun-signup-toolbar').should('be.visible');

      cy.get('#signUpButton').should('exist');
      cy.get('#signUpButton').click();

      cy.get('#signTermsAndConditionsButton').should('exist');
      cy.get('#signTermsAndConditionsButton').click();
      cy.get('fun-user-compensation-progress').should('exist');
      // Eth amount returned from mock
      cy.get('fun-user-compensation-progress').contains('123');
      // Fun amount  returned from mock
      cy.get('fun-user-compensation-progress').contains('4,567');

      cy.visit('/');

      cy.get('fun-user-compensation-progress').should('exist');

      cy.get('fun-user-compensated').should('exist');
      // Eth amount returned from mock
      cy.get('fun-user-compensated').contains('123');
      // Fun amount  returned from mock
      cy.get('fun-user-compensated').contains('4,567');
      cy.get('#acknowledgeUserCompensationButton').click();
      cy.get('fun-user-compensated').should('not.exist');
    });
  });
});

describe('sign up flow', () => {
  describe('happy path', () => {
    afterEach(() => {
      cy.visit('/');
    });
    it('should redirect to setup-wallet if web3status not SIGNED_IN', () => {
      const dodgyWeb3Statuses = [0, 1, 2, 3, 5];

      for (let index = 0; index < dodgyWeb3Statuses.length; index++) {
        const status = dodgyWeb3Statuses[index];

        setMockMode({ web3Status: status });

        cy.visit('/');
        cy.get('#play-button')
          .first()
          .click({ force: true });
        cy.url().should('include', 'setup-wallet');
      }
    });

    it('should redirect to setup-wallet if no address', () => {
      setMockMode({ address: null });

      cy.visit('/');
      cy.get('#play-button')
        .first()
        .click({ force: true });
      cy.url().should('include', 'setup-wallet');
    });

    it('should redirect to funpass if previous steps complete, no funpass and it is required', () => {
      setMockMode({ hasFunPass: false });

      cy.visit('/');
      cy.get('#play-button')
        .first()
        .click({ force: true });
      cy.url().should('include', 'verify-id');
    });

    it('should redirect to terms page if previous steps complete, terms not signed, and required', () => {
      setMockMode({ acceptedTerms: false });

      cy.visit('/');
      cy.get('#play-button')
        .first()
        .click({ force: true });
      cy.url().should('include', 'accept-terms');
    });
  });
});

describe('geolocation checks', () => {
  it('should pop up a modal on app load and route to geolocation page instead of sign up if geolocation not allowed', () => {
    setMockMode({
      funPassRequired: true,
      geolocationAllowed: false,
      termsRequired: true,
      acceptedTerms: false,
    });

    cy.visit('/');
    cy.get('fun-geolocation-dialog').should('exist');
    cy.get('#closeGeolocationDialogButton').click();
    cy.get('#signUpButton').click();
    cy.get('fun-geolocation-page').should('exist');
  });
});
