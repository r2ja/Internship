import { Box, Typography, Button } from "@mui/material";
import CoverImageOne from "../assets/Images/aboutUs/couple-model.png";
import discount from "../assets/Images/aboutUs/discount.png";
import cloth from "../assets/Images/aboutUs/cloth.png";
import titlecover from "../assets/Images/aboutUs/cover-title.jpg";
import img1 from "../assets/Images/aboutUs/profiles/img1.jpg";
import img2 from "../assets/Images/aboutUs/profiles/img2.jpg";
import img3 from "../assets/Images/aboutUs/profiles/img3.jpg";
import img4 from "../assets/Images/aboutUs/profiles/img4.jpg";
import img5 from "../assets/Images/aboutUs/profiles/img5.jpg";
import ProfileCard from "../components/aboutUs/card";
import Footer from "../components/common/footer/footer";
import PageHeader from "../components/common/pageHeader/pageHeader";

// import { cloth, discount, coupleModel } from "../assets/Images/aboutUs/index"

const profiles = [
  { image: img1, name: "John Doe", profession: "Model" },
  { image: img2, name: "Ali Singh", profession: "Business" },
  { image: img3, name: "Jawad Khan", profession: "Employee" },
  { image: img4, name: "David Blaine", profession: "Footballer" },
  { image: img5, name: "C. Ronaldo", profession: "Cricketer" },
];

function AboutUs() {
  return (
    <>
      <PageHeader img={titlecover} name="About Us" />

      <Box
        sx={{
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        <Box
          sx={{
            flex: "0 0 50%",
            paddingRight: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundImage: `url(${CoverImageOne})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "500px",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            flex: "0 0 50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
          >
            <Box sx={{ marginRight: "1rem" }}>
              <img
                src={cloth}
                alt="Discount"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box>
              <Typography variant="h4">Sale on latest fashion</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
          >
            <Box sx={{ marginRight: "1rem" }}>
              <img
                src={discount}
                alt="Discount"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box>
              <Typography variant="h4">Sale on latest fashion</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "auto",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: "5rem 0rem", textAlign: "center" }}>
          <Typography variant="h2" color="white" textAlign="center">
            25% Off
          </Typography>
          <Typography variant="h4" color="white" textAlign="center">
            On all orders above $299
          </Typography>
          <Typography variant="h6" color="white" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
            incididunt labore dolore.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: "2rem",
              justifyContent: "center",
              backgroundColor: "darkgray",
              color: "black",
              fontSize: "14px",
              padding: "15px 25px",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            GRAB THIS OFFER
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "auto",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: "5rem 0" }}>
          <Typography variant="h4" textAlign="center">
            {" "}
            They love us.{" "}
          </Typography>
          <Typography variant="h6" textAlign="center">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </Box>
      </Box>

      <Box sx={{ pt: "5rem" }}>
        <Footer />
      </Box>
    </>
  );
}

export default AboutUs;
