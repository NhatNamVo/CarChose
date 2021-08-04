import View360 from "./view360.js";
const changeColor = (event) => {
    const objClick = document.querySelectorAll('.btn');
    const btnColor = event.target.closest('.btn');
    if (btnColor) {
        switch (btnColor.dataset.color) {
            case "blue":
                View360(0);
                return;
            case "black":
                View360(1);
                return;
            case "silver":
                View360(2);
                return;
            case "red":
                View360(3);
                return;
            case "steel":
                View360(4);
                return;
            case "amethyst":
                View360(5);
                return;
            case "white":
                View360(6);
                return;
        }
    }
}

export default changeColor;