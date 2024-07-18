export const ColorfulMessage = (props) => {
    const { color, children } = props;
    console.log(props);
    const contentStyleA = {
        color,
    }

    return (
        <p style={contentStyleA}>{children}</p>
    )
}