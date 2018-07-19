import {Injectable, EventEmitter} from '@angular/core';

export type InternalStateType ={
	[key : string] :any
};

@Injectable()
export class AppState{
	_state: InternalStateType = {};
	authEvent : EventEmitter<any> = new EventEmitter();


	constructor(){}
	// already return a clone of the current state
	get state(){
		return this._state =this._clone(this._state);
	}

	// never allow mutation
	set state(value) {
		throw new Error('do not mutate the `.state` directly');
	}

	get(prop?: any) {
		// use our state getter for the clone
		const state = this.state;
		return state.hasOwnProperty(prop) ? state[prop] : null;
	}

	set(prop: string, value: any) {
		// internally mutate our state
		return this._state[prop] = value;
	}
	
	get selectedEventChangeEvent(){
		return this.authEvent;
	}
	private _clone(object: InternalStateType) {
		// simple object clone
		return JSON.parse(JSON.stringify( object ));
	}
	clearAppState(){
		this._state ={};
	}
}
