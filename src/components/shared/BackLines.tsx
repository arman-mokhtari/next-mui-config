"use client"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";


const BackLines = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: 1,
                height: "100vh",
                position: "absolute",
                top: 0,
            }}>

                {
                    ["20%", "40%", "60%", "80%"].map((value, index) => (
                        <Box
                            key={index}
                            component="span"
                            sx={{
                                height: "100vh",
                                width: "1px",
                                backgroundColor: theme.palette.mode === "dark" ? "#2e344e4d" : "#cbced880",
                                position: "absolute",
                                right: value,
                            }}
                        />
                    ))
                }

        </Box>
    )
}

export default BackLines;