"use strict";

const socialposts = {
    templateUrl: "app/Social Posts/socialPosts.html",
    controller: [function(){
        const vm = this
        vm.postList = [
            {title: "Test Post",content: "please ignore",score: 200},
            {title: "Feature request",content: "You know what would be cool? sorting by new and top! also maybe a search bar :D",score: 57},
            {title: "Hey this site is pretty alright",content: "anyone else think so?",score: 13},
            {title: "This site is useless",content: "",score: -61},
            {title: "hmmm... 🤔",content: "Anxiety is like when video game combat music is playing but you can't find any enemies.",score: 32}
        ]
        vm.addPost = function (newPost) {
            newPost.score = 0
            newPost.hasUpvoted = false
            newPost.hasDownvoted = false
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