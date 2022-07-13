import React, {useState, useEffect} from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const APICaller = (props) => {
    const [imageLinkOne, setImageLinkOne] = useState("https://64.media.tumblr.com/04952afebe18cee06d628508819dccb7/tumblr_myf9593O491sjz0mho1_1280.jpg");
    const [albumOne, setAlbumOne] = useState("");
    const [yearOne, setYearOne] = useState("");

    const [imageLinkTwo, setImageLinkTwo] = useState("https://64.media.tumblr.com/04952afebe18cee06d628508819dccb7/tumblr_myf9593O491sjz0mho1_1280.jpg");
    const [albumTwo, setAlbumTwo] = useState("");
    const [yearTwo, setYearTwo] = useState("");

    const [imageLinkThree, setImageLinkThree] = useState("https://64.media.tumblr.com/04952afebe18cee06d628508819dccb7/tumblr_myf9593O491sjz0mho1_1280.jpg");
    const [albumThree, setAlbumThree] = useState("");
    const [yearThree, setYearThree] = useState("");

    const [error, setError] = useState(null);
    
    let theSite = "https://api.discogs.com/database/search?style=" + (props.linkTo) + "&per_page=200&key=rwUSDugfuDKEdtgtXGtW&secret=aEUoHJUNTOHXmLRpIEfKgXmGCflthmuk" 
    
    const getAlbums = async (url, signal) => {
        try {
            const res = await fetch(url, { signal });

            if (res.status !== 200) {
                throw new Error("Something went wrong.")
            }
            const data = await res.json();
       
            
            let whatIsThis = data.results
            let testSort = whatIsThis.sort((a, b) => {
                return a.year - b.year
            })

            let testThis = data.results[0].cover_image;
            setImageLinkOne(testThis);

            let firstAlbum = testSort[0].title
            setAlbumOne(firstAlbum);
            
            let firstYear = testSort[0].year
            setYearOne(firstYear);

            let testTwo = data.results[1].cover_image;
            setImageLinkTwo(testTwo);

            let secondAlbum = testSort[1].title
            setAlbumTwo(secondAlbum);
            
            let secondYear = testSort[1].year
            setYearTwo(secondYear);

            let testThree = data.results[2].cover_image;
            setImageLinkThree(testThree);

            let thirdAlbum = testSort[2].title
            setAlbumThree(thirdAlbum);
            
            let thirdYear = testSort[2].year
            setYearThree(thirdYear);

            
        } catch (err) {
            setError(err.message);
        }
    };

useEffect(() => {getAlbums(theSite)}, [theSite]);
 

    return (
        <div>
            <ImagePlaceholder 
            imageLinkFirst={imageLinkOne} 
            albumFirst={albumOne} 
            yearFirst={yearOne}
            imageLinkSecond={imageLinkTwo} 
            albumSecond={albumTwo} 
            yearSecond={yearTwo}
            imageLinkThird={imageLinkThree} 
            albumThird={albumThree} 
            yearThird={yearThree}
            ></ImagePlaceholder>
        </div>
    )
}

export default APICaller;