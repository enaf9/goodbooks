import React from "react";
import { useSelector } from "react-redux";

import BookDetailCard from "./BookDetailCard/index";
import Tabs from "../../Tabs";
import BookInfoBox from "./BookInfoBox/index";

//styled components imports
import Description from "./Description";

const BookPage = () => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const tabs = ["Popis", "Info", "Recenze"];

  switch (currentTab) {
    case 0:
      content = (
        <Description>
          První kniha plánovaného desetidílného cyklu je vstupní bránou do světa
          Rošáru. Rošár je kamenná země zmítaná bouřemi, jimž se přizpůsobila
          příroda (rostliny rostou z kamene a v bouřích se zatahují do země,
          zvířata se ukrývají do ulit a tvrdých schránek) i lidé (města se staví
          podle přesných schémat v místech mezi skalami). Při bouřích se
          uvolňuje zvláštní energie, bouřná záře, kterou je možné nabít
          polodrahokamy a ty potom využít třeba k pohonu fabriálů (důmyslných
          zařízení, která lidem zjednodušují život). Předurčení jedinci dokáží
          pomocí bouřné záře znásobit své síly a získat mimořádné schopnosti.
          Tento svět čelí dvěma hrozbám: periodickým obdobím katastrofálních
          spouští, z nichž ta nejhorší a poslední má teprve přijít, a odvěkému
          nepříteli, pustonošům, proti němuž lidstvo v dávné minulosti bránily
          rytířské řády paprsku, než záhadně zmizely ze země. Lidem po nich
          zůstaly jenom střepkordy a střepláty, mystické zbraně, které mění
          obyčejné lidi v neporazitelné válečníky. Není jich mnoho a platí se za
          ně královstvími. V tomto světě se odvíjejí na pozadí poněkud absurdní
          války aletů proti paršendům osudy tří hlavních hrdinů, zprvu
          samostatně, postupně se v náznacích začínají prolínat.
        </Description>
      );
      break;
    case 1:
      content = <BookInfoBox />;
      break;
    case 2:
      content = <></>;
      break;
    default:
      content = <></>;
      break;
  }

  return (
    <>
      <BookDetailCard />
      <Tabs tabs={tabs} />
      {content}
    </>
  );
};

export default BookPage;
