import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { theme } from "../../style/theme";

export const CustomCard = styled(Card)`
  && {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    margin: ${({ margin }) => margin};

    &:hover {
      background-color: ${theme.colors.veryGray100};
      cursor: pointer;
    }
  }
`;
