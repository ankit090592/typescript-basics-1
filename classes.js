var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YouTube = /** @class */ (function () {
    function YouTube(videoTitle, videoDescription, videoDuration, videoPublisher, videoPublisherSubscribers, videoPublisherPageUrl, videoDate, videoViews, videoLikes, videoDislikes, videoShare, videoComments, videoAutoplay, videoSuggestions, videoSubtitles, subscribedToPublisher, isGoogleLoggedIn, userLocation) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoDuration = videoDuration;
        this.videoPublisher = videoPublisher;
        this.videoPublisherSubscribers = videoPublisherSubscribers;
        this.videoPublisherPageUrl = videoPublisherPageUrl;
        this.videoDate = videoDate;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoShare = videoShare;
        this.videoComments = videoComments;
        this.videoAutoplay = videoAutoplay;
        this.videoSuggestions = videoSuggestions;
        this.videoSubtitles = videoSubtitles;
        this.subscribedToPublisher = subscribedToPublisher;
        this.isGoogleLoggedIn = isGoogleLoggedIn;
        this.userLocation = userLocation;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoDescription = function () {
            return _this.videoDescription;
        };
        this.getVideoDuration = function () {
            return _this.videoDuration;
        };
        this.getVideoPublisher = function () {
            return _this.videoPublisher;
        };
        this.getVideoSuggestions = function () {
            return _this.videoSuggestions;
        };
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoDuration = videoDuration;
        this.videoPublisher = videoPublisher;
        this.videoPublisherSubscribers = videoPublisherSubscribers;
        this.videoPublisherPageUrl = videoPublisherPageUrl;
        this.videoDate = videoDate;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoShare = videoShare;
        this.videoComments = videoComments;
        this.videoAutoplay = videoAutoplay;
        this.videoSuggestions = videoSuggestions;
        this.videoSubtitles = videoSubtitles;
        this.isGoogleLoggedIn = isGoogleLoggedIn;
        this.userLocation = userLocation;
    }
    return YouTube;
}());
// protected videoTitle: string,
//         protected videoDescription: string,
//         protected videoDuration: number,
//         protected videoPublisher: string,
//         protected videoPublisherSubscribers: number,
//         protected videoPublisherPageUrl: string,
//         protected videoDate: Date = new Date(),
//         protected videoViews: number,
//         protected videoLikes: number,
//         protected videoDislikes: number,
// videoTitle,videoDescription,videoDuration,videoPublisher,videoPublisherSubscribers,
//             videoPublisherPageUrl,videoDate,videoViews,videoLikes,videoDislikes
var NowPlaying = /** @class */ (function (_super) {
    __extends(NowPlaying, _super);
    function NowPlaying(videoTitle, videoID, videoCategory, userLiked, addToFavPlaylist, addToWatchLater) {
        var _this = _super.call(this, videoTitle) || this;
        _this.videoTitle = videoTitle;
        _this.videoID = videoID;
        _this.videoCategory = videoCategory;
        _this.userLiked = userLiked;
        _this.addToFavPlaylist = addToFavPlaylist;
        _this.addToWatchLater = addToWatchLater;
        _this.getVideoID = function () {
            return _this.videoID;
        };
        _this.videoTitle = videoTitle;
        _this.videoID = videoID;
        _this.videoCategory = videoCategory;
        _this.userLiked = userLiked;
        _this.addToFavPlaylist = addToFavPlaylist;
        _this.addToWatchLater = addToWatchLater;
        return _this;
    }
    return NowPlaying;
}(YouTube));
// class Suggestions extends YouTube {
//     private videoID: number;
//     private serialNum: number;
//     private videoUrl: string;
//     constructor(serialNum: number, videoUrl: string) {
//         super(serialNum, videoUrl);
//     }
// }
// class LikedVideos extends YouTube {
//     serialNum: number;
//     private videoUrl: string;
//     addDate: Date = new Date();
// }
var youTubeInst = new YouTube("Title-ABC", "Description", 3, "Publisher Name", 3500, "www.hungama.com", "12/05/2018", 2000, 400, 168, undefined, ["Nice video"], false, ["New videos", 5], undefined, true, false, "India");
var nowPlaying = new NowPlaying(youTubeInst.getVideoTitle(), 132, "pop", true, false, false);
console.log("You are watching: " + youTubeInst.getVideoTitle() + " by: " + youTubeInst.getVideoPublisher());
console.log("Video suggestions: " + youTubeInst.getVideoSuggestions());
var favouriteList = [];
favouriteList.push(nowPlaying.getVideoID());
var favList = ["", 0];
favList.push("nowPlaying.getVideoTitle()", nowPlaying.getVideoID());
console.log("ID : " + nowPlaying.getVideoID());
console.log("Your fav list has: " + favList[0].toString() + " video");
console.log("Your favourite list has: " + nowPlaying.getVideoTitle() + " video");
console.log("For complete video details refer to: " + JSON.stringify(youTubeInst));
