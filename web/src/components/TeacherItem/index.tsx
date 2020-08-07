import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/53327704?s=460&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4" alt="Lucas Hideki" />
                <div>
                    <strong>Lucas Hideki</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores teconologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
            <footer>
                <p>Preço/hora
                            <strong>80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
