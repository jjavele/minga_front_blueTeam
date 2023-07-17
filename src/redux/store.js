import { configureStore } from '@reduxjs/toolkit'

import authorReducer from './reducers/me_authors'
import mangasReducer from './reducers/mangas_news'
import mangaReducer from './reducers/manga'

  export const store = configureStore ({
reducer: {
    manga:mangaReducer,
    author: authorReducer,
    mangas: mangasReducer
}
})
