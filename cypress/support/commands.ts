import * as commonCommands from './commands/common'
import * as profileCommands from './commands/profile'
import * as articleCommands from './commands/article'
import * as commentCommand from './commands/comments'
import * as ratingCommands from './commands/rating'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(commentCommand)
Cypress.Commands.addAll(ratingCommands)