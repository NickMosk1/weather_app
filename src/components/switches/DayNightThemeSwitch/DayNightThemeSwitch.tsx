import styled from "@emotion/styled";
import StyledMaterialUISwitch from "./StyledMaterialUISwitch/StyledMaterialUISwitch";

interface DayNightThemeSwitchProps {
    checked: boolean;
    onChange: () => void;
}

const DayNightThemeSwitch: React.FC<DayNightThemeSwitchProps> = (props) => {
    return(
        <DayNightThemeSwitchWrapper>
            <StyledMaterialUISwitch {...props}/>
        </DayNightThemeSwitchWrapper>
    );
};

export default DayNightThemeSwitch;

const DayNightThemeSwitchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;