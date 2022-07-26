import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const centurionDescribe = (

  <div>
    <div className="d-flex">
      <div className="p-2 flex-fill">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e8102e84062975.5d92f34e8ba4c.png"
          height="450"
        />
      </div>
      <div className="p-2 flex-fill">S.P.Q.R! В 171 году до н.э. Спурий Лигустин записался добровольцем в армию, предназначенную для войны против македонского царя Персея. Ливий сообщает, что добровольцев было так много, что многим центурионам-ветеранам, в том числе Спурию Лигустину, пришлось занимать должности ниже тех, на которые они претендовали. Из его речи, обращённой к народному собранию, мы узнаём, что из своих 50 с чем-то лет жизни Спурий Лигустин прослужил 22 года: сначала три года в качестве солдата, а затем центуриона. При этом в каждом последующем походе он получал всё более высокий ранг, пока не дослужился до должности первого центуриона первой центурии. Затем он ещё четырежды был примипилом (самым высоким по рангу центурионом) в разных легионах, получил 34 награды за храбрость и шесть венков за спасение жизни римского гражданина.</div>
    </div>
    <div>
      <Link to="/CenturionStart" className="btn btn-danger">В бой!</Link>
    </div>
  </div>
);

const traderDescribe = (
  <div>
    <div>traderDescribe</div>
    <div>
      <Link to="/TraderStart" className="btn btn-danger">В бой!</Link>
    </div>
  </div>
);

const craftsmanDescribe = (
  <div>
    <div>craftsmanDescribe</div>
    <div>
      <Link to="/CraftsmanStart" className="btn btn-danger">В бой!</Link>
    </div>
  </div>
);

export default function ChooseHero() {
  const [componentShown, setComponentShown] = useState(false);
  const centurionShowHandler = () => setComponentShown((prev) => centurionDescribe); // VAZHNO! eto kak zakryvat po double-click

  // const [traderIsShown, traderSetShown] = useState(false);
  const traderShowHandler = () => setComponentShown(traderDescribe);

  // const [craftsmanIsShown, craftsmanSetShown] = useState(false);
  const craftsmanShowHandler = () => setComponentShown(craftsmanDescribe);

  const nullShowHandler = () => setComponentShown(false);
  return (
    <div className="row">
      <div>
        <h3 className="mt-5">Здравствуй, Username, Тебе предстоит путешествие по древнему Риму!</h3>
        <h1 className="mt-5">Выбери своего героя:</h1>
        <div className="d-flex justify-content-evenly mt-5">
          <p1 align="center" style={{ cursor: 'pointer' }} onClick={centurionShowHandler}>Центурион</p1>
          <p1 align="center" style={{ cursor: 'pointer' }} onClick={traderShowHandler}>Купец</p1>
          <p1 align="center" style={{ cursor: 'pointer' }} onClick={craftsmanShowHandler}>Ремесленник</p1>
        </div>
      </div>
      {/* {some && <} */}
      {/* {!componentShown === false ?
        componentShown && <h1>{componentShown}</h1> : nullShowHandler } */}
      {componentShown && <h1>{componentShown}</h1>}
      {/* {componentShown && <h1>{centurionDescribe}</h1>}
      {componentShown && <h1>{traderDescribe}</h1>}
      {componentShown && <h1>{craftsmanDescribe}</h1>} */}

      {/* <p align="center">
        <img
          src="https://i.pinimg.com/originals/b6/de/e9/b6dee94aa8e5456863ae46fcd5995a92.jpg"
          height="70%"
          width="70%"
        />
      </p> */}

    </div>
  );
}
