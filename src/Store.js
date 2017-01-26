import Immutable, {Map} from 'immutable';

/**
 * Copyright (c) 2017, Nitrogen Labs, Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

export default class Store {
  /**
   * A Flux-like Store Interface
   *
   * @constructor
   * @this {Store}
   */
  constructor(name) {
    this.state = Map();
    this.name = (name || 'store').toLowerCase();
  }

  /**
   * Initial state.
   *
   * @return {Object} The initial state of the store as a JSON object.
   */
  initialState() {
    return {};
  }

  /**
   * Get the initial state as an immutable object.
   *
   * @return {Immutable} The initial state of the store as an immutable object.
   */
  getInitialState() {
    return Immutable.fromJS(this.initialState());
  }

  /**
   * Action listener. It should return an altered state depending on the event dispatched.
   *
   * @param {String} type Dispatched event.
   * @param {Object} data Data payload associated with the called action.
   * @param {Immutable} state The current state.
   * @return {Immutable} The final state of the store as an immutable object.
   */
  onAction(type, data, state) {
    switch(type) {
      default:
        return state;
    }
  }
}
