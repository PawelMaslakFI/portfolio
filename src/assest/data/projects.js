import p11 from './projectsImg/project1_1.jpg';
import p12 from './projectsImg/project1_2.jpg';
import p13 from './projectsImg/project1_3.jpg';
import p14 from './projectsImg/project1_4.jpg';
import p15 from './projectsImg/project1_5.jpg';
import p16 from './projectsImg/project1_6.jpg';
import p17 from './projectsImg/project1_7.jpg';
import p21 from './projectsImg/project2_1.jpg';
import p22 from './projectsImg/project2_2.jpg';
import p23 from './projectsImg/project2_3.jpg';

const projects = [
    {
        title: "E-Commerce App",
        general: "Full stack MERN app.",
        desc: "An online web store application with login / register users, shopping cart, products search, payment method and an admin panel that allows you to manage products,orders, users, categories or even a carousel.",
        techstack: "React, Node, Express, MongoDB, Redux, JWT, Stripe, Firebase, MUI, RWD, RestAPI",
        github: "https://github.com/krychkarol/react-shop",
        demo: "https://brodacz.herokuapp.com/",
        img: [p11, p12, p13, p14, p15, p16, p17]
    },
    {
        title: "Shooter game",
        general: "Vanilla JavaScript.",
        desc: "Simple shooter in which you have to shoot incoming enemies before they approach you. It has a basic interface, score and on-hit explosions.",
        techstack: "JS, HTML, CSS",
        github: "https://github.com/krychkarol/shooter-game",
        demo: "https://shooter-game-js.herokuapp.com/",
        img: [p21, p22, p23]
    }
];

export default projects; 