"use strict";

const socialposts = {
    templateUrl: "app/Social Posts/socialPosts.html",
    controller: [function(){
        const vm = this
        vm.postList = [
            {title: "test post",content: "please ignore",score: 99, deletable: false},
            {title: "Check out the responsiveness",content: "it looks pretty alright on mobile :)",score: 8, deletable: false},
            {title: "Data binding is pretty chill",content: "directives are pretty alright",score: 13, deletable: false},
            {title: "Try making a new post",content: "",score: 17, deletable: false},
            {title: "Why did the developer go broke?🤔",content: "Because he used up all his cache ",score: 32, deletable: false},
            {title: "Feature request",content: "add a search bar and filters! ",score: 57, deletable: false}
        ]
        vm.addPost = function (newPost) {
            newPost.score = 0
            newPost.hasUpvoted = false
            newPost.hasDownvoted = false
            newPost.deletable = true
            vm.postList.push(angular.copy(newPost))
            vm.toggleForm()
        }
        vm.deletePost = function(index) {
            vm.postList.splice(index,1)
        }
        vm.upvote = function(index) {
            // if user has downvoted
            if (vm.postList[index].hasDownvoted){
                // decrease score by 2
                vm.postList[index].score += 2
                vm.postList[index].hasUpvoted = true
                vm.postList[index].hasDownvoted = false
            // if user has not upvoted 
            } else if (!vm.postList[index].hasUpvoted){
                // increase score by 1
                vm.postList[index].score++
                // has upvoted now :)
                vm.postList[index].hasUpvoted = true
                vm.postList[index].hasDownvoted = false
            // if user has upvoted and clicks it again
            } else if (vm.postList[index].hasUpvoted){
                // resets score and values
                vm.postList[index].score--
                vm.postList[index].hasUpvoted = false
                vm.postList[index].hasDownvoted = false
            } else {
                return;
            }

        }
        vm.downvote = function(index) {
            if (vm.postList[index].hasUpvoted){
                vm.postList[index].score -= 2
                vm.postList[index].hasDownvoted = true
                vm.postList[index].hasUpvoted = false
            } else if (!vm.postList[index].hasDownvoted){
                vm.postList[index].score--
                vm.postList[index].hasDownvoted = true
                vm.postList[index].hasUpvoted = false
            } else if (vm.postList[index].hasDownvoted){
                vm.postList[index].score++
                vm.postList[index].hasUpvoted = false
                vm.postList[index].hasDownvoted = false
            } else {
                return;
            }
        }


        vm.form = false
        vm.toggleForm = function() {
            vm.form = !vm.form
        }

    }]
}

angular
    .module("app")
    .component("socialposts", socialposts)