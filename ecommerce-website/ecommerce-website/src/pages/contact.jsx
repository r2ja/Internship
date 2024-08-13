import PageHeader from "../components/common/pageHeader/pageHeader";
import coverImage from "../assets/Images/contactUs/CoverPhoto.jpg";
import { Typography, Box, Grid } from "@mui/material";
import ContactForm from "../components/contactUs/Form/form";
import Paper from "@mui/material/Paper";

function ContactUs() {
  return (
    <>
      <PageHeader img={coverImage} name="Contact Us" />

      <Box sx={{ pt: "2rem" }}>
        <Grid container spacing={2} marginRight="5rem">
          <Grid item xs={12} md={6}>
            <Paper elevation={5} square={false}>
              <ContactForm />
            </Paper>
          </Grid>
          <Grid item xs={2} md={2} container spacing={2} direction="column">
            <Grid item xs={2} md={6}>
              <Paper elevation={5} square={false}>
                <Typography variant="h4"> Quick Links </Typography>
                <Typography variant="body2"> Home </Typography>
                <Typography variant="body2"> Shop </Typography>
                <Typography variant="body2"> Lookbook </Typography>
                <Typography variant="body2"> About Us </Typography>
                <Typography variant="body2"> Contact Us </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={5} square={false}>
                <Typography variant="h4"> Latest Collections </Typography>
                <Typography variant="body2"> Women's Shorts </Typography>
                <Typography variant="body2"> Belts </Typography>
                <Typography variant="body2"> Watches </Typography>
                <Typography variant="body2"> Women's Jeans </Typography>
                <Typography variant="body2"> Formal Shoes </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ContactUs;
