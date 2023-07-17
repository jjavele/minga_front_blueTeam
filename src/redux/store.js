import { configureStore } from '@reduxjs/toolkit'

import authorReducer from './reducers/me_authors'
import mangasReducer from './reducers/mangas_news'
import mangaReducer from './reducers/manga'
import checkReducer  from "./reducers/mangas";
import chaptersReducer from "./reducers/chapters";



  export const store = configureStore ({
reducer: {
    manga:mangaReducer,
    author: authorReducer,
    mangas: mangasReducer,
    check:checkReducer,
    chapters: chaptersReducer,

}
})
