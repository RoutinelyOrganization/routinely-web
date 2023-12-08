import React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { styled } from "@mui/system";
import { DateCalendar } from "@mui/x-date-pickers";
import "dayjs/locale/pt-br";

interface ICustomDemoItemProps {
  label: string;
  children: React.ReactNode;
}

export const StyledDateCalendar = styled(DateCalendar)({
  width: "400px",
  borderRadius: "0 0 10px 10px",
  backgroundColor: "#F6F7F8",

  "& .Mui-selected": {
    backgroundColor: "#F6F7F8 !important",
    border: "2px #5C59BB solid !important",
    color: "#333333 !important",
  },

  "& .MuiPickersDay-today": {
    backgroundColor: "#5C59BB",
    color: "#FFFFFF",
    border: "none",
    "&:hover": {
      backgroundColor: "#7773ee",
    },
  },

  "& .MuiPickersCalendarHeader-label": {
    color: "#5C59BB",
    fontWeight: "bold",
  },

  "& .MuiPickersCalendarHeader-switchViewIcon": {
    color: "#5C59BB",
  },
});

const StyledDemoItemWrapper = styled("div")({
  backgroundColor: "#F6F7F8",
  maxWidth: "max-content",
  border: "2px solid #5C59BB",
  borderRadius: "8px",

  "> p": {
    color: "#5C59BB",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderBottom: ".1rem",
    border: "solid",
    borderColor: "transparent transparent #5C59BB transparent",
    padding: "1rem",
  },

  "> p:first-letter": {
    textTransform: "uppercase",
  },
});

export const CustomDemoItem: React.FC<ICustomDemoItemProps> = ({ label, children }) => (
  <StyledDemoItemWrapper>
    <p>{label}</p>
    <DemoItem>{children}</DemoItem>
  </StyledDemoItemWrapper>
);
