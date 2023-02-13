export const getScreenWidth = () => {
    let screeenWidth = window.innerWidth;

    if (screeenWidth < 481) {
        return "SM";
    } else if (screeenWidth < 769) {
        return "MD";
    } else {
        return "LG";
    }
};
