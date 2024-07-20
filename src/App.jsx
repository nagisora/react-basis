import { useCallback, useState } from "react"
import { ChildArea } from "./component/ChildArea";
import { InlineStyle } from "./component/InlineStyle";

export const App = () => {
    console.log("APP");

    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setText(e.target.value);

    const onClickOpen = () => setOpen(!open);

    const onClickClose = useCallback(() => setOpen(false), [setOpen]);

    return (
        <div>
            <InlineStyle />
        </div>
    )
}