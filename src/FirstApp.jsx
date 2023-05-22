const newMessage = {
    message: "Hola Mundo",
    title: "Illika"
};

const nombre = () => {
    return "illika";
}

export const FirstApp = () => {

    return (
        <>
            <h1>{ nombre() }</h1>
            <code>{ JSON.stringify(newMessage) }</code>
            <p>Soy un Subtitulo</p>
        </>
    );
}