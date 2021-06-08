import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
import { RootState, AppDispatch } from './store'

// bridge to react hooks from redux so it doesn't have to happen dynamically
// in our react components we import from here instead of the react-redux store
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

