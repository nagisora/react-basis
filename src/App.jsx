import { useCallback, useState } from "react"
import { ChildArea } from "./component/ChildArea";

export const App = () => {
    console.log("APP");

    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setText(e.target.value);

    const onClickOpen = () => setOpen(!open);

    const onClickClose = useCallback(() => setOpen(false), [setOpen]);

    return (
        <div>
            <input value={text} onChange={onChangeText} />
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose} />
        </div>
    )
}