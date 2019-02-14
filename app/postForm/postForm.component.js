"use strict";

const postform = {
    templateUrl: "app/postForm/postForm.html",
    bindings: {
        addPost: "&",
        toggleForm: "&"
    }
}

angular
    .module("app")
    .component("postform", postform)