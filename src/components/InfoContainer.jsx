import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/infocontainer.sass';

const InfoContainer = () => {
    const infoData = [
        {
          id: 1,
          icon: <AiFillPhone id="phone-icon" />,
          title: "Telefone",
          content: "(98)99999-999",
        },
        {
          id: 2,
          icon: <AiOutlineMail id="email-icon" />,
          title: "E-mail",
          content: "laricsmartins@email.com",
        },
        {
          id: 3,
          icon: <AiFillEnvironment id="address-icon" />,
          title: "Endereço",
          content: "São Paulo, SP",
        },
      ];


    return <section id="info">
        {infoData.map((data) => (
            <div className="info-card" key={data.id}>
            {data.icon}
            <div>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
            </div>   
        ))}
    </section>
};

export default InfoContainer;