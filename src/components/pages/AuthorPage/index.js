import React from "react";
import { useSelector } from "react-redux";

import AuthorImage from "../../../images/Authors/Brandon_Sanderson.jpg";

//styled components imports
import StyledAuthorPage from "./StyledAuthorPage";
import Wrapper from "./Wrapper";
import Biography from "./Biography";

//components imports
import UserCard from "../../UserCard/index";
import Tabs from "../../Tabs/index";
import BookList from "../../BookList";
import Series from "./Series";

const AuthorPage = () => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const tabs = ["Životopis", "Knihy", "Série"];
  switch (currentTab) {
    case 0:
      content = (
        <Biography>
          Americký autor fantasy příběhů, rodák z Nebrasky. Vystudoval tvůrčí
          psaní na Brigham Young University (2005). Dvakrát byl nominován na
          Cenu Johna W. Campbella. Roku 2006 se oženil a nyní žije v Oremu, ve
          státě Utah. Hlásí se k Církvi Ježíše Krista Svatých posledních dnů.
          <br />
          <br />
          Věnuje se tvorbě převážně epické fantasy, obvykle zasazené do
          jedinečného prostředí, s propracovaným systémem magie a rozmanitými
          postavami. Kromě své románové prvotiny „Elantris“ je autorem rovněž
          trilogie „Mistborn“ a dalších. Po smrti Roberta Jordana byl vybrán
          právě Brandon Sanderson, aby dokončil závěrečný díl Jordanovy epické
          série. O tuto službu jej požádala vdova po Jordanovi, Harriet Rigney,
          na kterou „Mistborn“ učinila hluboký dojem.
        </Biography>
      );
      break;
    case 1:
      content = <BookList size="big" />;
      break;
    case 2:
      content = (
        <>
          <Series name="Mistborn" />
          <Series name="Archiv bouřné záře" />
        </>
      );
      break;
    default:
      content = (
        <Biography>
          Americký autor fantasy příběhů, rodák z Nebrasky. Vystudoval tvůrčí
          psaní na Brigham Young University (2005). Dvakrát byl nominován na
          Cenu Johna W. Campbella. Roku 2006 se oženil a nyní žije v Oremu, ve
          státě Utah. Hlásí se k Církvi Ježíše Krista Svatých posledních dnů.
          <br />
          <br />
          Věnuje se tvorbě převážně epické fantasy, obvykle zasazené do
          jedinečného prostředí, s propracovaným systémem magie a rozmanitými
          postavami. Kromě své románové prvotiny „Elantris“ je autorem rovněž
          trilogie „Mistborn“ a dalších. Po smrti Roberta Jordana byl vybrán
          právě Brandon Sanderson, aby dokončil závěrečný díl Jordanovy epické
          série. O tuto službu jej požádala vdova po Jordanovi, Harriet Rigney,
          na kterou „Mistborn“ učinila hluboký dojem.
        </Biography>
      );
      break;
  }
  return (
    <StyledAuthorPage>
      <UserCard center big img={AuthorImage} name="Brandon Sanderson" />
      <Wrapper>
        <Tabs tabs={tabs} />
        {content}
      </Wrapper>
    </StyledAuthorPage>
  );
};

export default AuthorPage;
