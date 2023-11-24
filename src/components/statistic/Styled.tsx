import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  padding: 5%;
  transition: all 0.3s ease-in-out;
  @media all and (max-width: 900px) {
    height: 200vh;
    max-height: none;
  }
`;

export const ImageBackground: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
  opacity: 0.5,
};

// Header------------------------------------
export const HeaderSection = styled.header`
  width: 100%;
  height: 150px;
  min-height: 150px;
  max-height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 5%;
  border-bottom: 1px solid #fff;
  transition: all 0.3s ease-in-out;
  padding-bottom: 10px;
  z-index: 1;
  @media all and (max-width: 900px) {
    min-height: 200px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const LogoBox = styled.section`
  min-width: 500px;
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  @media all and (max-width: 900px) {
    width: 100%;
    height: 150px;
  }
`;

export const NavBox = styled.section`
  width: 100%;
  display: flex;
  gap: 40px;
  @media all and (max-width: 900px) {
    justify-content: space-between;
    align-items: center;
  }
`;

interface NavSpanProps {
  isCurrent: Boolean;
}
export const StatisticNav = styled.span<NavSpanProps>`
  opacity: ${(props) => (props.isCurrent ? 1 : 0.5)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const ManagementNav = styled(StatisticNav)``;
export const AdminNav = styled(StatisticNav)``;

export const InfoBox = styled.section`
  min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  @media all and (max-width: 900px) {
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const LogoutSpan = styled.span`
  font-size: 12px;
  opacity: 0.75;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const BodySection = styled.section`
  width: 100%;
  min-height: calc(100% - 150px);
  max-height: calc(100% - 150px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  @media all and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const GraphBox = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const Graph = styled.section`
  width: 100%;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
`;

export const GraphTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 12px;
  font-family: "Syncopate", sans-serif;
`;

export const TitleBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
`;

export const Title = styled.h1`
  text-align: center;
  line-height: 2;
`;
