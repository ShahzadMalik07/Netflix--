export const USER_PHOTO =  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
  };

export const IMG_URL = "https://image.tmdb.org/t/p/w500"  

export const OPEN_API= "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"