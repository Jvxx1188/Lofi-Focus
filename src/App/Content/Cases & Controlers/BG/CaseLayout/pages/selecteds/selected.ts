import { VideoObj } from "../../../interface"

export const Videos : Array<videos> = [
    {
        'tittle' : "Colors",
        'values': [
            {
                url : "https://www.youtube.com/watch?v=ylvO1_VZZCs",
                ImageUrl : "https://i.ytimg.com/vi/ylvO1_VZZCs/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDkoMDAP&rs=AOn4CLBghJyVDRK_kpPfj6cIzme-5diN4g",
                radio : [16,9]
            },
            {
                url : "https://youtu.be/xDFWLudn5WY?si=LhEFDWuYvZfZbC0S",
                ImageUrl : "https://i.ytimg.com/an_webp/xDFWLudn5WY/mqdefault_6s.webp?du=3000&sqp=CNS_ta0G&rs=AOn4CLDgtt_qRyJGrWv8rKPWgKrvdwDlSQ",
                radio : [16,9]
            },
            {
                url : "https://www.youtube.com/watch?v=BFhp7Y0iLSA",
                ImageUrl : "https://i.ytimg.com/an_webp/BFhp7Y0iLSA/mqdefault_6s.webp?du=3000&sqp=CIC2ta0G&rs=AOn4CLDwVxAS1WLzl9idPKuLpJD_W992Mw",
                radio : [16,9]
            },
            {
                url : "https://www.youtube.com/watch?v=jRn3MDxESfw",
                ImageUrl : "https://i.ytimg.com/an_webp/nPQ4BpTfK1Q/mqdefault_6s.webp?du=3000&sqp=COy0ta0G&rs=AOn4CLDCCSB0HQx-gUfskBGZe__JRRlMEg",
                radio : [16,9]
            },
            {//the drive
                url : "https://www.youtube.com/watch?v=lrf-GAYUOkQ",
                ImageUrl : "https://i.ytimg.com/vi/rqJDO3TWnac/maxresdefault.jpg",
                radio : [16,9]
            },
            {
                url : "https://www.youtube.com/watch?v=J3KuM2AJ1DM",
                ImageUrl : "https://i.ytimg.com/vi/J3KuM2AJ1DM/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgTIBgofzAP&rs=AOn4CLDQMyaPo3K_IT-NT5Jq8ZXvx1boIg",
                radio : [16,9]
            },
            
        ]
    },
    {
        'tittle' : "Ambients",
        'values': [
            {
                url : "https://www.youtube.com/watch?v=877xvzpyeeo",
                ImageUrl : "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
                radio : [16,9]
            },
            {
                url : "https://www.youtube.com/watch?v=XqIYOAoOAes",
                ImageUrl : "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
                radio : [16,9]
            },
            
        ]
    },
]

interface videos {
   tittle : string
    values : Array<VideoObj>
}