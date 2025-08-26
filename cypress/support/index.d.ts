export { };
declare global {
    namespace Cypress {
        interface Chainable {
            authUser(path?: string): Chainable<void>
        }
    }
}