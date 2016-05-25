// Define all existing DOM jquery objects
let domItems = {
  headerLogo: $('#header-logo'),
  sectionPlayerInput: $('#section-player-input'),
  sectionGame: $('#section-game'),
  buttonCreateGame: $('#btn-create-game'),
  buttonBeginGame: $('#btn-begin-game'),
  buttonPlaceTile: $('#btn-place-tile'),
  buttonPlaceMeeple: $('#btn-place-meeple'),
  buttonSkipMeeple: $('#btn-skip-meeple'),
  inputPlayerName1: $('#input-player-name-1'),
  inputPlayerName2: $('#input-player-name-2'),
  gameBoard: $('#board')
};

function domInventory (key) {
  return domItems[key] || null;
}

module.exports = {
  dom: domInventory
};