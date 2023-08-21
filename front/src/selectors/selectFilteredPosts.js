import { createSelector } from "@reduxjs/toolkit";

const selectFilteredPosts = createSelector(
    (state) => state.posts.value,
    (_, filterText) => filterText,
    (posts, filterText) =>
        filterText !== '' 
            ? posts.filter((post) => post.name.toLowerCase().includes(filterText.toLowerCase()))
            : posts
);

export default selectFilteredPosts;