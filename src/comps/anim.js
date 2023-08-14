export const leftPageTransition = {
    hidden: { opacity: 0,
        x:100},
        show:{
            opacity:1,
            x:0,
            transition:{
                type: "spring",
                ease:"easeIn",
                duration:.3
            }
        },
        exit:{
            opacity: 0,
        x:-100
        }
}
export const rightPageTransition = {
    hidden: { opacity: 0,
        x:-100},
        show:{
            opacity:1,
            x:0,
            transition:{
                type: "spring",
                ease:"easeIn",
                duration:.3
            }
        },
        exit:{
            opacity: 0,
        x:100
        }
}