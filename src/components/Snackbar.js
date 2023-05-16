import * as React from "react";
import Button from "@mui/material/Button";
import tw from "tailwind-styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import {
  SnackbarProvider,
  useSnackbar,
  MaterialDesignContent,
} from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  const customClick = () => {
    enqueueSnackbar(
      <div>
        <StarOutlinedIcon />
      </div>
    );
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant("error")}>
        Show success snackbar
      </Button>
      <Button onClick={customClick}>hir</Button>
    </React.Fragment>
  );
}

export default function Snackbar() {
  const StyledMaterialDesignContent = tw(MaterialDesignContent)`
    "&.notistack-MuiContent-success": {
      bg-white
      text-black
    },
    "&.notistack-MuiContent-error": {
      bg-gray
      align-center
      text-white
    },
  `;

  const StyledSnackbarProvider = tw(SnackbarProvider)`
    &.SnackbarItem-contentRoot {
      bg-orange
    }
  `;

  return (
    <StyledSnackbarProvider
      maxSnack={10}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
      iconVariant={{
        success: "⭐",
        error: "☆",
      }}
    >
      <MyApp />
    </StyledSnackbarProvider>
  );
}
