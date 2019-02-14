"use strict";

const post = {
    templateUrl: "app/posts/post.html",
    bindings: {
        postList: "<",
        deletePost: "&",
        upvote: "&",
        downvote: "&"
    }
}

angular
    .module("app")
    .component("post", post)