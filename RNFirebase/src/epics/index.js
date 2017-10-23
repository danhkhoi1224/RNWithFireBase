import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

import Actions from '../actions';

const addActions = action$ => action$.ofType(Actions.addData);

const rootEpic = combineEpics(addActions);

export default rootEpic;
