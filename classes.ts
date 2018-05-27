class YouTube {

    constructor(
        protected videoTitle: string,
        protected videoDescription?: string,
        protected videoDuration?: number,
        protected videoPublisher?: string,
        protected videoPublisherSubscribers?: number,
        protected videoPublisherPageUrl?: string,
        protected videoDate?: string,
        protected videoViews?: number,
        protected videoLikes?: number,
        protected videoDislikes?: number,
        protected videoShare?: number,
        protected videoComments?: string[],
        protected videoAutoplay?: boolean,
        protected videoSuggestions?: [string, number],
        protected videoSubtitles?: string,
        protected subscribedToPublisher?: boolean,
        protected isGoogleLoggedIn?: boolean,
        protected userLocation?: string) {

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

    getVideoTitle = () => {
        return this.videoTitle;
    }

    getVideoDescription = () => {
        return this.videoDescription;
    }
    getVideoDuration = () => {
        return this.videoDuration;
    }
    getVideoPublisher = () => {
        return this.videoPublisher;
    }
    getVideoSuggestions = () => {
        return this.videoSuggestions;
    }
}

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

class NowPlaying extends YouTube {
    constructor(
        protected videoTitle:string,
        private videoID: number,
        private videoCategory: string,
        private userLiked: boolean,
        public addToFavPlaylist: boolean,
        public addToWatchLater: boolean) {
        super(videoTitle);
            this.videoTitle = videoTitle;
        this.videoID = videoID;
        this.videoCategory = videoCategory;
        this.userLiked = userLiked;
        this.addToFavPlaylist = addToFavPlaylist;
        this.addToWatchLater = addToWatchLater;
    }

    getVideoID = () => {
        return this.videoID;
    }
}

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



let youTubeInst = new YouTube("Title-ABC", "Description", 3, "Publisher Name", 3500, "www.hungama.com", "12/05/2018",
    2000, 400, 168, undefined, ["Nice video"], false, ["New videos", 5], undefined, true, false, "India");
let nowPlaying = new NowPlaying(youTubeInst.getVideoTitle(),132, "pop", true, false, false);

console.log(`You are watching: ${youTubeInst.getVideoTitle()} by: ${youTubeInst.getVideoPublisher()}`);
console.log(`Video suggestions: ${youTubeInst.getVideoSuggestions()}`);
let favouriteList: number[] = [];
favouriteList.push(nowPlaying.getVideoID());

// let favList: [string,number] = ["", 0];
// favList.push("nowPlaying.getVideoTitle()",nowPlaying.getVideoID()); 
console.log(`ID : ${nowPlaying.getVideoID()}`)
// console.log(`Your fav list has: ${favList[0].toString()} video` )

console.log(`Your favourite list has: ${nowPlaying.getVideoTitle()} video` )

console.log(`For complete video details refer to: ${JSON.stringify(youTubeInst)}`);


