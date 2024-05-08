
import { socialData } from "@/constants/socialData";
import { IconButton, Box, Link } from "@mui/material";

const SidebarSocial = () => {
    return (
        <Box
            sx={{
                m: "0 auto",
                textAlign: "center",
            }} >
            {
                socialData.map(({ ariaLabel, title, href, icon, id }) => {
                    return (<IconButton
                        key={id} 
                        sx={{
                            '&.MuiIconButton-root:hover': {
                                backgroundColor: "transparent"
                            },
                        }}
                        aria-label={ariaLabel}
                    >
                        <Link title={title} href={href} target="_blank" rel="noopener noreferrer" >
                            {icon}
                        </Link>
                    </IconButton>)
                })
            }
        </Box>

    )
}

export default SidebarSocial;