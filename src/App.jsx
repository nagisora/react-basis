import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(true);
    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };
    const contentStyle = {
        color: "blue",
    }
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    }

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]);

    return (
        <div>
            <h1 style={{ color: "red"}}>こんにちは</h1>
            <p style={contentStyle}>お元気aaaa？</p>
            {console.log("ooo")}
            <ColorfulMessage color="green" message="やあ">aaaa</ColorfulMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>＼(^o^)／</p>}
            
        </div>
    )
}