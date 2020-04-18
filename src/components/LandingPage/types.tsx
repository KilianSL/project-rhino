export type LandingPageSlideProps = {
    title : string,
    content : string
};

export type LandingPageProps = {
    title : string, // Title displayed at top of all pages
    subtitle : string, // Subtitle + content of first slide
    logo : string,
    slides : Array<LandingPageSlideProps>, // List of slides to display
    btnText : string, // Text to be on button of each slide
    btnLink : React.FunctionComponent // Link for the button to go to
};