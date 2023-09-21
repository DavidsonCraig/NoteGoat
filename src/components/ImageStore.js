import { useEffect } from "react";
import piano from "../images/piano.png"
import lock from "../images/lock.png"

import tutorial_1 from "../images/tutorial_1.png"
import tutorial_2 from "../images/tutorial_2.png"
import tutorial_3 from "../images/tutorial_3.png"
import tutorial_4 from "../images/tutorial_4.png"
import tutorial_5 from "../images/tutorial_5.png"
import tutorial_6 from "../images/tutorial_6.png"
import tutorial_7 from "../images/tutorial_7.png"
import tutorial_8 from "../images/tutorial_8.png"
import tutorial_9 from "../images/tutorial_9.png"
import tutorial_10 from "../images/tutorial_10.png"
import tutorial_11 from "../images/tutorial_11.png"
import tutorial_12 from "../images/tutorial_12.png"
import tutorial_13 from "../images/tutorial_13.png"
import tutorial_14 from "../images/tutorial_14.png"
import tutorial_15 from "../images/tutorial_15.png"
import tutorial_16 from "../images/tutorial_16.png"
import tutorial_17 from "../images/tutorial_17.png"



const ImageStore = (props) => {
    const setImageStore = props.setImageStore

    useEffect(() => {
        let tmp = {}
        tmp.piano = piano
        tmp.lock = lock
        tmp.tutorial_1 = tutorial_1
        tmp.tutorial_2 = tutorial_2
        tmp.tutorial_3 = tutorial_3
        tmp.tutorial_4 = tutorial_4
        tmp.tutorial_5 = tutorial_5
        tmp.tutorial_6 = tutorial_6
        tmp.tutorial_7 = tutorial_7
        tmp.tutorial_8 = tutorial_8
        tmp.tutorial_9 = tutorial_9
        tmp.tutorial_10 = tutorial_10
        tmp.tutorial_11 = tutorial_11
        tmp.tutorial_12 = tutorial_12
        tmp.tutorial_13 = tutorial_13
        tmp.tutorial_14 = tutorial_14
        tmp.tutorial_15 = tutorial_15
        tmp.tutorial_16 = tutorial_16
        tmp.tutorial_17 = tutorial_17
        setImageStore(tmp)
    }, [])

}
 
export default ImageStore;