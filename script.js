document.addEventListener("mousemove", (event) => {
    setTimeout(() => {
        document.body.style.background
            = `radial-gradient(at ${event.pageX}px ${event.pageY}px, rgb(255, 115, 0), rgb(255, 204, 0))`;
    }, 200);
});
