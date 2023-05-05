import Avatar from '../img/Larissa_2.png';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Larissa Martins" /> 
            <p className="title">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download CV</a>
        </aside>
    );
};

export default Sidebar;