import { styled } from "@mui/material";
import { TextField } from "@mui/material";

export const STF = styled(TextField)(({ theme, error }) => ({
   ...theme,
   "& label": {
      color: theme.palette.secondary.main,
   },
   "& .MuiFormHelperText-root": {
      color: theme.palette.secondary.main,
      "&.Mui-error": {
         color: theme.palette.error.main,
      },
   },
   "& .MuiFilledInput-root": {
      background: theme.palette.background.light,

      borderBottomColor: theme.palette.secondary.main,
      "& .MuiInputAdornment-root": {
         "& p": {
            color: error
               ? theme.palette.error.main
               : theme.palette.secondary.main,
         },
         "& .MuiSvgIcon-root": {
            color: error
               ? theme.palette.error.main
               : theme.palette.secondary.main,
         },
      },
      "&:before": {
         borderBottomColor: error
            ? theme.palette.error.main
            : theme.palette.secondary.main,
      },
      "&:hover": {
         borderBottomColor: theme.palette.secondary.main,
         background: theme.palette.secondary.contrastText,

         "&:before": {
            borderBottomColor: error
               ? theme.palette.error.main
               : theme.palette.secondary.main,
         },
      },
      "&.Mui-focused": {
         background: theme.palette.secondary.contrastText,

         "& .MuiInputAdornment-root": {
            "& p": {
               color: error
                  ? theme.palette.error.main
                  : theme.palette.primary.main,
            },
            "& .MuiSvgIcon-root": {
               color: error
                  ? theme.palette.error.main
                  : theme.palette.primary.main,
            },
         },
      },
   },
   "& .MuiFilledInput-input": {
      color: theme.palette.secondary.main,
   },
}));

export const StyledTextField = ({
   errors,
   register,
   label,
   options,
   errMessage = "некоректно заповнене поле",
   helperMessage = "необов'язкове поле",
   helper = false,
}) => {
   return (
      <STF
         error={!!errors[register.name]}
         {...register}
         label={label}
         {...options}
         helperText={
            errors?.[register.name]
               ? errors?.[register.name]?.message || errMessage
               : helper && helperMessage
         }
         variant="filled"
      />
   );
};
