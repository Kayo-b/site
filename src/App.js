import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography, Box, Container, CssBaseline, Link, CardActionArea } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 

const projects = [
  {
    id: 1,
    title: 'twitter clone',
    description: 'full-stack application built with react and firebase. it has features such as user authentication, posting/reposting tweets, following users and profile customization.',
    imageurl: 'path/to/your/image1.gif',
    link: 'https://twitter-clone-project-quack.web.app/homepage'
  },
  {
    id: 2,
    title: 'project 2',
    description: 'description of project 2',
    imageurl: 'path/to/your/image2.gif',
    link: 'http://link-to-project2.com'
  },
  { 
    id: 3, 
    title: 'project 3', 
    description: 'description of project 3', 
    imageurl: 'path/to/your/image3.gif', 
    link: 'http://link-to-project3.com' 
  }, 
  { 
    id: 4,
    title: 'project 4',
    description: 'description of project 4',
    imageurl: 'path/to/your/image4.gif',
    link: 'http://link-to-project4.com' 
  }
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ position: 'relative', '&:hover .project-title': { opacity: 1 } }}>
      <Box sx={{ position: 'relative', height: 140, '&:hover img': { opacity: 0.3 } }}> 
     <CardActionArea href={project.link} target="_blank"> 
      <CardMedia
          component="img"
          image={project.imageUrl}
          alt={project.title}
          sx={{ height: 140, width: '100%' }}
        />
        <Typography
          className="project-title"
          variant="h6"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '8px',
            borderRadius: '4px',
          }}
        >
          {project.title}
        </Typography>
        </CardActionArea>
      </Box>
      {/* <CardContent> */}
        {/* <Typography gutterBottom variant="h5" component="div"> */}
          {/* {project.title} */}
        {/* </Typography> */}
      {/* </CardContent> */}
      <CardActions disableSpacing>
        <Button
          startIcon={<ExpandMoreIcon />}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {expanded ? 'Less' : 'More'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{project.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? '#393352'
                : theme.palette.grey[700],

        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h4" component="h2" gutterBottom>
            Web Development Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard project={project}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[500]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              {/* My sticky footer can be found here. */}
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

