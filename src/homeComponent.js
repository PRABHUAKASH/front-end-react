import { Button } from "@mui/material";
import React,{Link,BrowserRouter,Route,Routes} from "react";
import LoginComponent from "./LoginComponent";
import { AppBar, Box, Toolbar, Typography, IconButton, Grid, Card, CardContent, CardActions, } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 import { styled, alpha } from '@mui/material/styles';
 import SearchIcon from '@mui/icons-material/Search';
 import InputBase from '@mui/material/InputBase';

 const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function HomeComponent(){
    return(
        <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Stock Overflow - Clone
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
   
  {/* ===================================================================================================== */}
   <Grid>
   <Card sx={{ Width: 75 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Search Code
        </Typography>
        <Typography variant="body2">
        
        Every developerdata scientistsystem adminmobile developergame developer has a
tab open to Stack Overflow
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   </Grid>
      
        </>
    )
}

export default HomeComponent;